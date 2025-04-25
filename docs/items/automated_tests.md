---
id: automated_tests
title: Automated Tests
sidebar_position: 6
---


Automated tests are designed to validate, in an automatic way, specific criteria and ensure compliance based on the user's input. 

## Proposed Guidelines to common structure of automated tests
### Requests
All automated test requests are suggested to be made as **POST** requests to the **/v1/automated** resource path.

### Responses
All automated test responses are recommended to follow a unified structure, as shown below:

```json
{
  "test_status": {
     "code": "integer",
    "is_valid": "boolean",
    "message": "string"
  },
  "last_run": "2025-04-25T12:15:00.000Z",
   "additional_info": {
    "field_name": "value"
  }
}
```

## Field Descriptions

| Field                          | Type                | Description                                                                 |
|---------------------------------|--------------------|-----------------------------------------------------------------------------|
| `test_status.code`              | Integer (Required) | An http code that the test returns depending on success or failure.          |
| `test_status.is_valid`          | Boolean (Required) | Indicates whether the test passed (`true`) or failed (`false`).              |
| `test_status.message`           | String (Required)  | A brief message describing the outcome of the test (e.g., success or failure). |
| `last_run`                      | String (Required)  | Timestamp of the last test run in ISO 8601 format (e.g., 2025-04-25T12:15:00.000Z). |
| `additional_info`               | Object (Optional)  | An object that can store any additional test-specific fields or data, such as individual parameters tested to conclude the test result. This is flexible and can be extended for more complex responses. |

## Guidelines for Consistent Response Structure

- **Common Status Field:** All responses will include a `test_status` object with an `code` integer, `is_valid` boolean and a `message`. This allows users to easily understand if the test passed or failed and the reason behind it.
  
- **Timestamp:** Include a `last_run` timestamp to show when the test was last executed. This ensures that the response provides temporal context.
  
- **Extend via `additional_info`:** The `additional_info` field is flexible, allowing to add extra fields that may be specific to each test. This ensures the response structure can accommodate more detailed information as needed, in cases the test applies multiple checks to conclude compliance. 

### Benefits 
**Consistency**: The response structure remains consistent across all tests, making it easier for users to process the results programmatically.
**Flexibility**: The additional_info field allows the inclusion of test-specific details without altering the common structure.
**Clearer Feedback**: With fields like test_status, test_details, and feedback, the user gets immediate insight into the test result and any issues that occurred.


## Existing Automated Tests
CAT Services supports three types of automated tests:

Note: Current implementations do not fully adhere to the new structure but will be aligned in upcoming versions.

### 1. Check a URL Supports HTTPS

### **Description**
This test performs a basic HTTPS check on the provided URL to ensure the endpoint:
1. Uses HTTPS
2. Is reachable
3. Returns a valid HTTP status

### **User Input**
- **URL**: A URL, for example: `https://example.org/service`

### **Response**
```json
{
  "code": 200,
  "is_valid_https": true,
  "last_run": "2025-04-25T12:15:00.000Z",
  "message": "URL is accessible via HTTPS."
}
```

### **Response Fields**

| **Field**           | **Type**  | **Description**                                              |
|---------------------|-----------|--------------------------------------------------------------|
| `code`              | Integer   | The HTTP status code returned by the URL.                    |
| `is_valid_https`    | Boolean   | Whether the URL supports HTTPS.                              |
| `last_run`          | String    | The timestamp of the last time the test was run.              |
| `message`           | String    | A description of the test outcome.                            |

### **Failure Scenarios**
- **URL Does Not Use HTTPS**: If the URL uses HTTP instead of HTTPS, the test will fail with a message indicating that the URL does not support HTTPS.

- **URL Is Unreachable**: If the URL cannot be reached (e.g., due to a network issue or server downtime), the test will return a failure message with an appropriate error code.

- **Invalid HTTP Status**: If the URL returns an HTTP status code outside the valid range (e.g., 4xx or 5xx errors), the test will fail and provide the relevant status code in the response.

### 2. SAML Metadata Validation

#### **Description**
This test validates the SAML Metadata XML document both structurally and against specific compliance rules. The test checks:

1. **Schema Validation**: Ensures the provided XML is well-formed and compliant with the official SAML 2.0 Metadata Schema.

2. **Test-Specific Validation**: Validates whether the metadata satisfies a specific compliance requirement, based on the provided test ID.

#### **Test-Specific Validations**

| **Test Name** | **Code** | **What It Checks**                                                                 |
|---------------|----------|-----------------------------------------------------------------------------------|
| MD-1a         | Administrative Contact Details | Checks for the presence of `<ContactPerson>` with `contactType="administrative"` and at least one `<EmailAddress>`. |
| MD-1b1        | Security Contact Email         | Validates a `<ContactPerson>` with `contactType="other"` and specific `remd:contactType`, including at least one `<EmailAddress>`. |
| MD-1b2        | Other Contact Phone            | Checks for `<ContactPerson>` with `contactType="other"` and at least one `<TelephoneNumber>`. |

#### **User Input**

- **Test ID**: The type of test to compare XML attributes (e.g., MD-1a).
- **Metadata URL**: The URL pointing to the SAML metadata XML file.

### **Response Example**

```json
{
  "code": 200,
  "is_valid": true,
  "message": "Successful schema validation",
  "last_run": "2025-04-28 09:12:08"
}
```
### **Response Fields**

| **Field**             | **Type**    | **Description**                                                       |
|-----------------------|-------------|-----------------------------------------------------------------------|
| `is_schema_compliant`  | Boolean     | Whether the XML is valid according to the SAML schema.                |
| `is_test_compliant`    | Boolean     | Whether the XML passed the specific validation test.                  |
| `feedback`             | String      | Detailed feedback if any validation step failed.                      |
| `test_label`           | String      | Human-readable name of the test.                                      |
| `test_name`            | String      | Identifier code for the test.                                         |

### **Failure Scenarios**
- **Invalid XML Structure**: If the provided SAML metadata XML is not well-formed or does not comply with the official SAML 2.0 Metadata Schema, the test will fail with a schema validation error.

- **Missing Required Contact Details**: For tests like `MD-1a`, if the `<ContactPerson>` with `contactType="administrative"` is missing or does not contain at least one `<EmailAddress>`, the test will fail with a message indicating the missing details.

- **Missing Security Contact Information**: For tests like `MD-1b1`, if the `<ContactPerson>` with `contactType="other"` and the required `remd:contactType` or `<EmailAddress>` are missing, the test will fail with feedback indicating the missing fields.

- **Missing Phone Number for Other Contact**: For tests like `MD-1b2`, if the `<ContactPerson>` with `contactType="other"` is missing or does not contain at least one `<TelephoneNumber>`, the test will fail with feedback specifying the missing phone number.

### Example 

#### **User Input**

- **Test ID**: The type of test to compare XML attributes (e.g., MD-1b2).
- **Metadata URL**: The URL pointing to the SAML metadata XML file.

```json
{
  "code": 400,
  "is_valid": false,
  "message": "MD-1b2 validation failed: No operational security TelephoneNumber found.",
  "last_run": "2025-04-28 09:15:03"
}
```

## 3. AARC-G069 Compliance

### Description
This test validates a specific AAI provider’s compliance with AARC-G069. It retrieves metadata from the NACO service and checks:

- That the **entitlements** claim is present in both:
  - `user_info`
  - `introspection_info`

- That at least one entitlement value matches the URN syntax defined in AARC-G069.

### User Input
- **AAI Provider ID**: The AAI Provider ID to query from NACO, for example, `egi`.


### Response Example

```json
{
  "code": 200,
  "entitlements_in_user_info": {
    "is_valid": true,
    "message": "entitlements found in user_info, and at least one entitlement follows the expected URN format (AARC-G069)."
  },
  "entitlements_in_introspection": {
    "is_valid": false,
    "message": "entitlements claim is missing from the introspection_info section."
  },
  "last_run": "2025-04-28 09:27:37"
}
```
### Response Fields

| Field                                      | Type    | Description                                                       |
|--------------------------------------------|---------|-------------------------------------------------------------------|
| `entitlements_in_user_info.is_valid`       | Boolean | `true` if the entitlements claim exists in `user_info`.           |
| `entitlements_in_user_info.message`        | String  | Description of the issue (e.g., missing claim).                   |
| `entitlements_in_introspection.is_valid`   | Boolean | `true` if the entitlements claim exists in `introspection_info`.   |
| `entitlements_in_introspection.message`    | String  | Details about the introspection validation failure.               |

### Failure Scenarios

- **Missing Entitlement Claim**: 
  If the entitlements claim is missing in either `user_info` or `introspection_info`.

- **URN Syntax Error**: 
  If the entitlements claim exists but does not follow the correct URN format as specified in AARC-G069.

---

### Test Summary

This documentation provides an overview of the three automated tests available in CAT Services. Each test serves a unique purpose in validating different standards, including:

1. **HTTPS URL checks**: Ensures that the URL supports HTTPS, is reachable, and returns a valid HTTP status.
2. **SAML metadata validation**: Verifies that the provided SAML metadata XML is well-formed and compliant with the official SAML 2.0 Metadata Schema.
3. **AARC-G069 compliance**: Checks the entitlements claim in the response to ensure it meets the URN format defined in AARC-G069.


### Future Alignment Plan
All existing and upcoming automated tests in CAT Services will follow a unified response structure to promote consistency, clarity, and scalability.
Examples demonstrating the alignment of current tests are provided below.


### 1. Check a URL Supports HTTPS

```json
{
  "test_status": {
    "code": 200,
    "is_valid": true,
    "message": "URL is accessible via HTTPS."
  },
  "last_run": "2025-04-25T12:15:00.000Z",
}
```
### 2. SAML Metadata Validation Response

```json
{
  "test_status": {
  
    "code": 200,
    "is_valid": true,
    "message": "Successful schema validation."
  },
  "last_run": "2025-04-25T12:30:00.000Z",
}
```
### 3. AARC-G069 Compliance Response
```json
{
  "test_status": {

    "code": 200,
    "is_valid": true,
    "message": "entitlements found in user_info, and at least one entitlement follows the expected URN format (AARC-G069) and entitlements claim is missing from the introspection_info section."
  },
  "last_run": "2025-04-25T12:45:00.000Z",
  "additional_info": {
    "entitlements_in_user_info": true,
    "entitlements_in_introspection": false
    }
  }
}
```


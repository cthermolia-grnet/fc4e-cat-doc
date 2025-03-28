---
id: admin_manage_validations
title: Admin / Manage Validations
sidebar_position: 2
---

## Manage Validations

As an admin, you have the ability to manage all validations within the system. This includes approving, rejecting, viewing validation details, and searching for validations based on specific filters.

### Navigate to Validations

To manage validations, an admin should navigate to the **Validations** tab from the **Personal Menu** located on the left sidebar under the **Manage** section.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_menu.png)
</p>

On this page, the admin will see a list of all validations in the system.

### Search for Validations

To search for validations, the admin can use the **search bar** and filter options provided on the page. The search allows you to find validations by the following criteria:

1. **Type:**
   - Search for validations by type, such as **PID Service Provider**, **PID Owner**, or other validation types.
   - Select the validation type from the dropdown menu to filter the results.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_search_type.png)
</p>

2. **Status:**
   - Search for validations based on their status, such as **Pending**, **Approved**, or **Rejected**.
   - Select the desired status from the dropdown menu.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_search_status.png)
</p>

3. **Keywords:**
   - You can also search by keywords (e.g., validation ID, organization name, etc.).
   - Enter keywords into the search bar to filter validations by name, ID, or other relevant information.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_search.png)
</p>

The search results will update dynamically based on the selected filters.

### View a Validation

An admin can view a validation by clicking on the **View Validation Details** button.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_view_button.png)
</p>

A modal will open displaying detailed information about the validation, including:

- **Status**: The current status of the validation.
- **Created on**: The timestamp when the validation was created.
- **Organisation**: The organization associated with the validation.
   - **ID**: A unique identifier for the organization.
   - **Name**: The name of the organization.
- **Roles**: The roles associated with the user and organization.
   - **User Role in Organisation**: The role the user has within the organization.
   - **User Requests as Actor**: The role requested by the user as an Actor.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_view.png)
</p>

### Approve or Reject a Validation

An admin can approve or reject a validation when the status of the validation is **Pending Review**.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_pending.png)
</p>

1. **Approve Validation**:
    - The admin can click the **Accept Validation** button.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_accept_button.png)
</p>

A modal will open for approval:

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_approve.png)
</p>

2. **Reject Validation**:
    - The admin can click the **Reject Validation** button.

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_reject_button.png)
</p>

A modal will open for rejection. In this modal, the admin is required to provide a **Reason** for rejecting the validation:
- **Reason (*):** This field is required. Admins must enter a brief reason for rejecting the validation (e.g., invalid request, user request, etc.).

<p align="center">
  ![](/img/manage/admin_validations/admin_validations_reject.png)
</p>

:::warning
Once a validation is **approved**, it cannot be rejected.
:::

After clicking the button, the validation status will be updated accordingly to **Approved** or **Rejected**.

---
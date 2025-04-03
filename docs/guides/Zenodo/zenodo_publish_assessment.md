---
id: zenodo_publish_assessment
title: Publishing Assessment on Zenodo
sidebar_position: 1
---

# Publishing an Assessment on Zenodo

Publishing an assessment on Zenodo involves several stages, from creating a draft deposit to updating the CAT Service database with the publication details. The process includes interactions with Zenodo's external service, where the assessment is uploaded and published. Upon successful publication, the user is notified by email, and the assessment's details are stored in the CAT Service database.

## Process Overview

The process of publishing an assessment on Zenodo is initiated by the user and is handled as a **background process** due to its interaction with the external Zenodo service. The user is notified when the request has been accepted, and they will receive an **email notification** with the final status of the process. The publication process consists of several stages:

### Process Stages

1. **Create Deposit**: A draft deposit is created on Zenodo.
2. **Upload PDF**: A PDF file containing the assessment is uploaded to the Zenodo deposit (in draft status).
3. **Store Information**: Information about the deposit and associated assessment is saved in the CAT Service database.
4. **Publish Deposit**: The deposit is finalized and published on Zenodo.
5. **Update Database**: The CAT Service database is updated with the published deposit details.
6. **Send Email Notification**: The user is sent an email notification confirming the successful publication or notifying them of any issues.

### Stored Information in the CAT Service Database

Once the publication process is completed, the following details are stored in the CAT Service database:

- **Assessment ID**: Unique identifier for the assessment.
- **Zenodo Deposit ID**: Unique identifier for the deposit in Zenodo.
- **Created At**: Timestamp of when the deposit was created.
- **Current Process State**: The current stage of the process (e.g., `FILE UPLOADED`, `PROCESS COMPLETED`).
- **Publication Status**: The current publication status of the deposit (e.g., `PUBLISHED`, `DRAFT`).
- **Publication Date**: Date when the deposit was successfully published on Zenodo.

## Failure Handling

At any stage of the process, failures may occur due to network issues, data inconsistencies, or Zenodo API errors. In such cases the user is notified via email about the failure.
This ensures transparency and allows users to take corrective actions if needed.

The system will handle failures as follows:

- **Failure at Steps 1-3**: If the deposit fails at any stage before final publication, the entire process fails. The deposit is **deleted** on Zenodo, and an email notification is sent to the user with the error details.
  
- **Failure at Step 4**: If the deposit fails during final publication, and after deposit information is stored at Cat Service database(step 3), the deposit will remain in **draft status** on Zenodo. The user will receive an email notification detailing the issue.
  
- **Failure at Step 5**: If the deposit is successfully published on Zenodo but fails to update the CAT Service database, the deposit will remain **published** on Zenodo, but the CAT Service database will be **out of sync**. An email notification will inform the user of this discrepancy.

### Email Notifications

Email notifications are sent to the user based on the outcome of the process:

- **Failure at Steps 1-3**: The email will provide failure details and inform the user of the process failure.
- **Failure at Step 4**: The email will explain that the deposit is on Zenodo but remains unpublished.
- **Failure at Step 5**: The email will notify the user that the deposit is published on Zenodo but not reflected in the CAT Service database.

This structured approach ensures users are well-informed about the status of their deposits and any issues encountered during the publishing process.



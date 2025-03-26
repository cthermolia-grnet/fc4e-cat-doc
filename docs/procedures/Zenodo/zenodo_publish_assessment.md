---
id: zenodo_publish_assessment
title: Publishing Assessment to Zenodo
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Publishing an Assessment to Zenodo

The process of publishing an assessment to Zenodo involves several stages, from creating a draft deposit to updating the CAT Service database with publication details. This section outlines the requirements, process stages, stored information, failure handling, and notifications associated with publishing an assessment to Zenodo.


## Requirements

Before an assessment can be published to Zenodo, the following requirements must be met:
- The assessment **must be published** within the CAT Service before initiating the publication to Zenodo.
- A **PDF file** containing the assessment must be generated and uploaded to Zenodo as part of the deposit process.

## Access Control

Only the **owner** of the assessment or users with explicit permissions to the assessment can initiate the publication to Zenodo.

## Process Overview

The process of publishing an assessment to Zenodo is initiated by the user and handled as a **background process** due to its interaction with the external Zenodo service. The user is notified when the request has been accepted, and they will receive an **email notification** with the final status of the process.

### Process Stages

The publishing process to Zenodo consists of the following stages:

1. **Create Deposit**: A draft deposit is created on Zenodo.
2. **Upload PDF**: A PDF file containing the assessment is uploaded to the Zenodo deposit (draft status).
3. **Store Information**: Information about the deposit and associated assessment is saved in the CAT Service database.
4. **Publish Deposit**: The deposit is finalized and published to Zenodo.
5. **Update Database**: The CAT Service database is updated with the published deposit details.
6. **Send Email Notification**: The user is sent an email notification confirming the successful publication or notifying them of any issues.

### Stored Information in the CAT Service Database

The following details are stored in the CAT Service database once the publication process is completed:

- **Assessment ID**: Unique identifier for the assessment.
- **Zenodo Deposit ID**: Unique identifier for the deposit in Zenodo.
- **Created At**: Timestamp of when the deposit was created.
- **Current Process State**: The current stage of the process (e.g., `FILE UPLOADED`, `PROCESS COMPLETED`).
- **Publication Status**: The current publication status of the deposit (e.g., `PUBLISHED`, `DRAFT`).
- **Publication Date**: Date when the deposit was successfully published on Zenodo.

## Failure Handling

The publishing process may fail at any stage, and the system will handle these failures as follows:

- **Failure at Steps 1-3**: If the deposit fails at any stage before final publication, the whole process fails. The deposit to Zenodo is **deleted**. An email notification will be sent to the user detailing the error.
  
- **Failure at Step 4**: If the deposit fails at any stage before final publication, the deposit remains in **draft status** on Zenodo. An email notification will be sent to the user detailing the error.
- **Failure at Step 5**: If the deposit is successfully published on Zenodo but fails to update the CAT Service database, the deposit will remain **published** on Zenodo, but the CAT Service database will be **out of sync** with the actual status. An email notification will be sent to inform the user of this discrepancy.

### Email Notifications

Email notifications are sent to the user based on the outcome of the process:

- **Failure at Steps 1-3**: The email will include details about the failure and inform the user about the process failure.

- **Failure at Step 4**: The email will include details about the state of the process and inform the user that the deposit is on Zenodo but is not published.
- **Failure at Step 5**: The email will inform the user that the deposit is published on Zenodo but not correctly reflected in the CAT Service database.

This structured approach ensures users are well-informed about the status of their deposits and any issues encountered during the publishing process.


:::info Publish Assessment to Zenodo


<Tabs>
  <TabItem value="api" label="API">
   ###  CURL

An example curl to publish an assessment to Zenodo
```bash
    curl -X 'POST' \
      'http://localhost:8080/v2/zenodo/publish/assessment/{id}' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer MY_ACCESS_TOKEN' \
      -H 'Content-Type: application/octet-stream' \
      --data-binary '@file.pdf'
    ```


  </TabItem>

  <TabItem value="swagger" label="Swagger"> 
  
  <p>
<b>1.</b> Access swagger  <a href="https://api.cat.argo.grnet.gr/swagger-ui/"><b>here</b></a>
</p>

<p>
<b>2.</b> Click on the Authorization Button and add the access token ,
</p>

<p>
<b>4.</b> You can now access the HTTP request

```bash
POST  /v2/zenodo/publish/assessment/{id}
 ```

</p>

  
  </TabItem>

  <TabItem value="ui" label="User Interface">
  <p>
You can access FC4E CAT User Interface <a href="https://cat.argo.grnet.gr"><b>here</b></a>
</p>
</TabItem>
</Tabs>


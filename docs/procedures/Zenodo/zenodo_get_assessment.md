---
id: zenodo_get_assessment
title: Retrieve Assessment Information from Zenodo 
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieving Assessment Information from Zenodo

CAT Service maintains records of assessments published to Zenodo. This documentation outlines the stored information and access control policies for retrieving assessment details.

## Stored Information
The following details are recorded in the CAT Service database:

- **Assessment ID**: Unique identifier for the assessment.
- **Zenodo Deposit ID**: Corresponding deposit identifier in Zenodo.
- **Created At**: Timestamp indicating when the assessment was stored.
- **Current Process State**: The latest status of the publication process (e.g., `FILE UPLOADED`, `PROCESS COMPLETED`).
- **Publication Status**: Indicates whether the assessment is published or in draft state.
- **Publication Date**: The date when the assessment was successfully published.

## Retrieving Assessment Information
Users can retrieve stored assessment details using the assessment ID. The availability of information depends on the publication status.

## Access Control Policies
- **Published Assessments**: If the assessment has been successfully published to Zenodo, its information is publicly accessible without authentication, regardless of whether the user is registered with CAT Service.
- **Draft Assessments**: If the assessment is still in a draft state on Zenodo, access is restricted. Only validated users registered with CAT Service can retrieve the information after completing the authentication process.



:::info Get Deposit to Zenodo


<Tabs>
  <TabItem value="api" label="API">
   ###  CURL

An example curl to get an assessment to Zenodo
```bash
  curl -X 'GET' \
  'http://localhost:8080/v2/zenodo/assessment/{id}' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer MY_ACCESS_TOKEN'
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

GET  /v2/zenodo/assessment/{id}
```

</p>

  
  </TabItem>

  <TabItem value="ui" label="User Interface">
  <p>
You can access FC4E CAT User Interface <a href="https://cat.argo.grnet.gr"><b>here</b></a>
</p>
</TabItem>
</Tabs>


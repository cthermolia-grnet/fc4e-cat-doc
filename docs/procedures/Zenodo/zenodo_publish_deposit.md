---
id: zenodo_publish_deposit_guidelines
title: Publishing Deposit to Zenodo
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Publishing a Deposit to Zenodo

This document outlines the process of publishing an assessment deposit to Zenodo and handling potential failures.

## Potential Issues During Publishing
When publishing an assessment to Zenodo, two issues may arise:

1. The deposit fails to publish and remains in a draft state.
2. The deposit is published, but the database does not correctly reflect its status.

In such cases, CAT Service provides users with the ability to finalize the publication process.

## Access Control Policies
Only the **owner** of the assessment or users with whom the assessment has been shared have permission to publish the deposit to Zenodo.

## Resolving Draft State Deposits
If a deposit remains in a draft state to Zenodo, the following actions occur:

- The deposit is published to Zenodo.
- The database is updated to reflect the publication status.
- A notification email is sent to the user with details of the process.

## Resolving Published State Discrepancies
If a deposit is already published but the database does not reflect the correct status:

- The database is updated to align with the publication status.
- A notification email is sent to the user to confirm the update.

By following these steps, users can ensure that their assessment deposits are correctly published and recorded in CAT Service.


:::info Publish Deposit to Zenodo


<Tabs>
  <TabItem value="api" label="API">
   ###  CURL

An example curl to publish a deposit to Zenodo
```bash
    curl -X 'POST' \
  'http://localhost:8080/v2/zenodo/publish/deposit/{id}' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer MY_ACCESS_TOKEN' \
  -d ''
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

POST  /v2/zenodo/publish/assessment/id
```

</p>

  
  </TabItem>

  <TabItem value="ui" label="User Interface">
  <p>
You can access FC4E CAT User Interface <a href="https://cat.argo.grnet.gr"><b>here</b></a>
</p>
</TabItem>
</Tabs>


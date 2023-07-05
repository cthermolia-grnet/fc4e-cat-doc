---
id: development_guide
title: Guide to FC4E CAT
sidebar_position: 1
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Access Token Retrieval


The API's endpoints must only be obtainable to verified clients, so every client who wants access to the API resources should be authenticated.
To achieve this , the client must retrieve an Access Token , following the guidelines above.


#### Instructions

<p> This  <a href="https://api.cat.argo.grnet.gr/"><b>web page</b></a> allows users to obtain an access token for authentication purposes. By following these instructions, users can retrieve an access token to authenticate API requests.
</p>


<p><b>1. Open the Web Page</b>

   Open your preferred web browser and navigate to the URL of the <a href="https://api.cat.argo.grnet.gr/"><b>web page</b></a>  where the access token can be obtained.</p>

<p><b>2. Locate the Access Token Button</b>

   Once the web page loads, locate the button that triggers the access token retrieval process. The button should be visible on the web page.</p>
<p><b>3. Click the Obtain an Access Token button</b>

   Click the access token button to initiate the process of retrieving an access token. This will trigger the necessary steps to obtain the token from the authentication server.</p>

<p><b>4. Provide Required Information</b>
   
   Choose your preferred identity provider from the available options. After selecting the identity provider, enter your credentials.</p>

<p><b>5. Retrieve the Access Token</b>

   After providing the necessary information, the web page will communicate with the authentication server to retrieve the access token. This process may take a few moments. Once the retrieval is successful, the access token will be displayed on the web page.</p>



<p>Once the token is retrieved the client can access to the FC4E CAT endpoint, either directly by applying HTTP requests to the <b>FC4E CAT API</b> or through the <b>FC4E CAT User Interfaces</b> or through the <b>FC4E CAT Swagger</b> </p>

:::info FC4E CAT Components

<Tabs>

<TabItem value="api" label="API">

###  Access the protected resources

The communication with protected API endpoints is performed using the Bearer Authentication. Bearer Authentication is a type of token-based authentication commonly used in HTTP-based APIs.

Once the client receives the access token, they should construct their HTTP request to access the protected API endpoint. They should include the access token in the HTTP request by adding an "Authorization" header to the HTTP request.
The header's value starts with the word "Bearer" followed by a space and the actual access token.

`Authorization: Bearer {{token}}`

</TabItem>


 
<TabItem value="ui" label="User Interfaces"> 
<p>You can access FC4E CAT User Interfaces <a href="https://cat.argo.grnet.gr"><b>here</b></a></p>

</TabItem>

<TabItem value="swagger" label="Swagger"> 

<p><b>You also can access the API's endpoints from the FC4E CAT Swagger, through the following steps: </b></p>


<p> <b>1.</b> First you need to obtain an Access Token, by following the guidelines present above.  </p>

   
<p><b>2.</b> Access swagger  <a href="https://api.cat.argo.grnet.gr/swagger-ui/"><b>here</b></a></p>



<p><b>3.</b> Click on the Authorization Button and add the access token </p>

<p><b>4.</b> You can now access the HTTP requests </p>

</TabItem>

</Tabs>
<p>
If you are a developer or want to learn more about FC4E CAT you can check the <b> More</b> section
</p>



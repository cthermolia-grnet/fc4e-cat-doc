---
id: api_specs
title:  Specification-API Design
sidebar_position: 1
---

# Specification: API Design
Best Practices, Minimum HTTP Responses for REST APIs

## Glossary

|Term|Description|Reference|
| ------------- | ------------- | ------------- |
|Resource| Resources are fundamental to the concept of REST. A resource is an object that’s important enough to be referenced in itself. A resource has data, relationships to other resources, and methods that operate against it to allow for accessing and manipulating the associated information.|https://swagger.io/resources/articles/best-practices-in-api-design/ |
|Collection| A group of resources is called a collection|https://swagger.io/resources/articles/best-practices-in-api-design/ |

## API Best Practices
In general, an effective API design will have the following characteristics [5]:

 - **Easy to read and work with:** A well designed API will be easy to work with, and its resources and associated operations can quickly be memorised by developers who work with it constantly.
 - **Hard to misuse:** Implementing and integrating with an API with good design will be a straightforward process, and writing incorrect code will be a less likely outcome.
 - **Complete and concise:** Finally, a complete API will make it possible for developers to make full- fledged applications against the data you expose. Completeness happens over time usually, and most API designers and developers incrementally build on top of existing APIs. 

|Element|Description|
| ------------- | ------------- | 
|JSON| REST APIs SHOULD accept JSON for request payload and also send responses as JSON.  To ensure that clients interpret it as such, one SHOULD set Content-Type in the response header to application/json.|
|Nouns as Endpoints|Use nouns instead of verbs in endpoint paths. The HTTP request already indicates the action (GET, POST, PUT, DELETE).|
|HTTP Methods|Standard actions for HTTP methods: - GET	Used to retrieve a representation of a resource. - POST	Used to create new new resources and sub-resources - PUT	Used to update existing resources - PATCH	Used to update existing resources/ may result in new resource - DELETE	Used to delete existing resources|
|Collections and Resources|Collections indicate lists or inventories of resources (individual instances in the collection). |
|Examples|Provide request and response examples for all GET requests.|
|Error Handling| Handle errors gracefully and return standard error codes.|
|Filtering and Paging|Allow filtering, sorting, and pagination - responses could be very large without these. Use query parameters to aid with this.|
|Security| Maintain good security practices - APIs should be secure. Enforce the principle of least privilege and define user roles.|
|Caching|Cache client-side data to improve performance.|
|Versioning| Create different versions of API if changes may break clients. Versioning can be done according to semantic version (for example, 2.0.6 to indicate major version 2 and the sixth patch).|




## HTTP Response Status Codes
These are the minimum set of responses required for REST APIs.


|Response|Description|Reference|
| ------------- | ------------- | ------------- |
|200 OK| Most common code used to indicate success. The actual response will depend on the request method used.|[1]|
|201 Created|The request has been fulfilled and resulted in a new resource being created. |[1]|
|202 Accepted|The request has been accepted for processing, but the processing has not been completed. |[1]|
|204 No Content|The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation. |[1]|
|304 Not Modified|If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code.|[1]|
|400 Bad Request|The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.| [1], [3]|
|401 Unauthorised| Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided. Error code response for missing or invalid authentication token.| [1], [3]|
|403 Forbidden|The server understood the request, but is refusing to fulfil it. Authorization will not help and the request SHOULD NOT be repeated.| [1], [3]|
|404 Not Found|The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.|[1], [3]|
|409 Conflict|Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.|[1]|
|500 Internal Server Error|The server encountered an unexpected condition which prevented it from fulfilling the request.|[1], [3]|
|502 Bad Gateway|This indicates an invalid response from an upstream server.|[3]|
|503 Service Unavailable| This indicates that something unexpected happened server side (It can be anything like server overload, some parts of the system failed, etc.).|[3]

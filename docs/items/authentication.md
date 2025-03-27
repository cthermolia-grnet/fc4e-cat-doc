---
id: authentication
title: Authentication and Authorisation in CAT 
sidebar_position: 5
---

## Authentication and Authorisation in CAT 
<p>Authentication for the FAIRCORE4EOSC CAT Service is managed via the EOSC AAI Core Infrastructure Proxy, which offers a centralised single sign-on (SSO) mechanism for accessing services and resources. The AAI Service is tested via and connected with the EOSC Beyond AAI Sandbox. When a user attempts to access the service, they are redirected to the proxy for authentication using their credentials (e.g., username and password). Once authenticated, the proxy generates a security token that verifies the user's identity and authorization status during service interactions. This system enhances security and simplifies user authentication.</p>
<p>Authorization, however, is handled internally by the CAT Service. Users must provide valid authentication credentials, which the system verifies before granting access to authorized resources. The CAT Service implements <b>Role-Based Access Control (RBAC)</b> to enforce fine-grained access permissions. RBAC assigns specific roles to users based on their responsibilities and associates these roles with predefined permissions. These permissions ensure that each user has access only to the features they require. This approach not only enhances the security and privacy of the system but also provides flexibility for future role expansion as the service evolves.</p>
<p>The defined roles are <b>casual users,  identified users, validated users,</b> and <b>admin</b> (administrative users).</p>

<p><b>Casual users</b> can, without authentication,</p>

- View, search / filter public assessments created by others
- View the library of Motivations with (tests, metrics, principles, criteria)
- Visit the knowledge base and learn more about the PID ecosystem

<p><b>Identified Users</b> have a persisted identity in the system: The identity of the user is persisted, and upon successful login, this role allows users to:</p>

- View and update their profile
- Submit a validation request (associate their account with a specific Actor in the system)
- Search / filter results of validations
- View, search / filter public assessments created by others
- View the library of Motivations with (tests, metrics, principles, criteria)
- Comment on assessments
- Optionally store preferences and settings as appropriate

<p><b>Validated Role:</b> This is granted after an administrator account approves a validation request, this role permits users to:</p>

- View and update their profile
- Submit a new validation request for a different or additional Actor or service operated by that actor
- Create and manage their assessments

<p><b>Administrator Role:</b> The administrator role provides the highest level of access within the CAT Service. Admin users have the authority to:</p>

- Manage all user accounts, including approving or rejecting validation requests
- Manage all submitted validation requests, ensuring their accuracy
- Manage all assessments created by users
- Prevent users from accessing the service if necessary
- Structure new Motivations within the system
- Manage the library of (tests, metrics, principles, criteria)





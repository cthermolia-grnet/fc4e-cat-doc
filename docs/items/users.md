---
id: users
title: Users in CAT 
sidebar_position: 1
---

## Users in CAT 
The Compliance assessment toolkit (CAT) supports different types of users, of actors and of roles. Based of the type of user different actions can be performnet in the service.It supports both authorization and authentication mechanisms
 - Authentication is the process of determining the identity of a client, which is typically a user account.
 - Authorization is the process of determining what permissions an authenticated identity has on a set of specified resources. 

CAT is integrated with a Federated AAI so the users can login via their academic or social id. 

## Type of Users

CAT supports these different types of users:

 - **Casual User/ General Public**: Users that engage with the system to search for and find existing evaluation records, statistics, and guidance in respect of compliance.
 - **Identified User**: Users may want to specify preferences and save context, and to do so, users need to be identified unambiguously. No other information is needed except some globally unique identifier.
 - **Validated User**: Users that contributed external evaluations and assessments, and may want to contribute a self-assessment. These users will often want to obtain additional guidance and best practices for the elements where their level of performance is lower than the benchmarks. These users can have any of the detailed roles described below.
 - **Admin User**: Administrative users that manage vocabularies, users, and databases associated with the CAT.

A user in order to perform an assesment of behalf of an organization must "request a validation "  which helps him become an actor . This action is described below. 

The different type of actors that are supported are the following:

|Name|Description|
| --- | ----------- |
|PID Scheme (Component) | A set of rules and standards defining the nature of a PID. This would include a set of lexical formatting rules for PIDs within a namespace. It could also define for example: associated PID Type; definition of associated metadata; quality assurance conditions; usage rights, terms and conditions, and algorithmic methods for generating PID names and enforcing PID properties.| 
|PID Authority (Role)| A controller responsible for maintaining the rules for defining the integrity of PIDs within a PID Scheme. These rules may include setting standards for lexical formats, algorithms and protocols to ensure global uniqueness, together with setting quality of service conditions to enforce compliance to the rules. PID Authorities may be organisations (e.g. DOI.org), which enforce control over a PID infrastructure. A Persistent Identifier (PID) policy for the European Open Science Cloud (EOSC) 8 may also be Authorities which do not have a central control (for example Software Heritage persistent identifiers1 and W3C’s Decentralised Identifiers2), but provide a community standardisation mechanism that specifies the conformance of PIDs to a PID Scheme.|
|PID Service Provider (Role)|An organisation which provides PID services in conformance to a PID Scheme, subject to its PID Authority. PID Service Providers have responsibility for the provision, integrity, reliability and scalability of PID Services, in particular the issuing and resolution of PIDs, but also lookup and search services, and interoperability with a generic resolution system.|
|Multi-Primary Administrator (MPA)(Role)|“Each credentialed MPA operates its own GHR Services in accordance with the DONA Foundation Policies & Procedures for the GHR, and coordinates its GHR Services with other MPAs and DONA in the distributed operation of the GHR on a multi-primary basis.”|
|PID Service (Component)|Basic services are those that create, manage and resolve PIDs and their associated kernel information which conforms to a PID Scheme. Advanced, value-added services may also be provided, for example attribute search or metrics.|
|PID Manager (Role)|PID Managers have responsibilities to maintain the integrity of the relationship between entities and their PIDs, in conformance to a PID Scheme defined by a PID Authority. A PID Manager will typically subscribe to PID services to offer functionality to PID Owners within the PID Manager’s services. One example is a Service Provider which uses PID Services as part of its own service delivery. For example, PID Managers may include a provider of a data repository, a data catalogue, or a research workflow system.|
|PID Owner (Role)|An actor (an organisation or individual) who has the authority to create a PID, assign PID to an entity, provide and maintain accurate Kernel Information for the PID. A new PID Owner must be identified and these responsibilities transferred, if the current PID Owner is no longer able to carry them out.|
|End User (Role)|The end user of PID Services, for example researchers, or software, or services produced to support researchers.|
|Compliance Monitoring (Role)|On completion, the work will support an additional role and associated component for the EOSC PID Policy, as follows: Compliance Monitoring (Role) - One or more organisations that provide services to monitor and/ or enforce compliance (with PID Policy), resulting in interoperable and aggregatable compliance metrics for the roles and components foreseen in the policy.|

  

## Actions 

The different types of users may perform a set of acctions 

### Login

All users may login to the service via Federated AAI . By the time a user logs in for the first time it becomes an **Identified User**.
Until he updates his profile information and make a validation request to become an actor on behalf of his organization he remains an Identified User.

### Update profile 

This is where the user adds his profile information. THe data a user must add are the following:

- Name
- Surname
- Orcid id
- email 

### Request a validation 

The validation request is the process of an **Identified User**  to become a **Validated User**.
The **Identified User** asks for a permission to become an actor on behalf of an Organization. 

By the time the user performs the validation request it becomes on hold , until an admin user checks and accepts it. 


### Delete user (admin action) 

In the CAT service we actually dont delete a user. The service actually describes the user as deleted and we dont allow him to login in to the service.
This action helps us keep all the public assessments the user may have performed on behalf of his organization , and of course give us the option to enable the user again. 

It is performed by an admin user and it requires a reason for a user to be marked as deleted.

### Enable User (admin action) 

This is actually the action that is performed to enable a user again in the CAT service. This action is performed by the admin user after a request from the user. 

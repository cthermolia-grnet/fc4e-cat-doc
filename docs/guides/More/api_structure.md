---
id: api_structure
title: API Structure 
sidebar_position: 2
---


## CAT: Compliance Assessment Toolkit - API Structure

This project is a REST API built using Maven. It follows the service-repository pattern and is divided into several Maven modules.

### Modules

The project consists of the following modules:

1) entity

The `entity` module contains the database ORM (Object-Relational Mapping) entities. These entities represent the data model of the application 
and are used for interacting with the database.

2) repository

The `repository` module contains the repositories responsible for communicating with the database. These repositories provide an abstraction layer for accessing and manipulating data in the database. 
They utilize the ORM entities from the `entity` module.

3) service

The `service` module contains the business logic of the application. It provides various services and operations that manipulate the data and implement the core functionality of the API. 
The services in this module utilize the repositories from the `repository` module to interact with the database.

4) api

The `api` module contains the REST endpoints of the API. These endpoints serve as the interface for clients to interact with the application. 
The `api` module depends on the services from the `service` module to handle the requests and process the data.

5) data-transfer-object

The `data-transfer-object` module contains the DTOs (Data Transfer Objects). These DTOs are used to transfer data between the API layer and the clients. 
They provide a convenient way to encapsulate and transport data without exposing the internal structure of the entities.

6) handler

The `handler` module is responsible for handling different events, such as exceptions. 
It provides error handling and other event-related functionalities to ensure robustness and proper execution of the API.

7) exception

The `exception` module contains the project-specific exceptions. These exceptions are used to handle exceptional situations and provide meaningful error messages or behavior. 
The module defines custom exception classes that extend the standard exception classes or implement specific interfaces.

8) mapper

The `mapper` module is responsible for mapping entities with DTOs using MapStruct.

9) enum

The `enum` module contains the available API enumerations.

10) validator

The `validator` module contains the API Validators. They allow us to express and validate the API constraints.



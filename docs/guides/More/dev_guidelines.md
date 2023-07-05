---
id: dev_guidelines
title: Developers' Guidelines
sidebar_position: 3
---

### Prerequisites

Before you can use this project, make sure you have the following software installed on your development machine:

- Java Development Kit (JDK) 11 or later
- Apache Maven  3.8.4 or later
- Docker

### Install the necessary dependencies

When you clone the project, please switch to the root directory of the project and execute the following command to install the necessary dependencies in your local maven repository:

`mvn clean install -DskipTests=true -U`

### Start the application with Quarkus Dev Services

Please switch to the root directory of the project and execute the following command:

`mvn clean quarkus:dev`

This command will start the application in development mode and automatically launch the necessary services, such as the database and Keycloak server, using Quarkus Dev Services.

### Access the Dev Service Database

To access the database, please execute the following command:

`mysql -h localhost -P 3306 -u cat -p cat --protocol=tcp`

The development database name is `cat`.

### Obtain an access token from Dev Service Keycloak

To obtain an access token, please follow the instructions provided by [Quarkus](https://quarkus.io/guides/security-openid-connect-dev-services#dev-services-for-keycloak).

Use the following credentials to log into Dev Service Keycloak:

- username : `alice`
- password : `alice`





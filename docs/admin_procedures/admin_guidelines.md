---
id: admin_guidelines
title: Publishing Motivations in CAT 
sidebar_position: 1
---

## Publish Motivations in CAT 

A motivation is initially considered to be  in an **UNPUBLISHED** status,during creation. This means that the administrator can add, update, or delete context in the motivation.
The status can change if the administrator decides to **PUBLISHED** the motivation. By publishing the motivation, the administrator 
declares that no further changes will be applied to the motivation's context. 

FC4E CAT Service provides the **PUBLISH** feature at two levels:
1. **Motivation** level - The administrator can choose to publish a motivation.
2. **Motivation-actor relation** level. The administrator can choose to publish the relation between a motivation and an actor related to the motivation.

- When publishing a motivation, all associated motivation-actor relations are also published, automatically.

At both levels, if status is **PUBLISHED add/update/delete** actions on the motivation's context are not permitted. Also, the following elements: metrics, criteria, principles, tests, test methods, and test definitions, also are not permitted to be updated or deleted, if they are part of a published motivation or motivation-actor relation.

Additionaly, when a motivation is is an **UNPUBLISHED** status, only administrator can view of the motivation's template. Unpublished motivation's template view is not permitted to the users.

### Actions Not Permitted in PUBLISHED Motivation or Motivation-Actor Relation

| Action | API Request |
|--------|-------------|
| Update an existing Motivation | `PATCH v1/registry/motivations/{id}` |
| Assign Actors to Motivation | `POST v1/registry/motivations/{id}/actors` |
| Remove an Actor from a Motivation | `DELETE v1/registry/motivations/{id}/actors/{actor-id}` |
| Update Criterion Item to Motivation Actor | `PUT v1/registry/motivations/{id}/actors/{actor-id}/criteria` |
| Add Criterion Item to Motivation Actor | `POST v1/registry/motivations/{id}/actors/{actor-id}/criteria` |
| Assign Principles to Motivation | `POST v1/registry/motivations/{id}/principles` |
| Update an existing relationship between motivations, principles, and criteria | `PUT v1/registry/motivations/{id}/principles-criteria` |
| Create a new relationship between motivations, principles, and criteria | `PUT v1/registry/motivations/{id}/principles-criteria` |
| Publish a motivation | `PUT v1/registry/motivations/{id}/publish` |
| Publish a motivation actor relationship | `PUT v1/registry/motivations/{id}/actors/{actor-id}/publish` |
| Update Metric | `PUT v1/registry/metrics/{id}` |
| Delete Metric | `DELETE v1/registry/metrics/{id}` |
| Update Principles | `PUT v1/registry/principles/{id}` |
| Delete Principles | `DELETE v1/registry/principles/{id}` |
| Update Criterion | `PUT v1/registry/criteria/{id}` |
| Delete Criterion | `DELETE v1/registry/criteria/{id}` |
| Update Test Definition | `PUT v1/registry/tests/test-definition/{id}` |
| Delete Test Definition | `DELETE v1/registry/tests/test-definition/{id}` |
| Update Test Method | `PUT v1/registry/tests/test-method/{id}` |
| Delete Test Method | `DELETE v1/registry/tests/test-method/{id}` |
| Update Test | `PUT v1/registry/tests/{id}` |
| Delete Test | `DELETE v1/registry/tests/{id}` |
| Retrieve registry template for a specific motivation and actor | `GET /v1/templates/by-motivation/{motivation-id}/by-actor/{actor-id}` |


### Actions Not Permitted in UNPUBLISHED Motivation or Motivation-Actor Relation

| Action | API Request |
|--------|-------------|
| Unpublish a motivation | `PUT v1/registry/motivations/{id}/unpublish` 
| Unpublish a motivation actor relationship| `PUT v1/registry/motivations/{id}/actors/{actor-id}/unpublish` 
| Retrieve registry template for a specific motivation and actor  | `GET v1/templates/by-motivation/{motivation-id}/by-actor/{actor-id}` |

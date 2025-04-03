---
id: library_tests
title: Library/Tests
sidebar_position: 7
---

## Tests & Library

An assessment is comprised of a number of different entities. One of the main entities is the Test. Tests are the components used to evaluate whether specific criteria are met. Each test is designed to assess a particular aspect of the criteria defined within a Motivation.

:::info
We have to mention here that the actions described below are for an admin user.
:::

## Manage Tests

To manage Tests, a user should navigate to the **Library / Tests** tab from the Personal Menu located on the left sidebar in the section **Library**. In this page, the user can find the list of Tests supported by the service.

<p align="center">
  ![](/img/library/tests/tests_manage.png)
</p>

### Creating a New Test

To create a new test, the user should click the **Create New** button which will redirect them to the Test modal screen.

import tests_create from '/img/library/tests/tests_create.png';

<p align="center">

<img src={tests_create} alt="Creating a New Test" style={{width: 500}} />
</p>

On the creation page, users must provide key details about the test.

The required information includes:

1. **TES (required):** A unique identifier assigned to the test, ensuring it can be distinctly referenced within the service.
2. **Label (required):** A label describing the Test. It should be unique and easily recognizable to avoid confusion with other tests.
3. **Description (required):** A small description of the Test.
4. **Test Method (required):** Select the appropriate test method for the test.

Additionally, there are **optional parameters** and **evidence** that can be added:

- **Parameters:** Click **Add new** to create parameters that define specific inputs or conditions for the test.
- **Evidence:** Click **Add Evidence** to attach supporting evidence related to the test.

Once the necessary fields are filled in, the user can click the **Create** button to create the test and will be redirected to the page with the list of tests. If the user wishes to cancel the process, they should click the **Cancel** button.

### Edit a Test

A user can edit one of the tests by clicking on the **Edit test** button. 

import tests_edit_button from '/img/library/tests/tests_edit_button.png';

<p align="center">
  ![Edit a Test Button](/img/library/tests/tests_edit_button.png)
</p>

Then a modal like the one in the following image will appear.

import tests_edit from '/img/library/tests/tests_edit.png';

<p align="center">

<img src={tests_edit} alt=" Edit a Test" style={{width: 500}} />
</p>

The user can update the following fields:

1. **TES (required):** A unique identifier assigned to the test.
2. **Label (required):** A label describing the test.
3. **Description (required):** A small description of the test.
4. **Test Method (required):** Select the appropriate test method.

Additionally, the user can update **Parameters** or **Evidence** as needed by clicking on the respective buttons to add, edit, or remove them.

Once the necessary fields are updated, the user can click the **Update** button to save the changes and will be redirected to the page with the list of tests. If the user wishes to cancel the process, they should click the **Cancel** button.

### Delete a Test

A user can delete one of the tests by clicking on the **Delete test** button.

<p align="center">
  ![](/img/library/tests/tests_delete_button.png)
</p>

Then a modal like the one in the following image will appear.

import tests_delete from '/img/library/tests/tests_delete.png';

<p align="center">

<img src={tests_delete} alt=" Delete a Test" style={{width: 500}} />
</p>

:::warning
If a Test is already in use, deletion is not allowed.
:::

The user can click the **Delete** button to delete the test and then will be redirected to the page with the list of tests. If the user wishes to cancel the process, they should click the **Cancel** button.

### View a Test

A user can view one of the tests by clicking on the **View test details** button.

<p align="center">
  ![](/img/library/tests/tests_view_button.png)
</p>

Then a modal like the one in the following image will appear.

import tests_view from '/img/library/tests/tests_view.png';

<p align="center">

<img src={tests_view} alt=" View a Test" style={{width: 500}} />
</p>

In the **View Test** modal, the user can review the test details, including parameters and evidence.

---

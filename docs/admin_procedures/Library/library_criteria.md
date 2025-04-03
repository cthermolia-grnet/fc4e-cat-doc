---
id: library_criteria
title: Library/Criteria
sidebar_position: 2
---

## Criteria & Library

A set of Criteria defines the outcomes (Principles) that a Motivation aims to achieve. These criteria act as benchmarks to assess whether principles are followed or objectives are achieved. Meeting the criteria signifies compliance with the associated principle. Multiple Principles can reference the same criterion.

:::info
Note: The following actions are available to admin users only.
:::

## Managing Criteria

To manage Criteria, navigate to the **Library / Criteria** tab in the Personal Menu on the left sidebar, under the **Library** section. On this page, the user will find a list of all Criteria supported by the service.

![Manage Criteria]( /img/library/criteria/criteria_manage.png)

The displayed information includes:
- **CRI**: The acronym of the criterion.
- **Label**: The label associated with the criterion.
- **Description**: A description of the criterion.
- **Modified**: The timestamp indicating when the criterion was last modified.
- **Motivations**: The motivations associated with the criterion.

## Adding a New Criterion

To add a new Criterion, click the **Create New** button ![Create New Button]( /img/buttons/buttons_create.png).
A pop-up window will appear, and the administrator can fill in the criterion details:
- **CRI**: The acronym of the criterion.
- **Label**: The label associated with the criterion.
- **Description**: A description of the criterion.
- **Imperative**: Defines the level of the requirement, the criterion is necessary to comply or not.

import criteria_add_new from '/img/library/criteria/criteria_add_new.png';

<p align="center">

<img src={criteria_add_new} alt="Add a Principle" style={{width: 500}} />
</p>


## Searching the Criteria List

Administrators can search for criteria by entering keywords in the search auto-complete field. The search function is performed across the following fields:
- **CRI**
- **Label**
- **Description**

![Search Criteria]( /img/library/criteria/criteria_search_auto.png)

## Viewing Criterion Details

To view the details of a specific criterion, click the **Details** button: ![View Details Button]( /img/buttons/buttons_view_details.png).
A pop-up window will display the criterion's detailed information.

import criteria_view_details from '/img/library/criteria/criteria_view_details.png';

<p align="center">

<img src={criteria_view_details} alt="criteria_view_details" style={{width: 500}} />
</p>


## Editing a Criterion

To edit a criterion, click the **Edit** button: ![Edit Button]( /img/buttons/buttons_edit.png)
A pop-up window will appear, allowing modification of the following criterion details:
- **CRI**: The acronym of the criterion.
- **Label**: The label associated with the criterion.
- **Description**: A description of the criterion.
- **Imperative**: Defines the level of the requirement; the criterion is necessary to comply.

import criteria_edit from '/img/library/criteria/criteria_edit.png';

<p align="center">
<img src={criteria_edit} alt="Editing a Criterion" style={{width: 500}} />
</p>


To save the changes, click the **Update** button: ![Update Button]( /img/buttons/buttons_update.png) 
To cancel the changes, click the **Cancel** button: ![Cancel Button]( /img/buttons/buttons_cancel.png)

If the criterion is part of a published motivation assessment type, the changes will be rejected, and the administrator will be notified via an error message.

## Deleting a Criterion

To delete a criterion, click the **Delete** button: ![Delete Button]( /img/buttons/buttons_delete_trash.png)
A pop-up window will prompt the administrator to confirm the deletion. 

import criteria_delete from '/img/library/criteria/criteria_delete.png';

<p align="center">
<img src={criteria_delete} alt="Deleting a Criterion" style={{width: 500}} />
</p>

To proceed with the deletion, click the **Confirm Delete** button: ![Confirm Delete Button]( /img/buttons/buttons_confirm_delete.png).
To cancel the deletion, click the **Cancel** button: ![Cancel Button]( /img/buttons/buttons_cancel.png).

If the criterion is associated with a published motivation assessment type, it cannot be deleted, and the administrator will receive an error message.


---
id: zenodo_get_assessment
title: Retrieve Assessment Information from Zenodo 
sidebar_position: 3
---

# Retrieving Assessment Information from Zenodo

CAT Service maintains records of assessments published on Zenodo. This documentation outlines the stored information and access control policies for retrieving assessment details.

## Stored Information
The following details are recorded in the CAT Service database:

- **Assessment ID**: Unique identifier for the assessment.
- **Zenodo Deposit ID**: Corresponding deposit identifier in Zenodo.
- **Created At**: Timestamp indicating when the assessment was stored.
- **Current Process State**: The latest status of the publication process (e.g., `FILE UPLOADED`, `PROCESS COMPLETED`).
- **Publication Status**: Indicates whether the assessment is published or in draft state.
- **Publication Date**: The date when the assessment was successfully published.

## Retrieving Assessment Information
Users can retrieve stored assessment details using the assessment ID. The availability of information depends on the publication status.

## Access Control Policies
- **Published Assessments**: If the assessment has been successfully published on Zenodo, its information is publicly accessible without authentication, regardless of whether the user is registered with CAT Service.
- **Draft Assessments**: If the assessment is still in a draft state on Zenodo, access is restricted. Only validated users registered with CAT Service can retrieve the information after completing the authentication process.



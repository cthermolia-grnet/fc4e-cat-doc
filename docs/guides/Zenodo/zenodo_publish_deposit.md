---
id: zenodo_publish_deposit_guidelines
title: Publishing Deposit on Zenodo
sidebar_position: 2
---

# Publishing a Deposit on Zenodo

This document provides a structured guide for publishing an assessment deposit on Zenodo, ensuring seamless database synchronization and proactive failure handling.

## Overview

The publication process involves multiple stages, including finalizing the deposit, updating the CAT Service database, and notifying users about the outcome. In some cases, the assessment's publication may fail, leaving the deposit in a `draft` state. This guide outlines the steps to successfully publish the deposit and handle potential issues.

## Process Workflow

An assessment deposit may initially exist as a draft on Zenodo. The corresponding assessment details are stored in the CAT Service database, with the deposit status marked as `draft`. If the publication process fails, users should attempt to manually publish the deposit following these steps:

### 1. Checking Deposit Status
- **Draft Status:** If both the CAT Service database and Zenodo indicate a `draft` status, the deposit should be finalized and published on Zenodo. The database is then updated to reflect the new `published` status, and the user receives an email confirmation.
- **Already Published:** If the deposit is already marked as `published` on Zenodo, the CAT Service database is synchronized accordingly, and an email confirmation is sent to the user.

## Failure Handling

Failures may occur at any stage due to network issues, data inconsistencies, or Zenodo API errors. If an error arises the user is immediately notified via email.

This proactive approach ensures transparency and allows users to address any issues promptly.

## Conclusion

This workflow guarantees that assessment deposits are accurately published on Zenodo, synchronized with the CAT Service database, and users remain well-informed about the publication status or any encountered issues.


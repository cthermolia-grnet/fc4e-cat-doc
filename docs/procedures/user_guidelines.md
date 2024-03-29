---
id: user_guidelines
title: Creating Compliance Assessments in CAT 
sidebar_position: 1
---

## Creating Compliance Assessments in CAT 
<p> This is a guide about the required steps a user should follow, in order to create a Compliance Assessment in CAT. Right now, the CAT Service supports assessments of PID Policy, but this can easily extend to different types of policies, in the future. In our example, we will describe the specific steps, regarding an assessment, complying with the standards, coming from the specific role of PID Scheme. </p>

##### Step 1: Select type of Assessment
<p> As first step, the user should specify the type of the assessment by selecting the Organisation, on behalf of which he submits the assessment and define the standards the Assessment should comply be selecting the Actor role. The type of the Assessment can be selected only if a corresponding validation request is already approved by the CAT administrators. </p>

![](/img/create_assessment_step1.png) 

##### Step 2: Fill General Info
<p> As second step the user should provide:</p>

+ <b> General information</b>, such as the name of the Assessment and it's type (right now type is pre-filled as CAT Service supports only PID policy).
+ <b> Submitter information:</b> This is pre-filled information, extracted by the validation request that supports the assessment.
+ <b> Subject information</b>, such as the Subject ID , Subject Name and Subject Type. User can fill these fields on the fly or select from a list of already defined subjects.
Subject ID is A unique identifier for the current subject - this can be a URL, a string representing the service or organisation being assessed, or the PID of a resource owned by the user.
Subject Name is the name of the subject of the assessment as identified above.
Subject Type is the type of object (such as a web resource identified by the owner) or service provided by an authority, provider, or manager, for which the assessment will  be completed. 

+ <b> Rights, licence and Re-Use information </b>, defining if the assessment will be a private or a public one.
If the user is not yet ready to share an assessment result or it is being done for internal purposes only, he can keep it set to ‘private’. Only the results of ‘public’ assessments are visible to others. 

At this step the user can click on the <b>Create</b> button and create an unfinished assessment, with unknown compliance, that will later will be completed. 
![](/img/create_assessment_step2.png)

##### Step 3: Fill Assessment Criteria
<p> The user should fill each criterio, defined by the type of the Assessment.</p>
<p> If the inserted test value complies with the benchmark, the criterio is considered successful, else it fails. Also the user can add evidences to prove their declaration of test values.</p>
<p> Test values are accumulated and decide the success of the criterio. </p>
<p> User is able to view per critero, how many tests pass or fail. Also the user can view how many mandatory criteria pass/fail, the ranking of the assessment and if the assessment complies. </p> ![](/img/ranking_assessment.png)

<p> Also the user, can view the guildelines that accompany the test,by hovering over the (i) icon, as in the following image. ![](/img/assessement_guidelines.png) </p> 


<p> The user can create the assessment or save if already created, by clicking at the <b>Create</b> button. At any step of filling the criteria, the user can create/save the results. As long as information is missing, the compliance state is considered unknown, while as long as the user has filled the criteria, the compliance state is considered pass or fail.  </p>

![](/img/create_assessment_step3.png)

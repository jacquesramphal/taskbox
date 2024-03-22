%%Add consistent structure to each section. eg. "Problem, Solution, Tips, Links"%%

[1. Design Estimation & Tracking](/docs/Workflow.md#1-design-estimation--tracking)

[2. DQA Jira Process](/docs/Workflow.md#2-DQA-jira-process)

[3. Initial Baseline setting with Figma & Storybook](/docs/Workflow.md#3-initial-baseline-setting-with-figma--storybook)

[4. Continuous Integration with Figma Tokens synced with github](/docs/Workflow.md#4-continuous-integration-with-figma-tokens-synced-with-github)

---

# **1. Design Estimation & Tracking**

**The Problem**

Agile teams use tools like Jira to track progress on development tickets. Historically, Design tracking has not been included in our sprint boards and furthermore, we do not include DQA column in our Jira Workflow.

Design also requires increased documentation for approvals to ensure requirements are captured and to mitigate unforseen changes to scope.

**Proposed Solution**
- Document design tickets in the same backlog as Dev
	- Design tasks are part of the Jira backlog
		- This makes it easy to link design references to corresponding dev tickets
	- Use epics and components to categorize design tickets. eg. "design, DQA, front-end, back-end"
	- ***DRAFT:*** Include Design Tasks in estimation sessions. Design effort should be considered part of contributing velocity and bug tickets should be accounted for in the DoD for sprint goals
-   Track approval process on ticket and document changes
-   Attach design tickets to dev tickets for reference during deploy
	- Design tickets can be attached and referenced directly on jira tickets. They can be linked to shared epics or used as subtasks to ensure dev has what is needed to compete a ticket.
	- Alternatively, we can use Figma Embeds on tickets to provide dev a quick view of Figma designs in context.
		-  Version control on figma since embeds can be updated without an alert to the dev team



<img width="100%" alt="Design Tracking in Jira" src="https://user-images.githubusercontent.com/3611998/224799868-c425a066-a225-43d3-acf7-574a98254110.png">

_Draft Example of Design tracking Jira columns_

See this [template board for Design Tracking]()

---

# **2. DQA Jira Process**

<img width="768" alt="DQA column in Jira board" src="https://user-images.githubusercontent.com/3611998/224800748-b29b183e-d442-4a18-973b-302da37825db.png">

_DQA is part of the Definition of Done (DoD). Embedded in our Jira workflow._


Make DQA a part of the process from the start. All Jira projects with design support should include a DQA column and a DQA issue status. The intent here is to increase visibility for tickets requiring *manual* review, provide a prompt for devs and designers to work together and avoid using cumbersome process like DQA subtasks.

This is not intended to be a blocker to productivity, rather it is intended to accelerate it by reminding devs and designers to work together before moving tickets to CR and QA. Often times tickets are pushed back due to visual issues that could have been caught earlier. [Design QA deserves a seat at the table](https://phase.com/magazine/design-qa/ "https://phase.com/magazine/design-qa/")

Tickets should not sit in a DQA column; Designers should be aware of tickets in this column and proactively provide feedback to keep things moving.

> **Tip**
> Automated alerts can be setup to notify watchers when tickets move into specific columns. 

**Here’s the process**
1.  Devs have completed coding their tickets and are ready to move the ticket to the next stage
2.  Devs move their ticket to the DQA column and then pair with Designer to quickly review their tickets.
3.  Designer will review the ticket and provide steps to resolve any design issues.
	- Attach QA notes on ticket in Jira with supporting visuals if needed
4.  Once Designer gives their approval the ticket moves to Code Review

> **Important**
> Typically we dont account for DQA in our DoD. Visual polish is part of a ticket's acceptance criteria. This means when estimating, we may need to take on less tickets per sprint, but as a result we will deliver more complete tickets each sprint, lessening the need to revisit and refactor tickets during User Acceptance Testing (UAT) sprints later in the project. Sometimes due to timelines, we never get to this step. This significantly impacts the quality of the work we deliver.

See this [template jira board]() with an inline DQA column
%%TBD template%%

---

# **3. Initial Baseline setting with Figma & Storybook**

In order to work more closely, designers and developers need to have a shared understanding of  components and features.
- If designing based on a staterkit or set or predeveloped components, it is useful to know that development status of the component. What does it look like? How does it behave? Which variants and controls are available.
- If developing a new component or modifying an existing one, developers need to have a full view of the design and intended interactions.

**Bridging the gap between the 2 environments** 
- Figma provides many useful views and tools for both design and dev to collaborate.
- Storybook provides useful controls and previews for design and dev to review coded components.

### Solution
- Foundational components in Figma can be connected with Storybook components, to enable a shared view of both design and dev in both environments.
-   Designer sees the storybook component in figma, Developer sees the design in storybook, changes are synced. 
- A Designer can connect to a main or dev branch to see the latest or in progress states of the component from figma.

See the [installation guide for this step]()
%%TBD install guide%%

%%Connections made to components in a main library will carry over to new libraries. This is effective for the main storybook instance of composable, but would require designers to relinkstories depending on the instance of storybook that is created. There may be a way to bulk swap the storybook id in code, is this possible in figma?%%


---

# 4. Continuous Integration with Figma Tokens synced with github

This guide is intended to be a stepping stone towards more automation in the DQA process. However manual, the steps below bring us closer by reducing the effort involved when spinning up new projects.

- Designers can export the foundational styles in a Figma file using the [Figma tokens](/docs/install-guides/figma-tokens.md) plugin in a format that can be used directly in code with [Style-Dictionary](/docs/install-guides/style-dictionary.md).
- Devs can use values provided by design in json format to build **styledictionary variables** to style components. 
- Design can push changes using tokens plugin directly to Github tokens.json and visa versa. Dev can push changes to design plugin if needed
- Design can make changes to built components using variables

See the [installation guide for this step]()
%%TBD install guide%%

---

# 5.  Regression testing with Storybook Chromatic (or Virtuoso)

#### Using Chromatic plugin for Storybook

-   Storybook and Chromatic setup allowing designers to vet changes and approve new builds
-   Developer (or designer) pushes changes to dev branch, a chromatic build is generated
-   New review items are generated each time a new build is created.
    -   A review process should be defined to allow changes to be reviewed regularly and approved before merging to main branch
-   Comparison overlays are generated allowing designers and QA to catch regressions in builds

See the [detailed steps for Chromatic]()
%%TBD link to steps%%

#### Using Virtuoso

-   Automated regression testing can be setup to catch visual bugs without the need for designer review
- Visual snapshot testing requires input to determine threshold to trigger alerts
%%TBD - Need to investigate visual reg testing using visual baselines from figma - See virtuoso usage guide%%
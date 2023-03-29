**Links**
- Open Figma
- Open Storybook
- Open Chromatic
- Open Github

**Steps**
- View Storybook Connect in Figma
- View Figma reference in Storybook
- Make a change to a token in Figma and push to main OR dev using Tokens plugin
- Remove erroneous sections in tokens file for demo. Desktop, Mobile, UI
- View updated token in Github/VS Code
- Trigger a build to Chromatic
- View build link in Chromatic and approve/deny changes
- See Github PR, checked step for Chromatic
- Merge PR
- See Change reflected in Storybook, Figma Storybook Connect

**From Dev**
- Push a change to a token.json file to dev/main
- Trigger and see build in Chromatic (chromatic - optional)
- Approve or deny (chromatic - optional)
- From figma, pull latest changes using tokens plugin
- Apply changes to FOUNDATIONS PAGE only
- See changes reflected in design

**Working on MAIN**
- Make a change (in figma or code), push to main
- Optional Chromatic flow
	- Yarn chromatic to trigger a build on chromatic dashboard
	- Approve Chromatic build preview, check for regressions
- Pull changes into figma/dev depending on where you opened the PR from

**Working on Dev**
- Make a change, push to dev and Open a PR
- Optional Chromatic flow
	- Yarn chromatic to trigger a build on chromatic dashboard
	- Approve Chromatic build preview, check for regressions
- Approve and merge PR
- Pull changes into figma/dev depending on where you opened the PR from
- See reflected in files

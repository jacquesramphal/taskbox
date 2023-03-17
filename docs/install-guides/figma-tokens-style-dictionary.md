# Continuous Integration - Figma Tokens sync with Github

### **Problem**

-   Currently we have lots of styles in figma files
-   Updating styles requires communication with developers through Jira etc.
-   Must go into codebase to update
-   Requires designers to QA

### **Solution**

Using Figma Tokens and Style Dictionary, we can define and manage styles in figma, connect with and push to a Github repo containing our coded components and continuously integrate changes directly from Figma, with little to no dev effort required. Very exciting right?!

### **Required Toolkit**

-   [Figma Tokens Plugin](https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens) "https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens)")
-   Github
-   [VS Code](https://code.visualstudio.com/ "https://code.visualstudio.com/")
-   [Style Dictionary](https://amzn.github.io/style-dictionary/#/ "https://amzn.github.io/style-dictionary/#/")

---

### **1. Importing Existing Styles Using Figma Tokens**

-   Open File containing design styles
-   Run Figma Tokens plugin
-   In the bottom right of the plugin window, select `Styles > Import Styles`
-   Select all desired style types and click `Import`

_All your styles defined in figma are now loaded into the Figma Tokens plugin. Check naming and align with the dev team to ensure you’re following the same conventions._

---

### **1b. Updating Styles**

-   Existing styles can be edited and changes will directly affect the document
-   Style changes are seen immediately

---

Videos of walkthrough using composable to come.

### **2. Connecting to Github**

#### In Figma (Designer)

-   Open the `Settings` tab in your Figma Tokens plugin.
-   Locate `Sync Providers` section and select `Add New` > `Github`.
-   Name your configuration eg. `figma-tokens-github` (or whatever you want).
-   Proceed to GITHUB setup to generate your Personal Access Token.
    -   If you are a designer, you may need to contact your developer friends to have them complete these steps using existing or new repo credentials.


#### In Github (Developer)

-   Create a new `Personal Access Token`, check REPO in the access settings and add this value to the applicable field in the Figma tokens config window.
-   Create a new repository or link an existing one
-   If creating a new repo, [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository") to your local
-   Copy the `User/Repo-Name` and add this value to the applicable field in the Figma tokens config window (remove spaces)
-   Return to figma to complete setup  

#### In Figma

-   Add the branch you want to target eg. `main`
-   Add a file path eg. `tokens/tokens.json` to create a folder in your repo
-   Click `Save`

_You’re connected! 🥳_

---

### **2b. Your First Commit - Pushing your tokens to Github from Figma**

-   Add a [Commit Message](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#about-commits "https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#about-commits") eg. ‘Pushing tokens’.
-   Select the branch you want to update and click `Push`.
    -   if pushing to a branch other than main, create a [pull request](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#about-commits "https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#about-commits").
-   Reload github in browser tos ee the newly pushed `tokens` folder with the `tokens.json` file you just pushed.
-   Open the local repo in [VS Code](https://code.visualstudio.com/ "https://code.visualstudio.com/") or another text editor.
-   Navigate to the project folder in terminal and run `git pull origin main` to see the newly pushed changes in your local repo.

_You now have a folder in your repo containing styles defined in figma! 👏🏽_

---

### **3. Using the tokens in our codebase**

-   Download and install [Style Dictionary](https://amzn.github.io/style-dictionary/#/ "https://amzn.github.io/style-dictionary/#/")
    -   This allows us to convert our tokens into CSS Variables that we can use in our codebase
    -   `npm install -g style-dictionary`
- Follow the [getting started guides](https://amzn.github.io/style-dictionary/#/README)
-   Run `style-dictionary build` to generate the build artifacts and get your tokens as variables
-   You can now apply these styles as variable in your code
    -   eg. `color: var(--color-variable-name);`
        

---

### **4. Making changes 🔥**

Here’s where things get trippy. If you make a change to a variable in code, or if a designer has pushed a new change from Figma, save the file and re-run the build command `style-dictionary build`.

#### **From Figma**

-   Make a change to a style value
-   Add a commit message
-   Push to main (or a dev branch and open a pull request)
-   When the developer pulls from origin, and runs `style-dictionary build`, the latest changes will be displayed in the code
    

#### **From Codebase**

-   Make a change to a style value
-   Commit and push the change to main (or a dev branch and open a pull request)
-   When the designer pulls from origin using the Figma tokens plugin the latest changes will be displayed in the figma 🤤

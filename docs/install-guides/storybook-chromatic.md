
# Initial Baseline setting with Figma and Storybook

Figma [Storybook plugin](https://www.figma.com/community/plugin/1056265616080331589/Storybook-Connect "https://www.figma.com/community/plugin/1056265616080331589/Storybook-Connect") lets you embed component stories in Figma. This lets you cross-reference the live implementation from Storybook in your Figma file. It’s powered by [Storybook embeds](https://storybook.js.org/docs/react/sharing/embed#embed-stories-on-other-platforms "https://storybook.js.org/docs/react/sharing/embed#embed-stories-on-other-platforms") and [Chromatic](https://chromatic.com/docs/figma "https://chromatic.com/docs/figma"), a publishing tool created by the Storybook team.

--- 

### Add Storybook stories in Figma
1. Add the [Storybook Connect Plugin](https://www.figma.com/community/plugin/1056265616080331589/Storybook-Connect "https://www.figma.com/community/plugin/1056265616080331589/Storybook-Connect") to Figma.
2. Create an account and sign in with [Chromatic](https://chromatic.com/docs/figma "https://chromatic.com/docs/figma"). See the install guide
3.  Grab link from stories hosted on Chromatic. You can click the link to storybook (hosted on chromatic ie. a permalink tied to a build) 
4.  Run storybook/chromatic plugin from figma file and paste Chromatic link
5. Once connected to chromatic, storybook links are available in the Figma sidebar

> The connection travels with the component instance to other files. You can therefore see what code is associated with your component and the status of the styling/functionality 🔥


<img width="768" alt="Screen Shot 2022-08-23 at 12 39 01 PM" src="https://user-images.githubusercontent.com/3611998/224833859-4a0265a7-22d9-4a1a-8fff-23e86436858f.png">
Storybook connect allows you to view Storybook stories in Figma


<img width="768" alt="Screen Shot 2022-08-23 at 9 11 33 PM" src="https://user-images.githubusercontent.com/3611998/224833913-89ca664d-fd8b-48f3-b430-f9106bd097e3.png">
Storybook stories hosted on Chromatic. Permalinks can be copied and pasted in Figma plugin.


<img width="467" alt="Screen Shot 2022-08-23 at 9 13 27 PM" src="https://user-images.githubusercontent.com/3611998/224834873-5e588f73-6f42-4d24-902f-c737b73c03e7.png">
Once installed, the Storybook Connect plugin is accessed directly in Figma. 


> The connection travels with the component instance to other files. You can therefore see what code is associated with your component and the status of the styling/functionality 🔥 


<img width="768" alt="Screen Shot 2022-08-23 at 9 12 50 PM 1" src="https://user-images.githubusercontent.com/3611998/224833958-03f0fd3e-6139-4be0-bef5-4d1a1d144d16.png">
Once connected, stories display when you select the layer they are applied to.


> **Troubleshooting**
> If Storybook connect is not working, log out and authorize again

<img width="768" alt="Screenshot 2023-03-13 at 10 43 48 AM" src="https://user-images.githubusercontent.com/3611998/224833984-f6764b0b-33a6-4b54-9178-42df347cf8b1.png">
Links available in sidebar


---

### Embed Figma in Storybook

Storybook [design addon](https://storybook.js.org/addons/storybook-addon-designs "https://storybook.js.org/addons/storybook-addon-designs") allows you to embed Figma files and prototypes in Storybook. You can embed Figma files in Storybook, regardless of the file's [sharing settings](https://help.figma.com/hc/en-us/articles/360040531773 "https://help.figma.com/hc/en-us/articles/360040531773"). Share private files within a team, or public files with the world.

See the docs for installation:
- [Figma Addon Readme](https://github.com/pocka/storybook-addon-designs/blob/master/README.md "https://github.com/pocka/storybook-addon-designs/blob/master/README.md")  

<img width="768" alt="Screen Shot 2022-08-23 at 12 27 40 PM" src="https://user-images.githubusercontent.com/3611998/224834014-1aec489f-67d6-4d0e-8452-ddd54fa1d7e0.png">
Story showing figma embed (private)


<img width="768" alt="Screen Shot 2022-08-23 at 12 28 40 PM" src="https://user-images.githubusercontent.com/3611998/224834051-676398ac-7a35-4a64-9b5f-459f6ee8f57e.png">
Story showing figma embed (authenticated)

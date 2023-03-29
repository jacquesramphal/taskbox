# Regression testing with Storybook Chromatic (or Virtuoso)
Tools
 
## Create a react repo with Storybook+Chromatic

(Redo and document everything)

- Spin up Nuxt repo with Storybook (See React Template w storybook)
- Add Chromatic 
- Sign up and generate project id ^ then run:
	- npx chromatic --project-token=<your_project_token>
	- Repo must have atleast one change (to set a baseline) to a component to work so commit a change (eg. colour in button.css) and rerun the above

---

## Using Chromatic

<img width="768" alt="Screen Shot 2022-08-22 at 5 13 37 PM" src="https://user-images.githubusercontent.com/3611998/224839323-ac4b5410-0bfd-4953-ac20-2f07397e1b59.png">

See a new build for every PR

<img width="768" alt="Screen Shot 2022-08-22 at 5 14 09 PM" src="https://user-images.githubusercontent.com/3611998/224839379-1d42c159-ec2d-4075-a69b-f742b1882a29.png">

Summary of changes with review status labels

<img width="768" alt="image-20221220-215157" src="https://user-images.githubusercontent.com/3611998/224839457-7f4ab931-abd8-48ff-af9b-cb34e6f775a9.png">

View changes between baseline and new PR

<img width="768" alt="Screen Shot 2022-08-22 at 5 17 03 PM" src="https://user-images.githubusercontent.com/3611998/224839515-bc97bed0-663a-44c0-ab56-2b72d86908d3.png">

Comment and deny for more changes or approve

<img width="768" alt="Screen Shot 2022-08-22 at 5 16 36 PM" src="https://user-images.githubusercontent.com/3611998/224839559-4e7e7140-6b62-40d9-97aa-12a64e6081c1.png">
<img width="768" alt="Screen Shot 2022-08-22 at 5 18 02 PM" src="https://user-images.githubusercontent.com/3611998/224839575-1c327407-4c0e-4d78-9f34-90b33ff09778.png">

Comment and approve

<img width="736" alt="Screen Shot 2022-08-22 at 5 18 38 PM" src="https://user-images.githubusercontent.com/3611998/224839609-8feb2119-2654-42c8-bdc2-f42c9aa7d78d.png">

Changes highlighted in terminal

<img width="611" alt="Screenshot 2023-02-13 at 2 08 58 PM" src="https://user-images.githubusercontent.com/3611998/224839643-cc19076e-23d3-4886-9b7d-67bcc38e1bb6.png">

Approvals on PR in Github

Once approved, the PR can be merged into MAIN

 <img width="985" alt="Screen Shot 2022-08-22 at 5 12 40 PM" src="https://user-images.githubusercontent.com/3611998/224839726-50ceba78-f5f7-43dd-a1e9-e1a468717a84.png">

Possible CI Workflow

TBD Guide - Save ID in .env and add chromatic script to package.json
instead of typing this everytime

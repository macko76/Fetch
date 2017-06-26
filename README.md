# Fetch (Midterm Group Project)

Fetch is an app that makes easy resource storage happen. It allows learners to save learning resources like tutorials and blogs in a central place that is publicly available to any user. Enjoy :)

Created by Rebecca Haliburton, Mark Bickford, Michael Shin

## Final Product

Home page
!["Screenshot of home page"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-home.png)
!["Screenshot of filter by categories"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-filter-categories.png)
!["Screenshot of search"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-search.png)

User page
!["Screenshot of comments on resource"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-comments.png)
!["Screenshot of edit on resource"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-edit.png)
!["Screenshot of add resource"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-add.png)
!["Screenshot of added resource"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-added.png)
!["Screenshot of favourited resources"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-favourites.png)

Profile page
!["Screenshot of profile page"](https://github.com/drhaliburton/Fetch/blob/master/docs/fetch-profile.png)

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above

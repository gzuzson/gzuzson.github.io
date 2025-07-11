# Website

Personal portfolio website to include: 
- Projects
- About/Interests
- Skills
- Contact

## Running application

To run locally, execute the following: 

```
cd my-website
npm start
```

## Deployment

GitHub pages is set up using the gh-pages branch for deployment.  As such, the following command will create a build of the latest version of the website within the main branch and deploy the build to the gh-pages branch. 

```
npm run deploy
```

Once the above command is run, make sure to update the custom domain on GitHub at gzuzson.github.io -> Settings -> Pages. 
By default, GitHub pages removes the custom domain when deploying a new version of the website.  A .nojekyll file also needs to be added manually to the gh-pages branch

## TO-DO
- [X] Update About Me section
- [X] Add a Blog feature to the website
- [X] Add other projects to homepage of the website:  FlagMaster and Planted City Church
- [ ] Add CAPTCHA to contact me section of website

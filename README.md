# Lead Sqr Front end Project
## Installation
 - `npm install <project-name> --template typescript`
 - `npm start`
 - `npm install sass`

Note: Make sure [Node](https://nodejs.org/en/) is installed.

If you want to follow along the project, click on the branch drop-down and you will see a list of dropdown branches

## Clone Project
 - `git clone https://github.com/techstackmedia/lendsqr-fe-test.git`
 - `npm install`
 - `git checkout <branch-name>`

Note: Git must be installed for commands to work. Check if git is installed with the command `git --version`. If it is already available on PC the version will show up.

## Techstack
Technology used are:
 - React
 - TypeScript
 - SCSS
 - React Router
 - Heroku

## Project Description

1.) The project is dashboard that shows users activity. It has a table that displays users that have an account. Must relevant data displayed in the users page are
 - Organization
 - Phone Number
 - Email
 - Username
 - Status

The API for the users is shown below:

```
https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/
```

Paste it on your browser search or any API platform like Postman, Insomnia, etc. to get the full data

2.) The project has a couple of components listed below;
 - Logo
 - Button
 - Login Form
 - User Table
 - Navbar
 - Sidebar
 - Pagination
 - User Tier
 - Filter
 - User Detail
 - Spinner

3.) The user detail page contails all detail of a specific user based on the id. It also has detailed information of the guarantor like the name, phone number, email, and relationship with the user. You can get the API as shown below:
 ```
https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id
```
Paste it on your browser search or any API platform like Postman, Insomnia, etc. to get the full data.
Based on the current id, it is between `1 to 100`. That is replace `:id` to any number between 1 to 100.

4.) Design
Click the [link to get the Figma design](https://www.google.com/url?q=https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend&sa=D&source=editors&ust=1673861562837685&usg=AOvVaw13_5gDNbAIEaae_KDWvVyu)
 
5.) Deployment
To [deploy the app using Heroku](https://www.heroku.com/nodejs) make sure Heroku is installed on PC. To install Heroku [click the link here](https://devcenter.heroku.com/articles/heroku-cli) and follow the instructions based on your Operating System. Also make sure you have a file named **Procfile** with no extension is in the project root directory. The Procfile must have the text `web: npm start` for it to work. Follow the steps below:
 - `git add .`
 - `git commit -m 'commit message here'`
 - `git push origin <branch-name>`
 - `heroku login`
 - `heroku create`
 - `git push heroku <branch-name>`

Note: You do not have to run `npm run build` to have the project in production environment. This will be done automatically by Heroku.

## Project Link
You will get a unique random link. To rename the link run the command:
- `heroku apps:rename <newname>`

The link to the made up [project can be found here](https://bello-osagie-lendsqr-fe-test.herokuapp.com/)

---

Happy Coding! 😊

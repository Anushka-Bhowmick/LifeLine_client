<img src="./logo-proj-1.png">  

![ReactJs](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SpringBoot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=Spring&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker)
![Python](https://img.shields.io/badge/Python-yellow?style=for-the-badge&logo=python)
![Mongodb](https://img.shields.io/badge/Mongodb-green?style=for-the-badge&logo=mongodb)
![Mongodb](https://img.shields.io/badge/Maps-lightblue?style=for-the-badge&logo=googlemaps)

[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=Hello+There!!!+👋🏻;Welcome+to+Lifeline+Project)](https://git.io/typing-svg)

# Lifeline
 
 Lifeline

Welcome to the Lifeline, a website designed to help individuals find information about the availability of blood in their region.We have created a Plasmabot which will guide our user to find there repective blood type. This platform serves as a centralized hub for users to search and access real-time data on blood availability, making it easier for both donors and recipients to connect.

Techstack Used 
---------------

- **Backend**
    - Spring - A comprehensive framework for enterprise Java development.

- **Frontend**
    - React - A popular JavaScript library for building user interfaces.
    - Vite - A fast build tool for modern JavaScript projects.

- **Database**
    - MongoDb - A non-relational database management system.

- **Container**
    - Docker - An open platform for developing, shipping, and running applications.

Table of contents
------------------


Features
---------------

- **Login**
    - Local Authentication using Email and Password
    - OAuth 2.0 Authentication: Sign in with Google

- **Chatbot**

- **API**
    - Spring Api - Containing data about the available blood availability in the hospital across the West Bengal.  
    - Open Street Api - Presents us with the map

Prerequisites
---------------

- MongoDb (local install OR hosted)
    - Local Install: [MongoDB](https://www.mongodb.com/)
    - Hosted: No need to install, see the MongoDB Atlas section

    - Node.js (Preferably 18+)

    - Command Line Tools

    - Any IDE

Getting Started
---------------

**Step 1:** The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/sahat/hackathon-starter.git myproject

# Change directory
cd myproject

# Go to the client folder
cd ./myproject/client-side

# Install NPM dependencies
npm install

# Go to the server folder
cd ./myproject/server-side

# Install NPM dependencies
npm install

# Then simply start your app(client)
npm run dev

# Then simply start your app server(server)
nodemon ./index.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon). It watches for any changes in your  node.js app and automatically restarts the server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually restart the server each time you make a small change in code. To install, run `sudo npm install -g nodemon`.

**Step 2:** Obtain API Keys and change configs if needed
After completing step 1 and locally installing MongoDB, you should be able to access the application through a web browser and use local user accounts. However, certain functions like API integrations may not function correctly until you obtain specific keys from service providers. The keys provided in the project serve as placeholders, and you can retain them for features you are not currently utilizing. To incorporate the acquired keys into the application, you have two options:
   
1.  Set environment variables in your console session: Alternatively, you can set the keys as environment variables directly through the command prompt. For instance, in bash, you can use the `export` command like this: `export FACEBOOK_SECRET=xxxxxx`. This method is considered a better practice as it reduces the risk of accidentally including your secrets in a code repository.
2. Replace the keys in the `.env.example` file: Open the `.env.example` file and update the placeholder keys with the newly acquired ones. This method has the risk of accidental checking-in of your secrets to code repos.

Optional
---------

**Using Docker**  


Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/app.js          | Place your client-side JavaScript here.                       |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| .dockerignore                      | Folder and files ignored by docker usage.                    |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| app.js                             | The main application file.                                   |
| docker-compose.yml                 | Docker compose configuration file.                           |
| Dockerfile                         | Docker configuration file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

**Note:** There is no preference for how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure if that makes things easier for you.
Just don't forget to update `extends ../layout`  and corresponding
`res.render()` paths in controllers.

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| @fortawesome/fontawesome-free   | Symbol and Icon library.                                                |
| @googleapis/drive               | Google Drive API integration library.                                   |
| @googleapis/sheets              | Google Sheets API integration library.                                  |
| @ladjs/bootstrap-social         | Social buttons library.                                                 |
| @lob/lob-typescript-sdk         | Lob (USPS mailing / physical mailing service) library.                  |
| @node-rs/bcrypt                 | Library for hashing and salting user passwords.                         |
| @octokit/rest                   | GitHub API library.                                                     |
| @passport-js/passport-twitter   | X (Twitter) login support (OAuth 2).                                    |
| @popperjs/core                  | Frontend js library for poppers and tooltips.                           |
| axios                           | HTTP client.                                                            |
| body-parser                     | Node.js body parsing middleware.                                        |
| bootstrap                       | CSS Framework.                                                          |
| chai                            | BDD/TDD assertion library.                                              |
| cheerio                         | Scrape web pages using jQuery-style syntax.                             |
| compression                     | Node.js compression middleware.                                         |
| connect-mongo                   | MongoDB session store for Express.                                      |
| dotenv                          | Loads environment variables from .env file.                             |
| errorhandler                    | Development-only error handler middleware.                              |
| eslint                          | Linter JavaScript.                                                      |
| eslint-config-airbnb-base       | Configuration eslint by airbnb.                                         |
| eslint-plugin-chai-friendly     | Makes eslint friendly towards Chai.js 'expect' and 'should' statements. |
| eslint-plugin-import            | ESLint plugin with rules that help validate proper imports.             |
| express                         | Node.js web framework.                                                  |
| express-flash                   | Provides flash messages for Express.                                    |
| express-rate-limit              | Rate limiting middleware for abuse protection.                          |
| express-session                 | Simple session middleware for Express.                                  |
| husky                           | Git hook manager to automate tasks with git.                            |
| jquery                          | Front-end JS library to interact with HTML elements.                    |
| lastfm                          | Last.fm API library.                                                    |
| lint-stage                      | Utility to lint files staged by git.                                    |
| lob                             | Lob API library.                                                        |
| lodash                          | A utility library for working with arrays, numbers, objects, strings.   |
| lusca                           | CSRF middleware.                                                        |
| mailchecker                     | Verifies that an email address is valid and not a disposable address.   |
| mocha                           | Test framework.                                                         |
| moment                          | Parse, validate, compute dates and times.                               |
| mongodbMemoryServer             | MongoDB in memory (for running tests without a running db).             |
| mongoose                        | MongoDB ODM.                                                            |
| morgan                          | HTTP request logger middleware for node.js.                             |
| multer                          | Node.js middleware for handling `multipart/form-data`.                  |
| nodemailer                      | Node.js library for sending emails.                                     |


🤖 Bots
--------

### Plasma Bot
- Our one and only bot which simplifies the whole process of finding availability,donation,receive of blood supply. It not only provides the location on the map , it also find nearest hospital nearby you then find the shortest distance between you and hospital.

Workflow
---------


What are the future prospects of our idea?
-------------------------------------------

We Aim to make our chatbot and database more Uber Like where hospital are also given some control to update the availibity of blood and then the update will dynamically updating our database.


License
--------
 This project is licensed under [MIT License](LICENSE).

Conclusion
-----------
You have successfully set up the project. 
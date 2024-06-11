# Node.js Express Login and Registration example with JWT
Create Node.js Express Login App
First, we create a folder for our project:

$ mkdir node-js-express
$ cd node-js-express

We need to install necessary modules: express, cors, cookie-session, sequelize, mysql2, jsonwebtoken and bcryptjs.
Run the command:

npm install express cookie-session sequelize mysql2 cors jsonwebtoken bcryptjs --save


We will build a Node.js Express application in that:

Authentication: User can signup new account, or login with username & password.
Authorization: By User’s role (admin, moderator, user), we authorize the User to access resources



These are APIs that we need to provide:

Methods	    Urls	          Actions
POST	/api/auth/signup	signup new account
POST	/api/auth/signin	login an account
POST	/api/auth/signout	logout the account
GET   	/api/test/all	    retrieve public content
GET	    /api/test/user  	access User’s content
GET	    /api/test/mod   	access Moderator’s content
GET   	/api/test/admin	    access Admin’s content

– config

configure MySQL database & Sequelize
configure Auth Key
– routes

auth.routes.js: POST signup, signin & signout
user.routes.js: GET public & protected resources
– middlewares

verifySignUp.js: check duplicate Username or Email
authJwt.js: verify Token, check User roles in database
– controllers

auth.controller.js: handle signup, signin & signout actions
user.controller.js: return public & protected content
– models for Sequelize Models

user.model.js
role.model.js
– server.js: import and initialize necessary modules and routes, listen for connections.


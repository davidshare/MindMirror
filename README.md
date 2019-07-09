# MindMirror

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1f9c6c8d872a494fadb96aea149a8eab)](https://app.codacy.com/app/davidshare/MindMirror?utm_source=github.com&utm_medium=referral&utm_content=davidshare/MindMirror&utm_campaign=Badge_Grade_Settings)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Build Status](https://travis-ci.org/davidshare/MindMirror.svg?branch=develop)](https://travis-ci.org/davidshare/MindMirror)
[![Coverage Status](https://coveralls.io/repos/github/davidshare/MindMirror/badge.svg?branch=develop)](https://coveralls.io/github/davidshare/MindMirror?branch=develop)

MindMirror is a simple diary app that enables people to write their thoughts, ideas and memories in a safe place, and affords them the opportunity to share their stories and life experiences to help inspire others.

## Server side hosted on Heroku
https://mindmirror-d.herokuapp.com/

## Table of Content
 * [Getting Started](#getting-started)

 * [Prerequisites for installation](#prerequisites-for-installation)
 
 * [Installation](#installation)

 * [Test](#test)

 * [Folder Structure](#folder-structure)
 
 * [API End Points Test Using Postman](#api-end-points)

 * [Coding Style](#coding-style)
 
 * [Features](#features)
 
 * [Built With](#built-with)
 
 * [Author](#author)

 * [License](#license)


## Getting Started

### Prerequisites for installation
1. Node js
2. Express
3. Git

### Installation
1. Clone this repository into your local machine:
```
e.g git clone https://github.com/davidshare/Fast-Food-Fast
```
2. Install dependencies 
```
e.g npm install.
```
3. Start the application by running the start script.

e.g npm start

4. Install postman to test all endpoints on port 3000.

### Test
run test using 'npm test'.

## Folder Structure
```
-- .github
-- src
---|
   --- config
   --- controllers
   --- docs
   --- helpers
   --- middlewares
   --- migrations
   --- models
   --- routes
   --- seeders
   --- __tests__
   --- server.js
-- .babelrc
-- .coveralls.yml
-- .editorconfig
-- .env.sample
-- .eslintrc
-- .eslintignore
-- .gitignore
-- .hound.yml
-- .travis.yml
-- package.json
-- yarn.lock
-- README.md
```

### API End Points Test Using Postman

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>/api/v1/auth/signup</td>  <td>User signup</td></tr>

<tr><td>POST</td> <td>/api/v1/auth/login</td>  <td>User signin</td></tr>

<tr><td>POST</td> <td>/api/v1/menu</td>  <td>Add a meal</td></tr>

<tr><td>POST</td> <td>/api/v1/orders</td>  <td>Posts a order</td></tr>

<tr><td>PUT</td> <td>/api/v1/orders/:orderId</td>  <td>Updates the status of an order</td></tr>

<tr><td>PUT</td> <td>/api/v1/menu/:mealId</td>  <td>Updates a meal</td></tr>

<tr><td>GET</td> <td>/api/v1/menu</td>  <td>Get menu</td></tr>

<tr><td>GET</td> <td>/api/v1/menu/:mealId</td>  <td>Get a meal by mealId</td></tr>

<tr><td>GET</td> <td>/api/v1/orders</td>  <td>Gets all orders</td></tr>

<tr><td>GET</td> <td>/api/v1/orders/:orderId</td>  <td>Gets an order by orderId</td></tr>

<tr><td>GET</td> <td>/api/v1/users</td>  <td>Gets all users</td></tr>

<tr><td>GET</td> <td>/api/v1/users/{userId}/orders</td>  <td>Gets a user's order history</td></tr>

<tr><td>DELETE</td> <td>/api/v1/menu/:mealId</td> <td>Delete a meal</td></tr>

<tr><td>DELETE</td> <td>/api/v1/users</td>  <td>Delete all users that are not admin</td></tr>
 
</table>

### Coding Style
* Airbnb style guide. 

## Features

 ### Users
 * A user can create an account
 * A user can signin to his/her account
 * A user can view available food items
 * A user can make orders and cancel the orders
 * A user can see history of orders
 

## Built With
* NodeJs-EXPRESS: Node.js is a javascript runtime built on Chrome's V8 javascript engine.

* html5: It is used for structuring the frontend.

* css: It is used for styling the frontend.

* PostgreSQL

## Author
* David Essien

## License
This project is licensed under the GNU General Public License v3.0 - see the LICENSE.md file for details.

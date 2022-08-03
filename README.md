# The Gitz Carlton

## Description

This is the backend for [The Masterball](https://cosmic-croissant-fd8656.netlify.app/), a Full Stack (MERN) pokemon team build and pokemon customization app that allows for creation, deletion, and editing pokemon teams and individual pokemon. It provides CRUD functionality to our front end application to allow employees to create/delete/update/and get teams/pokemon that belong to that user.

## Technologies Used

- Express
- Node.js
- MongoDB
- Mongoose

## Installation Instructions

1. Clone this repository to your lessons folder and change directory into it.
2. Run `npm i` to download required dependencies.
3. Create a .env file and add your `DATABASE_URL` to it with your MongoDB Atlas connection string.

## Getting Started

1. Run `node db/seed.js` to populate your database with seed data.
2. Run `nodemon index.js` to start your development server.
   Happy coding!!!!

## API Endpoints

- GET: api/teams
- GET: api/teams/:id
- Get: api/pokemon/:id
- POST: api/teams
- POST: api/pokemon
- PATCH: api/teams/:id
- PATCH: api/pokemon/:id
- Delete: api/teams/:id
- Delete: api/pokemon/:id
- POST: api/signup
- POST: api/signin


_To see our deployed backend API, click [here](https://the-link-cable.herokuapp.com/api/)_
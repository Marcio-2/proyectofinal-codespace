# Final Project: MF learn to train - Fullstack Fitness App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Setup](#project-setup)
- [Load Initial Exercises](#load-initial-exercises)
- [Technologies Used](#technologies-used)
- [Project Created By](#project-created-by)


## Introduction

MF learn to train is a fullstack web application focused on fitness routines and exercises.

It allows users to create their own workout routines and learn to train independently, without relying on personal trainers.  

The app includes a complete authentication system and user management, with a modern frontend and a REST API backend connected to MongoDB.

## Features

### Authentication & User Management
- User registration with encrypted passwords
- Login system using JWT
- Protected routes for authenticated users
- Profile creation with photo upload
- Logout functionality

### Exercises & Routines
- Choose different exercises
- Create, edit, and delete routines
- View routine details with sets, reps, and rest
- Warm-up and Top Routines sections with external resources


## Project Setup
Make sure MongoDB is running before starting the backend.
- Backend:
 - cd fullstack/back
 - npm install
 - npm run start

The backend runs on http://localhost:9000.

- Frontend:
 - cd fullstack/front
 - npm install
 - npm run dev

The frontend runs on http://localhost:3000 and communicates with the backend through a proxy.

## Environment Variables
This project requires environment variables to run properly.

You must create a .env file inside the /back folder with the following content:

JWT_SECRET=your_secret_key_here

This variable is used to sign and verify authentication tokens (JWT).

⚠️ Important:

The .env file is not included in the repository for security reasons.
You must create it manually before starting the backend.

Optionally, you can rename the provided .env.example file to .env and update its values.

## Load initial exercises

- The base exercises are located in back/src/mocks/exercisesDB.js. To load them into your MongoDB database:
- Uncomment the loadData route in exercisesRoutes.js:
// exercisesRouter.get('/loadData', loadData)
- It should look like: 
exercisesRouter.get('/loadData',loadData)
- Start the backend (npm run start) and open in your browser:
http://localhost:9000/exercises/loadData
- This will populate the database with the initial exercises.
You only need to do this once. Afterward, you can comment the line again to prevent loading duplicates.

## Technologies Used

- Frontend:
 - Next.js
 - React
 - Redux
 - React Redux
 - Formik
 - Yup
 - JavaScript

- Backend:
 - Node.js
 - Express.js
 - MongoDB
 - Mongoose
 - JWT (jsonwebtoken)
 - bcryptjs
 - Multer
 - CORS
 - dotenv

## Project created by

Marcio Elliott Temoche (ATR 12)
[GitHub](https://github.com/Marcio-2/proyectofinal-codespace.git)
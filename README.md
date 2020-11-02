<h2 align="center">📖 e.learning backend</h2>
<blockquote align="center">E.learning's backend repository, a mobile application focused on education that offers courses.</blockquote>

## 💡What is it?
E.learning is one of the rewards of the GoStack bootcamp, where the student gets five projects to produce alone. This app provides courses of everything, where the user can watch and bookmark courses.

## ❓How to use?
- Open the project in your editor.
- Run `yarn dev` to boot the server.
- Run a postgres database with docker.
- Configure the database in an `ormconfig.json` file.
- Open Insomnia to use the routes, or use the routes in your frontend.

## ✒Routes
All routes are initialized with the baseurl of the backend.

<strong>Lessons</strong>
  - `/lesson/list/:id` -> List all lessons in database. Submit the course id on params.
  - `/lesson/create` -> To create a lesson. Submit a json with `name`, `duration`, `count`, `course_id`, `description`, `video_id`. (Count is the lesson count, cannot be duplicate) Must be authenticated.

<strong>Courses</strong>
  - `/course/list` -> List all courses in database.
  - `/course/create` -> To create a course. Submit a multipart form with `name`, `image` - `image` must be a file. Must be authenticated.
  - `/course/update/:id` -> To update a course. Submit a multipart form with `name`, `image` - `image` must be a file - and submit the course id in the params. Must be authenticated.

<strong>User</strong>
  - `/user/create` -> To create an user. Submit a json with `name`, `email`, `password`.
  - `/user/authenticate` -> To authenticate. Submit a json with `email`, `password`.

## 🚧Built With
- Node.js
- Typescript

## 📂Project
- [Backend](https://github.com/allyfx/e.learning-backend).
- [Mobile](https://github.com/allyfx/e.learning-mobile).

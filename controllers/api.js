//"/api/workouts according to api.js is a GET/POST/DELETE route (dumb that it does that)
//"/api/workouts/:id" is a put route and "/api/workouts/range" is a get route"
//so router.get("/api/workouts..." router.post("/api/workouts"....")
//this is for updating, posting, putting, getting, delete, manipulating the database routes
const router = require('express').Router();

// this will get the workouts data

router.get('/api/workouts', (req, res) => {

    findBy

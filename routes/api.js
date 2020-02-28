const router = require("express").Router();
const path = require("path");

const Workout = require("../models/workout");

router.get("/api/workouts", function(req, res) {
  Workout.find()
    .then(function(data) {
      res.json(data);
    })
    .catch(err => {
      if (err) throw err;
    });
});

router.put("/api/workouts/:id", function(req, res) {
  console.log(req.params);
  const id = req.params.id;
  const body = req.body;
  console.log("-->", id, body);
  Workout.findByIdAndUpdate(id, { $push: { exercises: body } })
    .then(function(data) {
      res.json(data);
    })
    .catch(err => {
      if (err) throw err;
    });
});

router.post("/api/workouts", function(req, res) {
  Workout.create({})
    .then(function(data) {
      res.json(data);
    })
    .catch(err => {
      if (err) throw err;
    });
});

router.get("/api/workouts/range", function(req, res) {
  Workout.find()
    .then(function(data) {
      res.json(data);
    })
    .catch(err => {
      if (err) throw err;
    });
});
module.exports = router;

const express = require('express');
const async = require('hbs/lib/async');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((drones) => {
      // console.log("Drones", drones)
      res.render('./drones/list', { drones }
      )
    })
    .catch((err) => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('./drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    await Drone.create(req.body);
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone
    .findById(req.params.id)
    .then((drone) =>
      res.render("drones/update-form.hbs", { droneToEdit: drone })
    )
    .catch(next);
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err)
  }
});

module.exports = router;

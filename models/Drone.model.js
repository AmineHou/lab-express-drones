// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    propellers: Number,
    maxSpeed: Number
});

const Drone = mongoose.model("drones", droneSchema);

module.exports = Drone;
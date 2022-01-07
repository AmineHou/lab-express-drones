// Iteration #1
const mongoose = require("mongoose");
require("../db/index");

const Drone = require("../models/Drone.model")


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

(async function createDrones() {
    try {
        const deleteDrones = await Drone.deleteMany()
        console.log("Drones deleted from DB", deleteDrones)
        const addDrones = await Drone.create(drones)
        console.log("Drones added to DB", addDrones)
        const closeServer = await mongoose.connection.close()
    } catch (err) {
        console.log("ERROR adding drones!");
        console.error(err);
    }
})()
// jo hm wha pe server.js pe app.get krke jo route banaye the wo alg jagah yha pe bna rhe hai 

const express = require("express");
const { testController } = require("../controllers/testController");

// router object : express ke andr Router hai uske sare functionalite ab router variabkle ke andr aagya hai.
const router = express.Router();

// routes  , jo hmne controller folder ke andr jo testController.js ke andr jo function banaya hai use yha calll kr le rhe hai.
router.get('/', testController)

// export 
module.exports = router
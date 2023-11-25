const express = require("express");
const router = express.Router();

// import controllers
const { generatePrompt, generateText } = require("../controllers/test");

// import middlewares

// api routes

router.post("/prompt", generatePrompt);
router.post("/text", generateText);

module.exports = router;

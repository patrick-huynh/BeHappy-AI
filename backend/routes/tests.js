const express = require("express");
const router = express.Router();

// import controllers
const {
  generatePrompt,
  generateText,
  setResponse,
  getResponses,
} = require("../controllers/tests");

// import middlewares

// api routes

router.post("/prompt", generatePrompt);
router.post("/text", generateText);
router.post("/submit", setResponse);
router.get("/responses", getResponses);

module.exports = router;

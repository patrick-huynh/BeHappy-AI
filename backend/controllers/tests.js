const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Response = require("../models/Responses");

exports.generatePrompt = asyncHandler(async (req, res) => {
  const requestData = {
    response_as_dict: true,
    attributes_as_list: false,
    show_original_response: false,
    temperature: 0,
    max_tokens: 1000,
    providers: "google",
    text: "Create a prompt in a constructive matterm to encourage and ask the user about things like their day. Try to sound caring and promote affirmation ",
  };

  const response = await axios.post(process.env.API_URL, requestData, {
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`,
      accept: "application/json",
      "content-type": "application/json",
    },
  });

  const generatedText = response.data[requestData.providers].generated_text;

  res.status(200).json({ generatedText });
});

exports.generateText = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Error");
  }
  const requestData = {
    response_as_dict: true,
    attributes_as_list: false,
    show_original_response: false,
    temperature: 0,
    max_tokens: 1000,
    providers: "google",
    text: req.body.text,
  };

  const response = await axios.post(process.env.API_URL, requestData, {
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`,
      accept: "application/json",
      "content-type": "application/json",
    },
  });

  const generatedText = response.data[requestData.providers].generated_text;

  res.status(200).json({ generatedText });
});

exports.setResponse = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a field");
  }

  const response = await Response.create({
    text: req.body.text,
  });

  res.status(200).json(response);
});

exports.getResponses = asyncHandler(async (req, res) => {
  const responses = await Response.find({});
  res.status(200).json(responses);
});

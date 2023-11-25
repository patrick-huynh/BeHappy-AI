const axios = require("axios");

exports.generatePrompt = async (req, res) => {
  try {
    const requestData = {
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      temperature: 0,
      max_tokens: 1000,
      providers: "google",
      text: "Create a prompt in a constructive matterm to encourage and ask the user about things like their day. Try to sound caring and promote affirmation ",
    };

    console.log(requestData.text);

    const response = await axios.post(process.env.API_URL, requestData, {
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const generatedText = response.data[requestData.providers].generated_text;

    res.json({ generatedText });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.generateText = async (req, res) => {
  try {
    const requestData = {
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      temperature: 0,
      max_tokens: 1000,
      providers: "google",
      text: req.body.text,
    };

    console.log(requestData.text);

    const response = await axios.post(process.env.API_URL, requestData, {
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const generatedText = response.data[requestData.providers].generated_text;

    res.json({ generatedText });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

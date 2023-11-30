<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# BeHappy AI 😃

With daily stressors constantly bombarding our lives, BeHappy is a mobile application that aims to harness the power of generative AI to promote self-introspection and positivity every single day.



<img src="https://github.com/patrick-huynh/BeHappy-AI/assets/58818596/bfe9b736-a82a-4125-bdd8-21412d7e67fe" width="200px" />
<img src="https://github.com/patrick-huynh/BeHappy-AI/assets/58818596/b7ed4c81-a7e7-4d25-803f-d930c91b7b92" width="200px" />
<hr />

[Installation](#installation) •
[Configuration](#configuration) •

</div>

## Installation

BeHappy AI requires a couple of depencdencies

1. **npm packages**
   Run `npm i` once intially to install the packages

2. **expo**
   The project uses expo for mobile development, so you need to install it on the AppStore of your respective device. Follow this tutorial [here](https://docs.expo.dev/get-started/expo-go/) for more information
   
   Run `npm install expo` to install expo.

4. **Eden AI**
   We use Eden AI text generation for prompts and responses, create a free account and use the sandbox key in the environment variable below.
   

## Configuration
Go to `frontend/config.js` and change the IP to the IP of your current device. DO NOT use `localhost` as this will grab the IP of your mobile runtime device, and not your PC's.

### Environment Variables
Create a `.env` file with the following variables and place it in `backend/`:

- `PORT`: the port of the backend server
- `MONGO_URL`: the url of the MonogoDB atlas, more information [here](https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)
- `API_KEY`: the EdenAI api key, more information [here](https://docs.edenai.co/docs/guetting-started)



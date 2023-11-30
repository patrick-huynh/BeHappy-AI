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
[Configuration](#configuration)  • 
[Story](#story)

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

<hr />

## Story

## 🌟 Inspiration
The increasing demand for therapists puts us in long queues and financial burden. If only there was an alternative that was cheap, convenient and proactive in promoting good mental health. The rise of AI has opened so many gateways to produce life-changing technology in countless industries. BeHappy was created to promote positivity and introspection using the power of generative AI.


## 🧠 What it does
BeHappy is similar to a mental therapist in the way that it helps people who are suffering from poor mental health. However, BeHappy takes it to another level by proactively seeking out individuals who may be prone to mental health issues. At a random time everyday, BeHappy sends out a notification to it's user with a specialized prompt that forces them to think and write about events going on in their lives. Whether good or bad, BeHappy uses NLP to analyze the mood of the response and uses generative AI to create a counselling response based on the different things elaborated by the user. BeHappy focusses on validation, praise, and checkups which are key factors to consider when counselling an individual.


## 🔧 How we built it
BeHappy is a mobile app that is compatible for both iOS and Android built mainly using a MERN stack. The front-end is built using React Native and Native Base. The backend features a database using MongoDB and it is tied altogether using Express and Node. The AI portion uses the Eden AI api which uses the Google-trained model.


## 🪨 Challenges we ran into
As two individuals who have had zero experience in developing mobile applications, it was definitely a long winding road trying to develop this application. Prior experience in full-stack development definitely helped us tremendously but some of the exclusive mobile development concepts put a dent in our productivity. It was a fun and gruesome endeavour trying to tie everything together and create such a high impact app with an intuitive user experience


## 🏅 Accomplishments that we're proud of
We are very proud to have completed development on a mobile application, something that we went in to without having any experience in. We wanted to try something new and our goal seemed to fit a mobile application best, so it only made since to proceed down this road. We really enjoyed utilizing the power of AI and made it into a product that aims to promote good mental health.


## 📚 What we learned
As aforementioned, we learned a lot of mobile development, namely how it differs with that of web development. We also learned a lot about how to package incredibly powerful tools like generative AI and NLP in a product that can easily be used by anyone.


## 🏃 What's next for BeHappy AI
At it's core, BeHappy is in a state we hopped it to be and that is being able to help individuals when they need and additionally go out of its way to promote positive introspection and good mental health. However, there are so many features that we wish to bring to BeHappy to improve user experience. Some of these include, being able to track the notable events that the user shares and summarize it altogether in a end-of-week summary. We hope that this feature reminds user's and allows them to focus on the positive things that occured.

import React, { useEffect, useState } from "react";
import axios from "axios";

import { View, Heading, ScrollView } from "native-base";

import Card from "../components/Card/Card";

const userResponses = [
  {
    type: "📚 Story Time",
    text: "I woke up and stubbed my toe. I hit a car on the way to work. But I hit a new bench PR today.",
    timestamp: "12:12:12 AM",
  },
  {
    type: "📚 Story Time",
    text: "I woke up and stubbed my toe. I hit a car on the way to work. But I hit a new bench PR today.",
    timestamp: "12:12:12 AM",
  },
  {
    type: "📚 Story Time",
    text: "I woke up and stubbed my toe. I hit a car on the way to work. But I hit a new bench PR today.",
    timestamp: "12:12:12 AM",
  },
  {
    type: "📚 Story Time",
    text: "I woke up and stubbed my toe. I hit a car on the way to work. But I hit a new bench PR today.",
    timestamp: "12:12:12 AM",
  },
];

export default Responses = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    axios.get("http://172.23.35.171:8080/api/responses").then((response) => {
      setResponses(response.data);
    });
  }, []);

  return (
    <ScrollView>
      <View alignItems="center"></View>
      {responses.map((response) => {
        return (
          <Card
            header={"Story Time"}
            subheader={response.createdAt}
            body={response.text}
          />
        );
      })}
      {/* {userResponses.map(({ type, text, timestamp }) => {
        return <Card header={type} subheader={timestamp} body={text} />;
      })} */}
    </ScrollView>
  );
};

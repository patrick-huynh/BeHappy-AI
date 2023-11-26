import React from "react";

import { View, Heading, ScrollView } from "native-base";
import { SafeAreaView } from "react-native";

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
  return (
      <ScrollView>
        <View alignItems="center">
        </View>
        {userResponses.map(({ type, text, timestamp }) => {
          return <Card header={type} subheader={timestamp} body={text} />;
        })}
      </ScrollView>
  );
};

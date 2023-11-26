import React, { useEffect, useState } from "react";
import axios from "axios";

import { ScrollView } from "native-base";
import Card from "../components/Card/Card";


export default Responses = () => {
  const [userResponses, setUserResponses] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/responses`).then((response) => {
      setUserResponses(response.data);
    });
  }, []);

  return (
    <ScrollView h="100%">
      {userResponses.map(({createdAt, text}, idx) => {
        return (
          <Card
            key={idx}
            header={"📚 Story Time"}
            subheader={createdAt.substring(0, 10)}
            body={text}
          />
        );
      })}
    </ScrollView>
  );
};

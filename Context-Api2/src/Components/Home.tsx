import React, { useContext } from "react";
import { BioContext } from "../Context/BioContext";

const Home = () => {
  const { userName, age } = useContext(BioContext);

  return (
    <div>
      <h1>Hi, I am {userName}, and my age is {age}.</h1>
    </div>
  );
};

export default Home;

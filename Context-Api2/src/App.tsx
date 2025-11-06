import React from "react";
import Home from "./Components/Home";
import { BioProvider } from "./Context/BioContext";

const App = () => {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
};

export default App;

import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import "./App.css";

const alanKey =
  "63e03acfa4e19c102b0ffa1fd91b4a6d2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") alert("This code was executed");
      },
    });
  }, []);
  return <div className="App">Alan AI news App</div>;
}

export default App;

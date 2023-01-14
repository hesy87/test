import Body from "./components/body";
import React from "react";
import TestContextProvider from "./context/testContextProvider";

function App() {
  return (
    <TestContextProvider>
        <Body/>
    </TestContextProvider>
  );
}

export default App;

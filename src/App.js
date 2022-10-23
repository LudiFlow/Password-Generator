import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <main>
      <GlobalStyle />
      <h2 className="font-color-grey heading">Password Generator</h2>
      <PasswordGenerator />
    </main>
  );
}

export default App;

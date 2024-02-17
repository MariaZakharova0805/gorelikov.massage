import React from "react";
import "./App.css";
import { MainPage } from "../pages/Main";
import { ConfigProviderApp } from "./ConfigProvider";

function App() {
  return (
    <ConfigProviderApp>
      <div className="App">
        <MainPage />
      </div>
    </ConfigProviderApp>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { HomePage } from "./pages/Home";

export const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
    </div>
  );
};

export default App;

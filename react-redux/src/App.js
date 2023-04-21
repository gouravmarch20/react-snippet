import React, { useState } from "react";
import { DatePicker, message } from "antd";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { HomePage } from "./pages/Home";

export const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <div>
      {/* <Navbar /> */}
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" exact element={<div>home</div>} />
        <Route path="/about:id" exact element={<div>about id</div>} />
        <Route path="/me" exact element={<div>me</div>} />
      </Routes>    </div>
  );
};

export default App;

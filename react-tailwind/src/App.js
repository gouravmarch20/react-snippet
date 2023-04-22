import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { HomePage } from "./pages/Home";

export const App = () => {
  const [date, setDate] = useState(null);

  return (
    <div>

      <Routes>

        <Route path="/" exact element={<HomePage />} />
        <Route path="/about:id" exact element={<div>about id</div>} />
        <Route path="/me" exact element={<div>me</div>} />
      </Routes>


    </div>
  );
};

export default App;

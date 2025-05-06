import React from "react";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

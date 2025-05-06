import React from "react";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import Home from "./Components/Home";
import { About } from "./Pages/ChildPages/About";
import { OurTeam } from "./Pages/ChildPages/OurTeam";
import { FcContacts } from "react-icons/fc";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<FcContacts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

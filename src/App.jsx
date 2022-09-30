import React, { Fragment } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Header />}>
          <Route exact index element={<Home />} />
          <Route exact path="/project" element={<Project />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;

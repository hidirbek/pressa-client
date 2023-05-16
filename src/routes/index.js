import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";

const index = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default index;

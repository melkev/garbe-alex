import React, { Fragment } from "react";
import { Intro } from "../components";

const Home = () => {
  return (
    <Fragment>
      <div className=" w-screen h-auto flex flex-col ">
        <Intro />
      </div>
    </Fragment>
  );
};

export default Home;

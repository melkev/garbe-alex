import React, { Fragment } from "react";

import Picture from "../../img/picture.png";

const Intro = () => {
  return (
    <Fragment>
      <div className="w-screen px-16">
        <div className="md:flex justify-around items-center h-screen gap-2">
          <img src={Picture} className="sm:w-full md:w-max " alt="" />
          <div className="w-6/12">
            <h1 className="py-4 text-5xl text-headingColor font-bold tracking-wide">
              Garbe Alexandre
            </h1>
            <p className="leading-6 text-textColor font-thin text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quis nostrum dolorum temporibus alias optio possimus,
              culpa accusantium, amet tempore incidunt quae recusandae soluta
              voluptas corporis animi quibusdam magni asperiores porro nihil,
              itaque harum ullam nesciunt. Magni atque vero praesentium iste
              minus!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;

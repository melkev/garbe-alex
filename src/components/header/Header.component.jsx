import React, { Fragment } from "react";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import Logo from "../../img/logo.png";
const Header = () => {
  return (
    <Fragment>
    <div className="fixed z-50 w-screen  p-6 px-16">
      {/* Desktop & tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            className="w-8 object-cover"
            alt="logo"
            onClick={() => {}}
          />
        </div>
        {/*  */}
        <div className="flex items-center ">
          <ul className="flex items-center justify-center gap-6">
            <li className="text-textColor text-base font-normal cursor-pointer">
              A Propos
            </li>
            <li className="text-textColor text-base font-normal cursor-pointer">
              Mets projets
            </li>
            <li className="text-textColor text-xl cursor-pointer">
              <RiInstagramFill />
            </li>
            <li className="text-textColor text-xl cursor-pointer">
              <RiLinkedinFill />
            </li>
            <button className="text-headingColor border-2 p-2 px-4 rounded-3xl border-headingColor "
            >me contactez</button>
          </ul>
          {/*  */}
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-ful"></div>
    </div>
    <Outlet/>
    </Fragment>
  );
};

export default Header;

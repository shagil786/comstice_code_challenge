import React from "react";
import Image from "next/image";
import logo from "@/public/Images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="fixed w-full flex justify-between px-8 md:px-20 py-4 items-center text-[#111111] z-[2] bg-white">
      <Image src={logo} alt="image" />
      <div className="md:flex gap-10 items-center hidden">
        <a href="">Solutions</a>
        <a href="">Use Cases</a>
        <a href="">About</a>
      </div>
      <button className="border-[2px] border-[#E3E5EA] border-solid rounded-md p-2 flex gap-2 items-center md:flex hidden">
        <span>Request Demo</span>
        <FontAwesomeIcon icon={faArrowRight} className="w-4" />
      </button>
      <FontAwesomeIcon icon={faBars} className="w-4 md:hidden block" />
    </div>
  );
};

export default Nav;

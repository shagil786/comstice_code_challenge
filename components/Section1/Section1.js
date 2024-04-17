import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import "@/styles/global.css";
import Image from "next/image";
import heroImage from "@/public/Images/heroImage.png";
import download from "@/public/Images/download.svg";
import bolt from "@/public/Images/lightning-bolt.svg";
import grid from "@/public/Images/sm-view-grid-add.svg";

const Section1 = () => {
  let properties = [
    {
      imageUrl: download,
      title: "Lower Cost of Ownership",
      subtitle:
        "No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.",
    },
    {
      imageUrl: bolt,
      title: "Higher Agent Occupancy",
      subtitle:
        "Real-time and historical agent scorecards to improve agent occupancy.",
    },
    {
      imageUrl: grid,
      title: "First Contact Resolution",
      subtitle:
        "MImInize rebeat callers. handle more customers, convert more business.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-16 md:p-28 p-8 h-full w-full relative top-[50px]">
        <div className="flex md:flex-row flex-col">
          <div className="w-full">
            <div className="flex flex-col gap-6 w-full md:w-[60%] md:items-start items-end">
              <h1 className="head_color text-2xl md:text-6xl font-bold text-center md:text-left">
                Avaya Call Reporting Reinvented
              </h1>
              <div className="w-full ml-0 md:ml-10 md:hidden block">
                <Image src={heroImage} alt="hero-image" />
              </div>
              <p className="text-xs md:text-[15px] font-light leading-5">
                Step into the future of call center analytics with Comstice
                Avaya Call Reporting solution. Say goodbye to the need for an
                Avaya AES server and extra licenses for every agent, and say
                hello to a world of insightful analytics, cradle-to-grave
                reports, and automated agent and team reports by email.
              </p>
              <button className="border-[2px] border-[#E3E5EA] border-solid rounded-md p-4 flex gap-2 w-fit bg-[#4C3DFF] text-white items-center">
                <span>Request Demo</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-4" />
              </button>
            </div>
          </div>
          <div className="w-full ml-10 md:block hidden">
            <Image src={heroImage} alt="hero-image" className="z-1" />
          </div>
        </div>
        <div className="md:flex gap-16 flex-col md:flex-row hidden">
          {properties.map((each, index) => (
            <div key={index} className="flex">
              <div className="bg-[#EBEDFE] w-12 h-8 rounded-full flex items-center justify-center mt-2">
                <Image src={each.imageUrl} alt="image" className="z-1" />
              </div>
              <div className="pl-4 flex flex-col gap-2">
                <p className="text-xl font-semibold">{each?.title}</p>
                <p className="text-xs font-light">{each?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden gap-16 flex-col md:flex-row flex bg-[#F3F7FA] p-8">
        {properties.map((each, index) => (
          <div key={index} className="flex">
            <div className="bg-[#EBEDFE] w-12 h-8 rounded-full flex items-center justify-center mt-2">
              <Image src={each.imageUrl} alt="image" />
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <p className="text-xl font-semibold">{each?.title}</p>
              <p className="text-xs font-light">{each?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section1;

import Image from "next/image";
import React from "react";
import circleTick from "@/public/Images/check-circle.svg";
import graphImage from "@/public/Images/graph.png";

const Section2 = () => {
  let properties = [
    {
      imageUrl: circleTick,
      title: "No Avava AES Server Needed",
      subtitle:
        "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed.",
    },
    {
      imageUrl: circleTick,
      title: "Scheduled Reports By E-Mail",
      subtitle:
        "Daily insights by email for team agents and the queues based on goals and thresholds",
    },
    {
      imageUrl: circleTick,
      title: "Avava ECH Cradle to Grave Reports",
      subtitle:
        "Create cradle to grave reports and visual customer journey for each call using Avava CMS External Call Historv data.",
    },
  ];
  return (
    <div className="flex w-full md:bg-[#F3F7FA] bg-white p-8 md:p-20 md:flex-row flex-col">
      <Image
        className="w-full h-full p-20 md:block hidden"
        src={graphImage}
        alt="graph"
      />
      <div className="w-full flex flex-col gap-4 px-0 md:px-10">
        <h1 className="head_color text-2xl md:text-6xl font-bold text-center md:text-left">
          Measure, Analyze improve
        </h1>
        <p className="text-xs md:text-[15px] font-light leading-5">
          Visualise your historical performance to understand customer behavior,
          customer patience and the demand for customer service using out of the
          box analvtics features and performance indicators.
        </p>
        <Image
          className="w-full h-[50vh] md:hidden block"
          src={graphImage}
          alt="graph"
        />
        <div className="flex gap-10 flex-col flex py-4">
          {properties.map((each, index) => (
            <div key={index} className="flex">
              <div className="rounded-full flex items-start justify-center">
                <Image src={each.imageUrl} alt="image" />
              </div>
              <div className="pl-4 flex flex-col gap-2 w-full md:w-[60%]">
                <p className="text-xl font-semibold">{each?.title}</p>
                <p className="text-xs font-light">{each?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;

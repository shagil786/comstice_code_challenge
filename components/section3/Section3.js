import React from "react";
import firstIcon from "@/public/Images/adjustments.svg";
import secondIcon from "@/public/Images/chart-bar.svg";
import thirdIcon from "@/public/Images/chart-pie.svg";
import Image from "next/image";

const Section3 = () => {
  let properties = [
    {
      imageUrl: firstIcon,
      title: "Download Data Sheet",
      subtitle: "chick here to download the data sheet",
    },
    {
      imageUrl: secondIcon,
      title: "Access Sample Reports",
      subtitle: "View sample reports and scorecards",
    },
    {
      imageUrl: thirdIcon,
      title: "High-Level Design Guide",
      subtitle: "Solution topology, integrations and project plan",
    },
  ];
  return (
    <div className="flex w-full p-16 justify-between md:flex-row flex-col">
      {properties.map((each, index) => (
        <div key={index} className="flex flex-col w-full items-center gap-6">
          <div className="flex w-full items-start justify-start relative ml-2">
            <span className="bg-[#2AD590] absolute w-8 h-8 rounded-full z-[1] ml-4 mt-4"></span>
            <Image src={each.imageUrl} alt="image" className="z-[2]" />
          </div>
          <div className="pl-4 flex flex-col gap-3 w-full md:w-[100%] justify-center">
            <p className="text-xl font-semibold">{each?.title}</p>
            <p className="text-xs font-light">{each?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section3;

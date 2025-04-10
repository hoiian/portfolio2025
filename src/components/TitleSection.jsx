import React from "react";

const TitleSection = ({ title, description, icon }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      {/* Left 2/3 - Title + Description */}
      <div className="md:col-span-2 space-y-3">
        <h2 className="text-5xl md:text-6xl">{title}</h2>
        <p className=" text-zinc-300">{description}</p>
      </div>
      {/* Right 1/3 - Icon */}
      <div className="flex justify-end">
        {" "}
        <img
          src={`/images/sectionIcon/icon_${icon}.svg`}
          alt={`${icon} icon`}
        />{" "}
      </div>
    </div>
  );
};

export default TitleSection;

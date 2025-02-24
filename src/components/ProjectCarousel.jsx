import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Works Data
const works = [
  {
    title: "MetaPush",
    image: "src/assets/images/placeholder-image.jpg",
    link: "https://whoiian.com/portfolio-item/metapush/",
    description: "Web3 messages aggregated tool",
    background: "bg-[linear-gradient(142deg,#9CFFF5_0%,#01AFFF_100%)]",
  },
  {
    title: "GaaS",
    image: "src/assets/images/placeholder-image.jpg",
    link: "https://whoiian.com/portfolio-item/gaas/",
    description: "Wallet and Market system for GameFi",
    background: "bg-[linear-gradient(142deg,#A475F5_0%,#2F34C1_100%)]",
  },
  {
    title: "Event Center",
    image: "src/assets/images/placeholder-image.jpg",
    link: "https://whoiian.com/portfolio-item/naraka/",
    description: "Aggregation of in-game events",
    background: "bg-[linear-gradient(142deg,#FFCC82_0%,#BF2E31_100%)]",
  },
  {
    title: "NFT Marketplace",
    image: "src/assets/images/placeholder-image.jpg",
    link: "https://whoiian.com/portfolio-item/nft-marketplace/",
    description: "UI Redesign",
    background: "bg-[linear-gradient(142deg,#F4C1D3_0%,#7B61FF_100%)]",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNext = () => {
    if (currentIndex < works.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate transform and padding dynamically
  const translateValue =
    windowWidth > 1360
      ? `-${(currentIndex * 1360) / 4}px`
      : `-${(currentIndex * 100) / 4}%`;

  const paddingValue =
    windowWidth > 1360 ? `0 calc((100vw - 1360px) / 2)` : `0`;

  return (
    <div className="md:w-screen w-full overflow-hidden">
      {/* Carousel */}
      <div
        className="flex flex-col md:flex-row transition-transform duration-300 gap-6"
        style={{
          transform: `translateX(${translateValue})`,
          padding: paddingValue,
        }}
      >
        {works.map((project, index) => (
          <a
            href={project.link}
            key={index}
            // className={`group block relative overflow-hidden transform transition hover:rotate-1 max-w-[430px] w-full`}
            className={`md:flex-shrink-0 md:w-[30%]`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${project.background} rounded-3xl h-[282px]`}>
              {/* Optional Image Placeholder */}
              {/* <img src={project.image} alt={project.title} className="w-full object-cover group-hover:opacity-80 transition" /> */}
            </div>
            <div className="p-4 text-white">
              <h3 className="text-2xl italic">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex justify-center space-x-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={24} strokeWidth={1} className="text-white" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= works.length - 3}
          className={`p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition ${
            currentIndex >= works.length - 3
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRight size={24} strokeWidth={1} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

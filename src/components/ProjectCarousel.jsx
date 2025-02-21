import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { title: "Project 1", description: "Description for Project 1" },
  { title: "Project 2", description: "Description for Project 2" },
  { title: "Project 3", description: "Description for Project 3" },
  { title: "Project 4", description: "Description for Project 4" },
  { title: "Project 5", description: "Description for Project 5" },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-[1360px] mx-auto relative">
      {/* Arrow Buttons */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeft size={24} strokeWidth={1} className="text-white" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex >= projects.length - 3}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 ${
          currentIndex >= projects.length - 3 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronRight size={24} strokeWidth={1} className="text-white" />
      </button>

      {/* Scrollable Container */}
      <div className="overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 p-4"
            >
              <div className="bg-zinc-800 rounded-lg p-6 h-full text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;

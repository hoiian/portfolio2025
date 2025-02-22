import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { title: "Project 1", description: "Description for Project 1" },
  { title: "Project 2", description: "Description for Project 2" },
  { title: "Project 3", description: "Description for Project 3" },
  { title: "Project 4", description: "Description for Project 4" },
  // { title: "Project 5", description: "Description for Project 5" },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle moving right
  const handleNext = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle moving left
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="overflow-hidden w-screen mx-auto1 relative">
      {/* Project Cards */}
      <div className="mt-10">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (1360 / 3)}px)`,
            padding: `0 calc((100vw - 1360px) / 2)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3"
            >
              <div className="bg-zinc-800 rounded-lg p-6 h-full text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons Below Carousel */}
      <div className="flex justify-center space-x-4 mt-6">
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
          disabled={currentIndex >= projects.length - 3}
          className={`p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition ${
            currentIndex >= projects.length - 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight size={24} strokeWidth={1} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

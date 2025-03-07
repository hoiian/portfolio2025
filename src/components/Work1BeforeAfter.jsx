import React, { useState } from "react";

export default function Work1BeforeAfter() {
  const [activeTab, setActiveTab] = useState("after");

  return (
    <div className="flex flex-col items-center text-center relative my-52 h-screen max-w-5xl">
      {/* Floating Glow Effect */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1095px] h-[421px] rounded-[1095px] bg-white/10 blur-[150px] z-[-1]"></div>
      {/* Tabs */}
      <div className="flex space-x-6 text-4xl mb-6 font-heading font-bold">
        <button
          onClick={() => setActiveTab("before")}
          className={`italic transition ${
            activeTab === "before" ? "text-white underline" : "text-zinc-500"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={`italic transition ${
            activeTab === "after" ? "text-white underline" : "text-zinc-500"
          }`}
        >
          After
        </button>
      </div>

      {/* Section Title */}
      <h3 className="text-xl italic text-zinc-400 mb-6">
        Expanding the Studio Experience
      </h3>

      {/* Before / After Content */}
      <div className="relative w-full max-w-6xl">
        {/* Before */}
        <div
          className={`absolute inset-0 w-full transition-opacity duration-500 ${
            activeTab === "before" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center items-center space-x-12">
            <div className="w-[400px]">
              <img src="/images/placeholder-image.jpg" alt="Before Studio" />
              <h3 className="text-zinc-50 mt-2 text-3xl">Studio</h3>
            </div>
            <div className="w-[400px]">
              <img src="/images/placeholder-image.jpg" alt="Before Editor" />
              <h3 className="text-zinc-50 mt-2 text-3xl">Video Editor</h3>
            </div>
          </div>
        </div>

        {/* After */}
        <div
          className={`absolute inset-0 w-full transition-opacity duration-500 ${
            activeTab === "after" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center items-center space-x-12">
            <div className="w-[400px]">
              <img
                src="/images/placeholder-image.jpg"
                alt="Vtuber Playground"
              />
              <h3 className="text-zinc-50 mt-2 text-3xl">Vtuber Playground</h3>
            </div>
            <div className="w-[400px]">
              <img
                src="/images/placeholder-image.jpg"
                alt="AI Video Generator"
              />
              <h3 className="text-zinc-50 mt-2 text-3xl">AI Video Generator</h3>
            </div>
            <div className="w-[400px]">
              <img src="/images/placeholder-image.jpg" alt="Video Editor" />
              <h3 className="text-zinc-50 mt-2 text-3xl">Video Editor</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Work1BeforeAfter() {
  const [activeTab, setActiveTab] = useState("after");

  return (
    <div className="flex flex-col items-center text-center relative my-52 h-screen">
      {/* Floating Glow Effect */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1095px] h-[421px] rounded-[1095px] bg-white/10 blur-[150px] z-[-1]"></div>
      {/* Tabs */}
      <div className="flex space-x-6 text-4xl mb-6 font-heading font-bold">
        <button
          onClick={() => setActiveTab("before")}
          className={`italic transition hover:text-zinc-300 ${
            activeTab === "before" ? "text-white underline" : "text-zinc-500"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={`italic transition hover:text-zinc-300 ${
            activeTab === "after" ? "text-white underline" : "text-zinc-500"
          }`}
        >
          After
        </button>
      </div>

      {/* Section Title */}
      <h3
        className={`text-xl italic text-zinc-300 mb-6 transition-opacity duration-500 ${
          activeTab === "before" ? "opacity-10" : "opacity-100"
        }`}
      >
        Expanding the Studio Experience
      </h3>

      {/* Before / After Content */}
      <div>
        <div
          className={`max-w-7xl mx-auto flex flex-col justify-center items-center transition-opacity duration-150 ${
            activeTab === "before" ? "opacity-10" : "opacity-100"
          }`}
        >
          <img
            src="/images/work1/background/Home.png"
            alt="Studio"
            className="w-1/3 rounded-lg"
          />
          <img
            src="/images/work1/background/stuctureLine.png"
            alt="Studio"
            className="w-[858px] mt-[-202px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1:  */}
          <div
            className={`flex flex-col transition-opacity duration-500 ${
              activeTab === "before" ? "opacity-10" : "opacity-100"
            }`}
          >
            <video autoPlay loop muted playsInline className="rounded-lg mb-4">
              <source
                src="/videos/work1/demo-FullStudio.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl">Video Editor</h3>
            <p className="text-zinc-300 mt-2">
              Record, edit, and refine avatar-driven content seamlessly.
            </p>
          </div>

          {/* Card 2:  */}
          <div className="flex flex-col">
            <video autoPlay loop muted playsInline className="rounded-lg mb-4">
              <source
                src="/videos/work1/demo-VtuberPlayground.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl">Vtuber Playground</h3>
            <p className="text-zinc-300 mt-2">
              Real-time AI avatar streaming with enhanced interactivity.
            </p>
          </div>

          {/* Card 3:  */}
          <div
            className={`flex flex-col transition-opacity duration-500 ${
              activeTab === "before" ? "opacity-10" : "opacity-100"
            }`}
          >
            <video autoPlay loop muted playsInline className="rounded-lg mb-4">
              <source
                src="/videos/work1/demo-PromptToVideo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl">AI Video Generator</h3>
            <p className="text-zinc-300 mt-2">
              Create videos instantly from text prompts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

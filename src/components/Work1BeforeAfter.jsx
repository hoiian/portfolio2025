import React, { useState } from "react";

export default function Work1BeforeAfter() {
  const [activeTab, setActiveTab] = useState("before");

  return (
    <div className="flex flex-col items-center text-center relative  pb-16 px-4 w-full mx-auto min-h-screen">
      {/* Floating Glow Effect */}
      {/* <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[1095px] h-[421px] rounded-[1095px] bg-white bg-opacity-[0.05] blur-[150px] z-[-1]"></div> */}
      {/* Tabs */}
      <div className="md:static sticky top-8 z-50 md:z-0 bg-zinc-950/60 backdrop-blur-lg flex justify-center space-x-6 text-4xl mb-16 font-heading w-full h-28 border-b border-zinc-800 item-center">
        <button
          onClick={() => setActiveTab("before")}
          className={` transition hover:text-zinc-300 w-sm p-5 ${
            activeTab === "before"
              ? "text-white border-b-2 font-bold1"
              : "text-zinc-600"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={` transition hover:text-zinc-300 w-sm p-5 ${
            activeTab === "after"
              ? "text-white border-b-2 font-bold1"
              : "text-zinc-600"
          }`}
        >
          After
        </button>
      </div>

      {/* Section Title */}
      {/* <h3
        className={`text-xl italic text-zinc-300 mb-6 transition-opacity duration-500 ${
          activeTab === "before" ? "opacity-10" : "opacity-100"
        }`}
      >
        Expanding the Studio Experience
      </h3> */}

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
            className="md:w-1/3 w-full rounded-lg"
          />
          <h3 className="md:hidden block mb-12 text-3xl hover:text-zinc-400">
            <a href="#vtuber">Studio Homepage</a>
          </h3>
          <img
            src="/images/work1/background/stuctureLine.png"
            alt="Studio"
            className="w-[858px] mt-[-202px] hidden md:block"
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
                src="/videos/work1/videoeditor/demo-videoeditor-fromhome.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl hover:text-zinc-400">
              <a href="#editor">Video Editor</a>
            </h3>
            <p className="text-zinc-300 mt-2">
              Record, edit, and refine avatar-driven content seamlessly.
            </p>
          </div>

          {/* Card 2:  */}
          <div className="flex flex-col">
            <video
              key={activeTab} // Forces re-render when activeTab changes
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg mb-4 h-full"
            >
              <source
                src={
                  activeTab === "before"
                    ? "/videos/work1/demo-VtuberPlayground-before.mp4"
                    : "/videos/work1/demo-VtuberPlayground.mp4"
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl hover:text-zinc-400">
              <a href="#vtuber">Vtuber Playground</a>
            </h3>
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
                src="/videos/work1/prompt/demo-prompt-diag.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl hover:text-zinc-400">
              <a href="#prompt">AI Video Generator</a>
            </h3>
            <p className="text-zinc-300 mt-2">
              Create videos instantly from text prompts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

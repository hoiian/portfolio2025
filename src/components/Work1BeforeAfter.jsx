import React, { useState } from "react";

export default function Work1BeforeAfter() {
  const [activeTab, setActiveTab] = useState("after");

  return (
    <div className="flex flex-col items-center text-center mt-52">
      {/* Floating Glow Effect */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1095px] h-[421px] rounded-[1095px] bg-white/20 blur-[150px] z-[-1]"></div>
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

      {/* Image Container */}
      <div className="relative w-full max-w-5xl">
        <img
          src="/before.png"
          alt="Before"
          className={`absolute inset-0 w-full transition-opacity duration-500 ${
            activeTab === "before" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="/after.png"
          alt="After"
          className={`absolute inset-0 w-full transition-opacity duration-500 ${
            activeTab === "after" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

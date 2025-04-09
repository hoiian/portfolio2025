import React from "react";
import { Link } from "react-router-dom"; // Ensure you have React Router set up

export default function Work2() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <section className="min-h-screen max-w-6xl mx-auto flex flex-row items-center justify-center px-4">
        {/* Floating Glow Effect */}
        <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-full md:max-w-[885px] h-[600px] rounded-[1095px] bg-white/20 blur-[150px] z-[-1]"></div>

        <div className="md:max-w-3xl w-full mx-auto mb-16">
          <span>Hologram, 2024</span>
          <h1 className="mt-3 text-4xl">NFT Minting Platform</h1>
        </div>
        <div>
          {" "}
          <img src="/images/placeholder-image.jpg" alt="" />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto py-24 px-4">
        <h2 className="text-3xl">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-white">
          <div className="md:col-span-2">
            <p className="text-zinc-400 mt-2">
              A 10K NFT minting project featuring 16 unique rabbit tribes.
              Designed phased user flows for whitelist checks, tribe selection,
              NFT minting, and post-mint customization. Integrated social tasks
              for community engagement via Discord and Twitter, creating an
              intuitive and engaging user experience.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 md:col-span-2">
            <div className="flex flex-col items-start">
              <span className="flex items-center gap-2 text-lg font-semibold">
                📅 Duration
              </span>
              <span className="text-zinc-400 ml-6">2 months</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="flex items-center gap-2 text-lg font-semibold">
                🏷 Role
              </span>
              <span className="text-zinc-400 ml-6">UXUI Designer</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="flex items-center gap-2 text-lg font-semibold">
                🔧 Tool
              </span>
              <span className="text-zinc-400 ml-6">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import TitleSection from "../components/TitleSection";
import SmartImage from "../components/SmartImage";
import { FileText } from "lucide-react";
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

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>
      {/* Background Section */}
      <div className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3">
        <TitleSection
          title="Background"
          description="A PWA developed in collaboration with the MegaETH team, launching a 10K NFT fluffle (rabbit) collection featuring diverse art variations.
Our art team designed and created the fluffle assets, while I handled the UI/UX design of the PWA and collaborated closely with engineers for implementation."
          icon="bg"
        />
        <div className="max-w-6xl mx-auto border-t border-zinc-800 my-16"></div>
        <h2 className="text-4xl">What is 10K NFT Project?</h2>

        <h2 className="text-3xl mt-14">Key Features</h2>
        <p className="text-zinc-300 max-w-3xl mt-3">
          Excitement Factor: Blind-box style minting drives anticipation and
          engagement. Simplified Process: One-click minting with Gas fee payment
          for faster transaction
        </p>

        <h2 className="text-3xl mt-14">Market Success Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-5">
          {/* Card 1:   */}
          <div className="flex flex-col p-6 gap-4 border border-zinc-700 rounded-2xl">
            <div className="flex flex-row items-center gap-3">
              <SmartImage
                src="/images/work2/background/BAYC-logo.png"
                alt="BAYC Logo"
                className="rounded-xl overflow-hidden w-[60px]"
              />
              <h3 className="">Bored Ape Yacht Club (BAYC)</h3>
            </div>
            <SmartImage
              src="/images/work2/background/BAYC-ex.png"
              alt="BAYC Example"
              className="rounded-xl overflow-hidden"
            />
          </div>

          {/* Card 2:   */}
          <div className="flex flex-col p-6 gap-4 border border-zinc-700 rounded-2xl">
            <div className="flex flex-row items-center gap-3">
              <SmartImage
                src="/images/work2/background/CryptoPunks-logo.png"
                alt="CryptoPunks Logo"
                className="rounded-xl overflow-hidden w-[60px]"
              />
              <h3 className="">CryptoPunks</h3>
            </div>
            <SmartImage
              src="/images/work2/background/CryptoPunks-ex.png"
              alt="CryptoPunks Example"
              className="rounded-xl overflow-hidden"
            />
          </div>
          {/* Card 3:   */}
          <div className="flex flex-col p-6 gap-4 border border-zinc-700 rounded-2xl">
            <div className="flex flex-row items-center gap-3">
              <SmartImage
                src="/images/work2/background/coolcats-logo.png"
                alt="Cool Cats Logo"
                className="rounded-xl overflow-hidden w-[60px]"
              />
              <h3 className="">Cool Cats</h3>
            </div>
            <SmartImage
              src="/images/work2/background/coolcats-ex.png"
              alt="Cool Cats Example"
              className="rounded-xl overflow-hidden"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-zinc-800 my-16"></div>
        <h2 className="text-4xl">Our NFTs</h2>
        <p className="text-zinc-300 max-w-3xl mt-3">..</p>
        <SmartImage
          src="/images/work2/background/outNFTs.png"
          alt="Our NFTs"
          className=""
        />
      </div>

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>
      {/* Discovery Section */}
      <div className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3">
        <TitleSection
          title="Discovery  Requirements"
          description=".."
          icon="magnifier"
        />
      </div>

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>
      {/* Flow Section */}
      <div className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3">
        <TitleSection title="Flow" description="bbbbb..." icon="flow" />

        <SmartImage src="/images/work2/flow.png" alt="Flow" className="" />
      </div>

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>
      {/* Wireframe Section */}
      <div className="w-full mx-auto py-36 md:px-5 px-3">
        <div className="max-w-6xl mx-auto ">
          <TitleSection
            title="Wireframe"
            description="bbbbb..."
            icon="wireframe"
          />
        </div>
        <SmartImage
          src="/images/work2/wireframe.png"
          alt="wireframe"
          className="h-full"
        />
      </div>

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>
      {/* High-Fidelity Design Section */}
      <div className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3">
        <TitleSection
          title="High-Fidelity Design"
          description="bbbbb..."
          icon="design"
        />

        <h2 className="text-4xl mt-14">megaETH branding</h2>
        <p className="text-zinc-300 max-w-3xl mt-3">..</p>

        <SmartImage
          src="/images/work2/design/megaETHbranding.png"
          alt="megaETHbranding"
          className="border border-zinc-700 rounded-2xl"
        />
      </div>
    </div>
  );
}

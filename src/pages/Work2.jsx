import React from "react";
import TitleSection from "../components/TitleSection";
import SmartImage from "../components/SmartImage";
import SmartVideo from "../components/SmartVideo";
import BackToTop from "../components/BackToTop";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom"; // Ensure you have React Router set up

export default function Work2() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <section className="min-h-screen max-w-6xl mx-auto flex flex-row items-center justify-center px-4">
        {/* Floating Glow Effect */}
        <div className="absolute top-[100px] left-[100px] -translate-x-1/2 w-full md:max-w-[885px] h-[600px] rounded-[1095px] bg-[#32B288]/10 blur-[150px] z-[-1]"></div>

        <div className="md:max-w-3xl w-full mx-auto mb-16">
          <span>Hologram, 2024</span>
          <h1 className="mt-3 text-4xl">NFT Minting Platform</h1>
        </div>
        <div>
          {" "}
          <SmartImage src="/images/work2/heroPreview.png" alt="" />
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
        <div className="w-full md:max-w-6xl mx-auto ">
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
          alt="megaETH branding"
          className="border border-zinc-700 rounded-2xl"
        />

        <h2 className="text-4xl mt-14">Related UI reference</h2>
        <p className="text-zinc-300 max-w-3xl mt-3">..</p>

        <SmartImage
          src="/images/work2/design/uiRef.png"
          alt="UI reference"
          className="border border-zinc-700 rounded-2xl"
        />

        <h2 className="text-5xl mt-24 mb-4">UI kits</h2>

        <SmartImage src="/images/work2/design/UIkits.png" alt="UI Kits" />
        <h2 className="font- text-xl mt-24 mb-4 uppercase">Page</h2>
        <SmartImage
          src="/images/work2/design/UIKitspage.png"
          alt="UI Kits"
          className="max-w-xl mx-auto"
        />
      </div>

      {/* Divider */}
      <div className="w-full lg:border-t border-zinc-800"></div>
      {/* Key Features Section */}
      <div className="w-full mx-auto py-36 md:px-5 px-3">
        <div className="w-full md:max-w-6xl mx-auto ">
          <TitleSection
            title="Key Features"
            description="bbbbb..."
            icon="highlight"
          />
        </div>

        <div className="md:max-w-2xl w-full space-y-3 text-center mx-auto">
          <span className="uppercase text-2xl">1</span>
          <h2 className="text-5xl md:text-6xl">
            Sign up & Whitelist Eligibility Check
          </h2>
          <p className=" text-zinc-300">====</p>
        </div>

        <SmartImage
          src="/images/work2/keyfeature/signupflow.png"
          alt="Flow"
          className=""
        />
        <div className="w-full md:max-w-6xl mx-auto ">
          <h2 className="font- text-xl mt-24 mb-4">1. Disclaimer</h2>
          <div className="mt-4 flex md:flex-row flex-col md:gap-12 gap-0 items-center p-0 md:pr-10 overflow-hidden rounded-3xl border border-zinc-700">
            {/* Left */}
            <div className="flex flex-row w-full mx-auto p-10 gap-8 items-center justify-stretch">
              <SmartVideo
                src="/videos/work2/disclaimer1.mp4"
                className="rounded-3xl overflow-hidden flex-1"
              />
              <div className="flex-1">
                <h4 className="text-3xl mt-4 ">Not allow</h4>
                <p className="mt-3">
                  If user lives in the US, they would not allow to use the app.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="md:border-l md:border-t-0 border-t border-zinc-700 flex flex-row w-full mx-auto p-10 gap-8 items-center justify-stretch">
              <SmartVideo
                src="/videos/work2/disclaimer2.mp4"
                className="rounded-3xl overflow-hidden flex-1"
              />
              <div className="flex-1">
                <h4 className="text-3xl mt-4">Allow</h4>
                <p className="mt-3">
                  If user lblblbbl abalbalba lbalbalblblablabl.
                </p>
              </div>
            </div>
          </div>

          <h2 className="font- text-xl mt-24 mb-4">2. Check eligibility</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-center text-sm text-white border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="w-1/3 py-4"></th>
                  <th className="w-1/3 py-4 font-semibold">whitelisted</th>
                  <th className="w-1/3 py-4 font-semibold">not whitelisted</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 font-semibold">
                    <p className="text-white">check by input addr.</p>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <SmartVideo
                      src="/videos/work2/disclaimer2.mp4"
                      className="rounded-2xl overflow-hidden max-w-[160px] inline-block"
                    />
                  </td>
                  <td className="py-6 px-4 text-center">
                    <SmartVideo
                      src="/videos/work2/disclaimer2.mp4"
                      className="rounded-2xl overflow-hidden max-w-[160px] inline-block"
                    />
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="py-6 px-4 font-semibold">
                    <p className="text-white">sign in w/ ur whitelist addr.</p>
                  </td>
                  <td className="py-6 text-center">
                    <SmartVideo
                      src="/videos/work2/disclaimer2.mp4"
                      className="rounded-2xl overflow-hidden max-w-[160px] inline-block"
                    />
                  </td>
                  <td className="py-6 text-center">
                    <SmartVideo
                      src="/videos/work2/disclaimer2.mp4"
                      className="rounded-2xl overflow-hidden max-w-[160px] inline-block"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4 text-white">
            {/* Left - Image */}
            <div className="w-full md:w-auto">
              <SmartVideo
                src="/videos/work2/disclaimer2.mp4"
                className="rounded-2xl overflow-hidden max-w-[260px] inline-block"
              />
            </div>

            {/* Right - Text */}
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl mb-2">2.</p>
              <h2 className="text-4xl md:text-5xl font-heading">Minting</h2>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

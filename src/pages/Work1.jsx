import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Work1() {
  const [activeSection, setActiveSection] = useState("background");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["background", "timeline", "features"];
      let currentSection = "background";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col mx-auto relative">
      {/* Fixed Right Navigation */}
      <nav className="fixed top-8 right-8 bg-zinc-900 bg-opacity-10 p-4 rounded-xl shadow-lg w-48">
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#background"
              className={`block ${
                activeSection === "background" ? "text-white" : "text-zinc-500"
              } hover:text-zinc-300`}
            >
              background
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className={`block ${
                activeSection === "timeline" ? "text-white" : "text-zinc-500"
              } hover:text-zinc-300`}
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={`block ${
                activeSection === "features" ? "text-white" : "text-zinc-500"
              } hover:text-zinc-300`}
            >
              Key Features
            </a>
          </li>
        </ul>
      </nav>
      {/* Header with Back Button */}
      <header className="p-6 fixed top-2 left-2">
        <Link to="/" className="hover:underline">
          ← Back
        </Link>
      </header>
      {/* Work1 Content */}
      <div className="flex-1 p-8 text-center max-w-4xl mx-auto">
        {/* Floating Glow Effect */}
        {/* <div className="absolute top-1/2 left-1/2  w-[1100px] h-[500px] bg-white opacity-20 blur-[150px] rounded-full"></div> */}
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1095px] h-[421px] rounded-[1095px] bg-white/20 blur-[150px] z-[-1]"></div>

        <div className="max-w-3xl mx-auto mt-56 mb-16 ">
          <span>Hologram, 2024</span>
          <h1 className="italic text-4xl">
            Studio: Redefining AI-Powered Video Creation
          </h1>
        </div>
        <video autoPlay loop muted playsInline className="rounded-2xl">
          <source src="/videos/work1/demo-FullStudio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto py-24">
        <div>
          <h2 className="text-3xl italic">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-white">
            <div className="md:col-span-2">
              <p className="text-zinc-400 mt-2">
                Studio is an all-in-one content creation suite, enabling
                VTubers, AI creators, and digital influencers to stream, record,
                and edit videos seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 md:col-span-2">
              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  📅 Duration
                </span>
                <span className="text-zinc-400">2 months</span>
              </div>

              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  🏷 Role
                </span>
                <span className="text-zinc-400">UXUI Designer</span>
              </div>

              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  🔧 Tool
                </span>
                <span className="text-zinc-400">Figma</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl italic mb-4">Timeline</h2>
          <img
            src="/images/work1/timeline.png"
            alt="Studio Timeline"
            className="mb-1 w-full"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* Background Section */}
      <section id="background" className="max-w-6xl mx-auto py-24">
        <h2 className="text-[11vw] md:text-[184px] whitespace-nowrap font-extrabold italic text-center">
          Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-200">
          {/* <!-- 左側空間 (1/3) --> */}
          <div className="hidden md:block"></div>

          {/* <!-- 右側文字 (2/3) --> */}
          <div className="md:col-span-2 text-2xl leading-relaxed max-w-3xl">
            <p className="mt-4">
              Video creation has always been a top demand for Hologram. Our goal
              is to transform HoloStudio into a complete content creation
              platform for users. Today’s creators rely on their digital
              identities—avatars, PFPs, and IPs—and we're focusing on talking
              videos, a format popular on TikTok, YouTube, and Twitch. Hologram
              uniquely lets users have their personalized AI avatars speak on
              their behalf.
            </p>
            <p className="mt-6">
              The current studio is a basic canvas for one-time short clips
              (with face tracking, background change, and picture-in-picture
              mode), but it lacks the full editing experience—combining multiple
              tracks and advanced effects—that creators need. We envision a
              studio modeled after tools like TikTok’s editor and CapCut,
              offering seamless recording, editing, and interaction all in one.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl mt-10 mb-4">
            Before & After: Expanding the Studio Experience
          </h3>

          <img src="/images/work1/before.png" />
          <p>
            🔹 Before HoloStudio was a single-purpose Vtuber Playground,
            allowing users to create basic avatar-driven livestreams with
            limited editing features.
          </p>

          <img src="/images/work1/after.png" />
          <p>
            🔹 After We've evolved it into a comprehensive content creation
            suite with three core modes: Vtuber Playground – Real-time AI avatar
            streaming with enhanced interactivity. Video Editor – Record, edit,
            and refine avatar-driven content seamlessly. AI Video Generator –
            Create videos instantly from text prompts.
          </p>
        </div>
      </section>
      {/* Vtuber Playground */}
      <section id="Vtuber" className="p-8 border-t border-zinc-800">
        <div className="flex flex-row items-center justify-between text-5xl italic">
          <h2 className="">Vtuber Playground</h2>
          <h2>01</h2>
        </div>
        <div className="flex flex-row items-center justify-between">
          <video autoPlay loop muted playsInline>
            <source
              src="/videos/work1/demo-VtuberPlayground-before.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted playsInline>
            <source
              src="/videos/work1/demo-VtuberPlayground.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-row items-center justify-between text-4xl mt-10">
          <h2 className="italic">Problem</h2>
          <h2>🔍</h2>
        </div>
      </section>
      {/* Timeline Section */}
      <section id="timeline" className="p-8 border-t border-zinc-800">
        <h2 className="text-5xl italic">Timeline</h2>
        <p className="mt-4">
          Key milestones in the development and launch of Studio.
        </p>
      </section>
      {/* Key Features Section */}
      <section id="features" className="p-8 border-t border-zinc-800">
        <h2 className="text-5xl italic">Key Features</h2>
        <p className="mt-4">
          What makes Studio unique and how it empowers creators.
        </p>
      </section>
      {/* Next Project Link */}
      <div className="p-6 text-center">
        <Link to="/work2" className="italic hover:underline text-4xl">
          Next Project →
        </Link>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Work1() {
  const [activeSection, setActiveSection] = useState("context");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["context", "timeline", "features"];
      let currentSection = "context";
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
    <div className="min-h-screen text-white flex flex-col max-w-4xl mx-auto relative">
      {/* Fixed Right Navigation */}
      <nav className="fixed top-8 right-8 bg-zinc-900 bg-opacity-10 p-4 rounded-xl shadow-lg w-48">
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#context" className={`block ${activeSection === "context" ? "text-white" : "text-zinc-500"} hover:text-zinc-300`}>
              Context
            </a>
          </li>
          <li>
            <a href="#timeline" className={`block ${activeSection === "timeline" ? "text-white" : "text-zinc-500"} hover:text-zinc-300`}>
              Timeline
            </a>
          </li>
          <li>
            <a href="#features" className={`block ${activeSection === "features" ? "text-white" : "text-zinc-500"} hover:text-zinc-300`}>
              Key Features
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Header with Back Button */}
      <header className="p-6 flex justify-between items-center">
        <Link to="/" className="hover:underline">← Back</Link>
      </header>

      {/* Work1 Content */}
      <main className="flex-1 p-8 text-left">
        <h1 className="italic text-4xl">Studio: <br/>
        Redefining AI-Powered Video Creation</h1>
        <p className="mt-4">
          Studio is an all-in-one content creation suite, enabling VTubers, AI creators, and digital influencers to stream, record, and edit videos seamlessly.
        </p>
      </main>
      
      {/* Background Section */}
      <section id="context" className="p-8 border-t border-zinc-800">
        <h2 className="text-5xl italic">Context</h2>
        <p className="mt-4">
          Video creation has always been a top demand for Hologram. Our goal is to transform HoloStudio into a complete content creation platform for users. Today’s creators rely on their digital identities—avatars, PFPs, and IPs—and we're focusing on talking videos, a format popular on TikTok, YouTube, and Twitch. Hologram uniquely lets users have their personalized AI avatars speak on their behalf.
        </p>
        <p>
          The current studio is a basic canvas for one-time short clips (with face tracking, background change, and picture-in-picture mode), but it lacks the full editing experience—combining multiple tracks and advanced effects—that creators need. We envision a studio modeled after tools like TikTok’s editor and CapCut, offering seamless recording, editing, and interaction all in one.
        </p>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="p-8 border-t border-zinc-800">
        <h2 className="text-5xl italic">Timeline</h2>
        <p className="mt-4">Key milestones in the development and launch of Studio.</p>
      </section>

      {/* Key Features Section */}
      <section id="features" className="p-8 border-t border-zinc-800">
        <h2 className="text-5xl italic">Key Features</h2>
        <p className="mt-4">What makes Studio unique and how it empowers creators.</p>
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
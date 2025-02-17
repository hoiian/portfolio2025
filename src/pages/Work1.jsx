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
    <div className="min-h-screen text-white flex flex-col max-w-5xl mx-auto relative">
      {/* Fixed Right Navigation */}
      <nav className="fixed top-8 right-8 bg-zinc-900 bg-opacity-10 p-4 rounded-xl shadow-lg w-48">
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#background" className={`block ${activeSection === "background" ? "text-white" : "text-zinc-500"} hover:text-zinc-300`}>
              Background
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
      <section id="background" className="p-8 border-t border-zinc-800">
        <h2 className="text-3xl italic">Background</h2>
        <p className="mt-4">How Studio came to be and its impact on content creators.</p>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="p-8 border-t border-zinc-800">
        <h2 className="text-3xl italic">Timeline</h2>
        <p className="mt-4">Key milestones in the development and launch of Studio.</p>
      </section>

      {/* Key Features Section */}
      <section id="features" className="p-8 border-t border-zinc-800">
        <h2 className="text-3xl italic">Key Features</h2>
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
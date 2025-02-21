import React, { useState } from "react";
import Header from "../components/Header";
import { ChevronDown } from "lucide-react"; 

const Resume = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadOptions = [
    { label: "English", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en.pdf" },
    { label: "繁體中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_tw.pdf" },
    { label: "简体中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_cn.pdf" },
    { label: "English + 繁體中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_tw.pdf" },
    { label: "English + 简体中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_cn.pdf" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-[1360px] mx-auto mt-20">
      <Header />
      {/* Left Sidebar */}
      <div className="md:w-1/3 w-full md:p-6 p-5 flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-zinc-800 justify-between md:justify-start">
      
      <div className="flex flex-row md:flex-col gap-6 text-3xl font-heading">
      <p className="hidden md:block text-sm text-zinc-400 font-sans font-semibold uppercase">Language</p>
      <button
        className={`block w-full text-left ${selectedLanguage === "english" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
        onClick={() => setSelectedLanguage("english")}
      >
        <span className="block md:hidden">Eng</span>
        <span className="hidden md:block">English</span>
      </button>
      <button
        className={`block w-full text-left ${selectedLanguage === "traditional" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
        onClick={() => setSelectedLanguage("traditional")}
      >
        <span className="block md:hidden">繁</span>
        <span className="hidden md:block">繁體中文</span>
      </button>
      <button
        className={`block w-full text-left ${selectedLanguage === "simplified" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
        onClick={() => setSelectedLanguage("simplified")}
      >
        <span className="block md:hidden">简</span>
        <span className="hidden md:block">简体中文</span>
      </button>
    </div>
        {/* Download Dropdown */}
        <div className="relative md:mt-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white pl-5 pr-4 py-2 rounded-sm w-auto text-left border hover:bg-zinc-800 flex items-center justify-between gap-1"
          >
            Download PDF <ChevronDown strokeWidth={1} />
          </button>
          {menuOpen && (
            <div className="absolute top-full mt-1 border border-zinc-600 text-white rounded-sm w-auto">
              {downloadOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.file}
                  download
                  className="block px-3 py-2 hover:bg-zinc-900"
                >
                  {option.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Right Content */}
      <div className="md:w-2/3 w-full md:p-10 p-5 text-white">
        <h2 className="text-4xl italic mb-6 text-zinc-50 font-extrabold">Experience</h2>
        <div className="mt-6">
          <span className="text-xl font-bold ">Hologram</span>
          <span className=""> | Senior UI/UX Designer</span>
          <p className="text-zinc-400">Mar 2024 - Present, Shenzhen</p>
          <ul className="list-disc list-inside mt-2 text-zinc-300 text-sm">
            <li>Built the marketplace, loot box, and staking system from scratch, defining the framework, flow, and visual to support the design of the product's financial system.</li>
            <li>Designed the landing page, using innovative interactive methods to introduce the product and create interactive prototypes.</li>
          </ul>
        </div>
        
        <h2 className="text-4xl italic mt-20 mb-6 text-zinc-50 font-extrabold">Education</h2>
        <p>Placeholder for education details...</p>
        
        <h2 className="text-4xl italic mt-20 mb-6 text-zinc-50 font-extrabold">Skills</h2>
        <p>Placeholder for skills details...</p>
        
        <h2 className="text-4xl italic mt-20 mb-6 text-zinc-50 font-extrabold">Strengths</h2>
        <div className="mt-6">
          <span className="text-xl1 font-bold ">Technology Implementation</span>
          <ul className="list-disc list-inside mt-2 text-zinc-300 text-sm">
            <li>Independent web developer since 2017,  such as eDC Cloud Portal, Acer AI, Acer VR, and more.</li>
            <li>Proficient with ChatGPT for daily writing assistance and brainstorming.</li>
          </ul>
        </div>
        <div className="mt-6">
          <span className="text-xl1 font-bold ">Technology Implementation</span>
          <ul className="list-disc list-inside mt-2 text-zinc-300 text-sm">
            <li>Independent web developer since 2017,  such as eDC Cloud Portal, Acer AI, Acer VR, and more.</li>
            <li>Proficient with ChatGPT for daily writing assistance and brainstorming.</li>
          </ul>
        </div>
        <div className="mt-6">
          <span className="text-xl1 font-bold ">Technology Implementation</span>
          <ul className="list-disc list-inside mt-2 text-zinc-300 text-sm">
            <li>Independent web developer since 2017,  such as eDC Cloud Portal, Acer AI, Acer VR, and more.</li>
            <li>Proficient with ChatGPT for daily writing assistance and brainstorming.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

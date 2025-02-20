import React, { useState } from "react";
import Header from "../components/Header";
import { ChevronDown } from "lucide-react"; 

const Resume = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadOptions = [
    { label: "English", file: "/pdfs/resume-english.pdf" },
    { label: "繁體中文", file: "/pdfs/resume-traditional.pdf" },
    { label: "简体中文", file: "/pdfs/resume-simplified.pdf" },
    { label: "English + 繁體中文", file: "/pdfs/resume-en-tw.pdf" },
    { label: "English + 简体中文", file: "/pdfs/resume-en-cn.pdf" },
  ];

  return (
    <div className="min-h-screen flex max-w-[1360px] pt-20">
      <Header />
      {/* Left Sidebar */}
      <div className="w-1/3 p-6 flex flex-col ">
      
        <div className="space-y-4 text-3xl font-heading">
        <p className="text-sm text-zinc-400 font-sans font-semibold uppercase ">Language</p>
          <button 
            className={`block w-full text-left ${selectedLanguage === "english" ? " text-white" : "text-zinc-600"}`}
            onClick={() => setSelectedLanguage("english")}
          >
            English
          </button>
          <button 
            className={`block w-full text-left ${selectedLanguage === "traditional" ? " text-white" : "text-zinc-600"}`}
            onClick={() => setSelectedLanguage("traditional")}
          >
            繁體中文
          </button>
          <button 
            className={`block w-full text-left ${selectedLanguage === "simplified" ? " text-white" : "text-zinc-600"}`}
            onClick={() => setSelectedLanguage("simplified")}
          >
            简体中文
          </button>
        </div>
        {/* Download Dropdown */}
        <div className="relative mt-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white px-5 py-2 rounded-sm w-auto text-left border"
          >
            Download PDF 
            {/* <ChevronDown size={20} strokeWidth={1} /> */}
          </button>
          {menuOpen && (
            <div className="absolute top-full mt-2 border text-white rounded-sm w-auto">
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
      <div className="w-2/3 p-10 border-l-1">
        <h2 className="text-4xl italic mb-6">Experience</h2>
        <p>Placeholder for experience details...</p>
        
        <h2 className="text-4xl italic mt-10 mb-6">Education</h2>
        <p>Placeholder for education details...</p>
        
        <h2 className="text-4xl italic mt-10 mb-6">Skills</h2>
        <p>Placeholder for skills details...</p>
        
        <h2 className="text-4xl italic mt-10 mb-6">Strengths</h2>
        <p>Placeholder for strengths details...</p>
      </div>
    </div>
  );
};

export default Resume;

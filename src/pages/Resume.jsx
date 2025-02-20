import React, { useState } from "react";
import Header from "../components/Header";

const resumes = {
  en: "/resumes/resume-en.pdf#toolbar=0&navpanes=0&scrollbar=0",
  zh_tw: "/resumes/resume-tw.pdf#toolbar=0&navpanes=0&scrollbar=0",
  zh_cn: "/resumes/resume-cn.pdf#toolbar=0&navpanes=0&scrollbar=0",
};

const downloadOptions = [
  { label: "English PDF", file: "/resumes/resume-en.pdf" },
  { label: "繁體中文 PDF", file: "/resumes/resume-tw.pdf" },
  { label: "简体中文 PDF", file: "/resumes/resume-cn.pdf" },
  { label: "Word Format", file: "/resumes/resume.docx" },
  { label: "Text Format", file: "/resumes/resume.txt" },
];

export default function Resume() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-[80px]">
        {/* Language Selector */}
        <div className="w-1/6 p-5 space-y-8 text-5xl">
          <button onClick={() => setSelectedLang("en")} className={`font-heading block w-full text-right ${selectedLang === "en" ? " text-white" : "text-zinc-600"}`}>English</button>
          <button onClick={() => setSelectedLang("zh_tw")} className={`block w-full text-right ${selectedLang === "zh_tw" ? " text-white" : "text-zinc-600"}`}>繁體中文</button>
          <button onClick={() => setSelectedLang("zh_cn")} className={`block w-full text-right ${selectedLang === "zh_cn" ? " text-white" : "text-zinc-600"}`}>简体中文</button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 flex items-center justify-center">
          <iframe src={resumes[selectedLang]} className="w-full h-full" />
        </div>

        <div className="w-1/6 mt-10 self-end relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-lg w-full text-left"
        >
          Download ▲
        </button>
        {menuOpen && (
          <div className="absolute bottom-full mb-2 bg-zinc-800 text-white p-3 rounded-lg shadow-lg w-full">
            {downloadOptions.map((option, index) => (
              <a
                key={index}
                href={option.file}
                download
                className="block px-4 py-2 hover:bg-zinc-700"
              >
                {option.label}
              </a>
            ))}
          </div>
        )}
      </div>
      </div>


    </div>
  );
}
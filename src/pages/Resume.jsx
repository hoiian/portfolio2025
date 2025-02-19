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
        <div className="w-1/6 p-5 space-y-4 text-5xl">
          <button onClick={() => setSelectedLang("en")} className={`block w-full text-right ${selectedLang === "en" ? "font-bold text-white" : "text-zinc-400"}`}>English</button>
          <button onClick={() => setSelectedLang("zh_tw")} className={`block w-full text-right ${selectedLang === "zh_tw" ? "font-bold text-white" : "text-zinc-400"}`}>繁體中文</button>
          <button onClick={() => setSelectedLang("zh_cn")} className={`block w-full text-right ${selectedLang === "zh_cn" ? "font-bold text-white" : "text-zinc-400"}`}>简体中文</button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 flex items-center justify-center">
          <iframe src={resumes[selectedLang]} className="w-full h-full" />
        </div>

        <div className="w-1/6 p-5 space-y-4">
              {/* Download Menu */}
            <div className="fixed bottom-5 right-5">
              <button onClick={() => setMenuOpen(!menuOpen)} className="bg-zinc-900 text-white px-4 py-2 rounded border-1">Download PDF ▼</button>
              {menuOpen && (
                <div className="absolute bottom-12 right-0 bg-zinc-800 text-white rounded shadow-lg">
                  {downloadOptions.map((option) => (
                    <a key={option.file} href={option.file} download className="block px-4 py-2 hover:bg-zinc-700">{option.label}</a>
                  ))}
                </div>
              )}
            </div>
        </div>
      </div>


    </div>
  );
}
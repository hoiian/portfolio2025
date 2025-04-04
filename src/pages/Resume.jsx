import React, { useState } from "react";
import Header from "../components/Header";
import { ChevronDown } from "lucide-react";
import resumeTexts from "../data/resumeTexts";

const Resume = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadOptions = [
    { label: "English", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en.pdf" },
    { label: "中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_tw.pdf" },
    // { label: "简体中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_cn.pdf" },
    {
      label: "English + 中文",
      file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_tw.pdf",
    },
    // {
    //   label: "English + 简体中文",
    //   file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_cn.pdf",
    // },
  ];

  // Fetch the current language's text
  const content = resumeTexts[selectedLanguage];

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-[1360px] mx-auto mt-20 mb-40">
      <Header />
      {/* Left Sidebar */}
      <div className="md:w-1/3 w-full md:p-6 p-5 flex flex-row md:flex-col justify-between md:justify-start md:sticky md:top-5 md:h-screen">
        <div className="flex flex-row md:flex-col gap-6 text-3xl font-heading">
          <p className="hidden md:block text-sm text-zinc-400 font-sans font-semibold uppercase">
            Language
          </p>
          <button
            className={`block w-full text-left ${
              selectedLanguage === "english"
                ? "text-white"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
            onClick={() => setSelectedLanguage("english")}
          >
            <span className="block md:hidden">Eng</span>
            <span className="hidden md:block">English</span>
          </button>
          <button
            className={`block w-full text-left ${
              selectedLanguage === "traditional"
                ? "text-white"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
            onClick={() => setSelectedLanguage("traditional")}
          >
            <span className="block md:hidden font-serifTC">中</span>
            <span className="hidden md:block font-serifTC">中文</span>
          </button>
          {/*  <button
            className={`block w-full text-left ${
              selectedLanguage === "simplified"
                ? "text-white"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
            onClick={() => setSelectedLanguage("simplified")}
          >
            <span className="block md:hidden font-serifTC">簡</span>
            <span className="hidden md:block font-serifTC">簡体中文</span>
          </button>*/}
        </div>
        {/* Download Dropdown */}
        <div className="relative md:mt-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white pl-5 pr-4 py-2 rounded-sm w-auto text-left border hover:bg-zinc-800 flex items-center justify-between gap-1"
          >
            Download PDF <ChevronDown strokeWidth={1} />
          </button>

          {/* Dropdown Menu with Transition */}
          <div
            className={`absolute top-full mt-1 text-white rounded-sm w-auto transform transition-all duration-300 origin-top ${
              menuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {downloadOptions.map((option, index) => (
              <a
                key={index}
                href={option.file}
                download
                className="block pl-4 pr-5 py-2 hover:bg-zinc-900 bg-zinc-950 rounded-sm"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-2/3 w-full md:p-10 md:pr-0 p-5 text-white border-t md:border-t-0 md:border-l border-zinc-800">
        <h2 className="text-5xl mb-8 italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2DEDD0] via-[#2474DD] to-[#A22BC7] bg-[length:200%_200%] animate-gradient-x leading-snug pb-1">
          {content.myName}
        </h2>
        {/* Experience ------------------------ */}
        <h2 className="text-3xl mb-6 text-zinc-400">{content.Experience}</h2>

        {/* Work1 */}
        <div className="mt-6 flex flex-col md:flex-row">
          {/* Left Section: Title, Content, and Date for Small Screens */}
          <div className="w-full md:w-3/4">
            <a
              href="https://hologram.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 "
            >
              <span className="text-xl font-bold">Hologram</span>
            </a>
            <span className="mx-2 text-zinc-400">›</span>
            <span>UI/UX {content.Designer}</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>
                {content.Mar} 2024 - {content.Present}, {content.Shenzhen}
              </p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>
                Refined the Holoword AI design system, driving new iterations as
                the sole designer. Integrated TailwindCSS to optimize
                development and accelerate implementation.
              </li>
              <li>
                Led full-cycle design projects from low-fidelity sketches to
                high-fidelity prototypes, collaborating closely with engineers
                and PMs.
              </li>
              <li>
                Rapidly delivered 0-to-1 designs for diverse features (e.g.,
                video editor, message inbox, launchpad) in a fast-paced startup
                environment.
              </li>
            </ul>
          </div>

          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block ">
            <p className="text-zinc-400">
              {content.Mar} 2024 - {content.Present}{" "}
            </p>
            <p className="text-zinc-400">{content.Shenzhen}</p>
          </div>
        </div>

        {/* Work2 */}
        <div className="mt-6 flex flex-col md:flex-row">
          {/* Left Section: Title, Content, and Date for Small Screens */}
          <div className="w-full md:w-3/4">
            <a
              href="https://www.neteasegames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:text-zinc-400 "
            >
              <span className="text-xl font-bold">{content.NetEase}</span>
              {/* Tooltip */}
              <div className="absolute top-0 right-[100px] transform -translate-x-0 mb-2 hidden group-hover:block w-[260px] bg-zinc-9001 bg-white bg-opacity-5 backdrop-blur rounded-xl p-4">
                <img
                  src="/images/neteaseLogo.png" // replace with actual image URL
                  alt="Tooltip image"
                  className="w-[160px] object-cover rounded-xl mb-2"
                />
                <span className="text-xs text-zinc-50">
                  NetEase, the fifth-largest gaming company globally, ranks
                  higher than Epic Games in revenue.
                </span>
              </div>
            </a>
            <span className="mx-2 text-zinc-400">›</span>
            <span>UI/UX {content.Designer}</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>
                {content.Jul} 2021 - {content.Feb} 2023, {content.Hangzhou}
              </p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>
                Computer Game (NARAKA: BLADEPOINT): Designed 28 interfaces,
                optimizing user experience while integrating joystick input in
                Unity for PC. Streamlined resource uploads to improve team
                workflow and project efficiency.
              </li>
              <li>
                Browser Plugin (Web3 Tool): Led the design and development of
                web pages and plugins, iterating based on user feedback,
                resulting in a 4.8/5 app rating.
              </li>
              <li>
                Web Application (Web3 Trading Platform): Developed adaptive
                wallet and market applications, focusing on responsive design
                for a seamless, cross-platform user experience.
              </li>
            </ul>
          </div>

          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">
              {content.Jul} 2021 - {content.Feb} 2023
            </p>
            <p className="text-zinc-400">{content.Hangzhou}</p>
          </div>
        </div>

        {/* Work3 */}
        <div className="mt-6 flex flex-col md:flex-row">
          {/* Left Section: Title, Content, and Date for Small Screens */}
          <div className="w-full md:w-3/4">
            <a
              href="https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 "
            >
              <span className="text-xl font-bold">{content.MSRA}</span>
            </a>
            <span className="mx-2 text-zinc-400">›</span>
            <span>
              UI/UX {content.Design}
              {content.Intern}
            </span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>
                {content.Dec} 2019 - {content.May} 2020, {content.Beijing}
              </p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>
                Collaborated with PMs and lead designers on FinTech and COVID
                Insights web projects, streamlining processes and designing data
                forms.
              </li>
              <li>
                Used data visualization to clearly present text, numbers, and 3D
                information.
              </li>
            </ul>
          </div>

          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">
              {content.Dec} 2019 - {content.May} 2020
            </p>
            <p className="text-zinc-400">{content.Beijing}</p>
          </div>
        </div>
        {/* Education ------------------------ */}
        <h2 className="text-3xl mt-20 mb-6 text-zinc-400">
          {content.Education}
        </h2>
        <div className="mt-6 flex">
          {/* Left Section: Title and Content (3/4) */}
          <div className="w-3/4">
            <a
              href="https://www.tsinghua.edu.cn/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:text-zinc-400 "
            >
              <span className="text-xl font-bold">{content.THU}</span>
              {/* Tooltip */}
              <div className="absolute top-0 right-[200px] transform -translate-x-0 mb-2 hidden group-hover:block w-[260px] bg-zinc-9001 bg-white bg-opacity-5 backdrop-blur rounded-xl p-4">
                <img
                  src="/images/THULogo.svg" // replace with actual image URL
                  alt="Tooltip image"
                  className="w-[160px] object-cover rounded-xl mb-2"
                />
                <span className="text-xs text-zinc-50">
                  Ranked 20th globally in the QS World University Rankings
                </span>
              </div>
            </a>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>2018 - 2021, {content.Beijing}</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>{content.THUDegree}</li>
            </ul>
          </div>
          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">2018 - 2021</p>
            <p className="text-zinc-400">{content.Beijing}</p>
          </div>
        </div>

        <div className="mt-6 flex">
          {/* Left Section: Title and Content (3/4) */}
          <div className="w-3/4">
            <span className="text-xl font-bold">{content.NCKU}</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>2014 - 2018, {content.Taiwan}</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>{content.NCKUDegree}</li>
            </ul>
          </div>
          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">2014 - 2018</p>
            <p className="text-zinc-400">{content.Taiwan}</p>
          </div>
        </div>

        {/* Skills------------ */}
        {/* <h2 className="text-3xl mt-20 mb-6 text-zinc-400 ">{content.Skills}</h2>
        <p>Placeholder for skills details...</p> */}

        {/* Strengths------------ */}
        <h2 className="text-3xl mt-20 mb-6 text-zinc-400">
          {content.Strengths}
        </h2>
        <div className="mt-6">
          <span className="font-bold ">Technology Implementation</span>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
            <li>
              Independent web developer since 2017, such as eDC Cloud Portal,
              Acer AI, Acer VR, and more.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <span className="font-bold ">Efficiency Advocate</span>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
            <li>
              Proficient in managing personal tasks and producing clear, concise
              design file.
            </li>
            <li>
              Established resource standards in early 2D game development,
              boosting efficiency by 30%.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <span className="font-bold ">Bilingual Proficiency</span>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
            <li>
              Fluent in English, Cantonese, and Mandarin
              <ul className="list-disc list-outside space-y-2 ml-5 mt-2">
                <li>English as the primary language for work</li>
                <li>Native Cantonese speaker, grew up in Macau.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

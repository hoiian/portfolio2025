import React, { useState } from "react";
import Header from "../components/Header";
import { ChevronDown } from "lucide-react";
import resumeTexts from "../data/resumeTexts";

const Resume = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadOptions = [
    { label: "English", file: "/pdfs/Resume_HoiIanWong_UXUI_202504_en.pdf" },
    { label: "繁體中文", file: "/pdfs/Resume_HoiIanWong_UXUI_202504_zh.pdf" },
    { label: "简体中文", file: "/pdfs/Resume_HoiIanWong_UXUI_202504_cn.pdf" },
    // { label: "English + 中文", file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_tw.pdf",},
    // {
    //   label: "English + 简体中文",
    //   file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_cn.pdf",
    // },
  ];

  // Fetch the current language's text
  const content = resumeTexts[selectedLanguage];

  // 要加連結的字詞 → URL
  const linkMap = {
    "Holoword AI": "https://app.holoworld.com/",
    TailwindCSS: "https://tailwindcss.com/",
    "NARAKA: BLADEPOINT": "https://www.narakathegame.com/",
    瀏覽器插件:
      "https://chromewebstore.google.com/detail/MetaPush/ecponkikdgnpkeejiopipbgbllcgjimb",
    "Web3 browser plugin":
      "https://chromewebstore.google.com/detail/MetaPush/ecponkikdgnpkeejiopipbgbllcgjimb",
    "eDC Cloud Portal":
      "https://cloudgoda.aceredc.com/#/page/pricingcomparison",
    Acer雲架構: "https://cloudgoda.aceredc.com/#/page/pricingcomparison",
    "Acer AI": "https://acerwebai.github.io/index.html",
    "Acer VR": "https://acerwebvr.github.io/",
  };

  // highlight 的字詞列表
  const highlightWords = [
    "design system",
    "game UI",
    "Web3 browser plugin",
    "Web3 trading platform",
    "data visualization",
    "設計系統",
  ];

  // 輔助函式：把字串中可能有正則特殊字元的詞做轉義
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // formatText：把文字拆成「需處理的片段」和「純文字」，
  // 然後根據 linkMap/highlightWords 包成 <a> 或 <span>
  function formatText(text) {
    // 合併所有要處理的字詞
    const keys = Array.from(
      new Set([...Object.keys(linkMap), ...highlightWords])
    )
      // 依長度排序，避免短詞把長詞切到；並轉成正則字串
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp);

    const pattern = new RegExp(`(${keys.join("|")})`, "g");
    const parts = text.split(pattern);

    return parts.map((part, i) => {
      const isLink = linkMap[part];
      const isHighlight = highlightWords.includes(part);

      if (isLink || isHighlight) {
        // 組合 className
        const classes = [
          isHighlight
            ? "bg-gradient-to-r from-zinc-800 to-zinc-700 px-1 rounded"
            : null,
          isLink ? "underline hover:text-zinc-500" : null,
        ]
          .filter(Boolean)
          .join(" ");

        // 如果同時要連結，就用 <a>，否則用 <span>
        if (isLink) {
          return (
            <a
              key={i}
              href={isLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
            >
              {part}
            </a>
          );
        } else {
          return (
            <span key={i} className={classes}>
              {part}
            </span>
          );
        }
      }

      // 不用處理的文字就直接回傳
      return part;
    });
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-[1360px] mx-auto mt-20 mb-40">
      <Header />
      {/* Left Sidebar */}
      <div className="md:w-1/3 w-full md:p-6 p-5 flex flex-row md:flex-col justify-between md:justify-start sticky md:top-5 md:h-screen z-[60]">
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
        <div className="mt-7 flex flex-col md:flex-row">
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

            <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
              {content.hologramDetails.map((item, index) => (
                <li key={index}>{formatText(item)}</li>
              ))}
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
        <div className="mt-7 flex flex-col md:flex-row">
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
              <div
                className={`absolute top-0 left-[-10px] transform -translate-x-full mb-2 w-[260px] bg-zinc-900 bg-opacity-80 backdrop-blur rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto`}
              >
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

            <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
              {/* {content.netEaseDetails.map((item, index) => {
                // 同樣先找冒號（中英文都試）
                const colonPos =
                  item.indexOf("：") !== -1
                    ? item.indexOf("：")
                    : item.indexOf(":");

                // 如果有冒號，就拆成 before / after
                const hasColon = colonPos !== -1;
                const before = hasColon ? item.slice(0, colonPos) : item;
                const after = hasColon ? item.slice(colonPos + 1).trim() : "";

                return (
                  <li key={index} className="list-disc">
                    {before}
                    {hasColon && (
                      <ul className="list-circle list-inside ml-1 mt-1">
                        <li>{after}</li>
                      </ul>
                    )}
                  </li>
                );
              })} */}
              {content.netEaseDetails.map((item, index) => (
                <li key={index}>{formatText(item)}</li>
              ))}
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
        <div className="mt-7 flex flex-col md:flex-row">
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

            <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
              {content.MRSADetails.map((item, index) => (
                <li key={index}>{formatText(item)}</li>
              ))}
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
        <div className="mt-7 flex">
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
              <div
                className={`absolute top-0 left-[-10px] transform -translate-x-full mb-2 w-[260px] bg-zinc-900 bg-opacity-80 backdrop-blur rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto`}
              >
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

            <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
              <li>{content.THUDegree}</li>
            </ul>
          </div>
          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">2018 - 2021</p>
            <p className="text-zinc-400">{content.Beijing}</p>
          </div>
        </div>

        <div className="mt-7 flex">
          {/* Left Section: Title and Content (3/4) */}
          <div className="w-3/4">
            <a
              href="https://web.ncku.edu.tw/index.php?Lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 "
            >
              <span className="text-xl font-bold">{content.NCKU}</span>
            </a>
            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>2014 - 2018, {content.Taiwan}</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
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
        <div className="mt-7">
          <span className="font-bold ">{formatText(content.Strengths1)}</span>
          <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
            {content.Strengths1Details.map((item, index) => (
              <li key={index}>{formatText(item)}</li>
            ))}
          </ul>
        </div>
        <div className="mt-7">
          <span className="font-bold ">{content.Strengths2}</span>
          <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
            {content.Strengths2Details.map((item, index) => (
              <li key={index}>{formatText(item)}</li>
            ))}
          </ul>
        </div>
        <div className="mt-7">
          <span className="font-bold ">{content.Strengths3}</span>
          <ul className="list-disc list-outside pl-5 space-y-3 mt-2 text-zinc-300 text-sm">
            <li>
              {content.Strengths3DetailsTitle}
              <ul className="list-disc list-outside space-y-2 ml-5 mt-2">
                {content.Strengths3Details.map((item, index) => (
                  <li key={index}>{formatText(item)}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

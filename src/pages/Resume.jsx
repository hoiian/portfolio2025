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
    {
      label: "English + 繁體中文",
      file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_tw.pdf",
    },
    {
      label: "English + 简体中文",
      file: "/pdfs/HoiIanWong_UXUI_Resume_2025_en_cn.pdf",
    },
  ];

  const resumeTexts = {
    english: {
      experienceTitle: "Experience",
      educationTitle: "Education",
      skillsTitle: "Skills",
      strengthsTitle: "Strengths",

      hologramRole: "Senior UI/UX Designer",
      Present: "Present",
      Shenzhen: "Shenzhen",
      hologramDetails: [
        "Built the marketplace, loot box, and staking system from scratch, defining the framework, flow, and visual to support the design of the product's financial system.",
        "Designed the landing page, using innovative interactive methods to introduce the product and create interactive prototypes.",
      ],
      educationDetails: [
        "M.S. in Information Art and Design at Tsinghua University.",
        "B.S. in Industrial Design at National Cheng Kung University.",
      ],
      strengthDetails: [
        "Independent web developer since 2017, such as eDC Cloud Portal, Acer AI, Acer VR, and more.",
        "Proficient with ChatGPT for daily writing assistance and brainstorming.",
      ],
    },
    traditional: {
      experienceTitle: "經驗",
      educationTitle: "教育",
      skillsTitle: "技能",
      strengthsTitle: "優勢",

      hologramRole: "高級 UI/UX 設計師",
      Present: "現在",
      Shenzhen: "深圳",
      hologramDetails: [
        "從零開始構建市場、抽獎和質押系統，定義框架、流程和視覺，支持產品金融系統設計。",
        "設計登陸頁，使用創新的交互方式來介紹產品並創建交互式原型。",
      ],
      educationDetails: [
        "清華大學信息藝術與設計碩士。",
        "成功大學工業設計學士。",
      ],
      strengthDetails: [
        "自2017年以來擔任獨立開發者，專注於 eDC 雲門戶、宏碁 AI 和 VR 項目。",
        "擅長使用 ChatGPT 進行日常寫作輔助和頭腦風暴。",
      ],
    },
    simplified: {
      experienceTitle: "经验",
      educationTitle: "教育",
      skillsTitle: "技能",
      strengthsTitle: "优势",
      hologramRole: "高级 UI/UX 设计师",
      Present: "现在",
      Shenzhen: "深圳",
      hologramDetails: [
        "从零开始构建市场、抽奖和质押系统，定义框架、流程和视觉，支持产品金融系统设计。",
        "设计登录页面，使用创新的交互方式介绍产品并创建交互式原型。",
      ],
      educationDetails: [
        "清华大学信息艺术与设计硕士。",
        "成功大学工业设计学士。",
      ],
      strengthDetails: [
        "自2017年以来担任独立开发者，专注于 eDC 云门户、宏碁 AI 和 VR 项目。",
        "擅长使用 ChatGPT 进行日常写作辅助和头脑风暴。",
      ],
    },
  };

  // Fetch the current language's text
  const content = resumeTexts[selectedLanguage];

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-[1360px] mx-auto mt-20">
      <Header />
      {/* Left Sidebar */}
      <div className="md:w-1/3 w-full md:p-6 p-5 flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-zinc-800 justify-between md:justify-start">
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
            <span className="block md:hidden font-serifTC">繁</span>
            <span className="hidden md:block font-serifTC">繁體中文</span>
          </button>
          <button
            className={`block w-full text-left ${
              selectedLanguage === "simplified"
                ? "text-white"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
            onClick={() => setSelectedLanguage("simplified")}
          >
            <span className="block md:hidden font-serifTC">簡</span>
            <span className="hidden md:block font-serifTC">簡体中文</span>
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
      <div className="md:w-2/3 w-full md:p-10 md:pr-5 p-5 text-white">
        <h2 className="text-5xl mb-8 text-zinc-50 italic font-bold">
          Hoi Ian Wong
        </h2>

        <h2 className="text-3xl mb-6 text-zinc-50">
          {content.experienceTitle}
        </h2>

        {/* Work1 */}
        <div className="mt-6 flex flex-col md:flex-row">
          {/* Left Section: Title, Content, and Date for Small Screens */}
          <div className="w-full md:w-3/4">
            <a
              href="https://hologram.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <span className="text-xl font-bold">Hologram</span>
            </a>
            <span className="mx-2 text-zinc-400">›</span>
            <span>{content.hologramRole}</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>
                Mar 2024 - {content.Present}, {content.Shenzhen}
              </p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>
                Built the marketplace, loot box, and staking system from
                scratch, defining the framework, flow, and visual to support the
                design of the product's financial system.
              </li>
              <li>
                Designed the landing page, using innovative interactive methods
                to introduce the product and create interactive prototypes.
              </li>
            </ul>
          </div>

          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">Mar 2024 - {content.Present} </p>
            <p className="text-zinc-400">{content.Shenzhen}</p>
          </div>
        </div>

        {/* Work2 */}
        <div className="mt-6 flex flex-col md:flex-row">
          {/* Left Section: Title, Content, and Date for Small Screens */}
          <div className="w-full md:w-3/4">
            <span className="text-xl font-bold">NetEase</span>
            <span className="mx-2 text-zinc-400">›</span>
            <span>UI/UX Designer</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>Jul 2021 - Feb 2023, Hangzhou</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>..</li>
              <li>..</li>
            </ul>
          </div>

          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">Jul 2021 - Feb 2023</p>
            <p className="text-zinc-400">Hangzhou</p>
          </div>
        </div>

        {/* Work3 */}
        <div className="mt-6 flex flex-col md:flex-row">
          {/* Left Section: Title, Content, and Date for Small Screens */}
          <div className="w-full md:w-3/4">
            <span className="text-xl font-bold">Microsoft Research Asia</span>
            <span className="mx-2 text-zinc-400">›</span>
            <span>UI/UX Designer Intern</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>Dec 2019 - May 2020, Beijing</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>..</li>
              <li>..</li>
            </ul>
          </div>

          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">Dec 2019 - May 2020</p>
            <p className="text-zinc-400">Beijing</p>
          </div>
        </div>

        <h2 className="text-3xl mt-20 mb-6 text-zinc-50">
          {content.educationTitle}
        </h2>
        <div className="mt-6 flex">
          {/* Left Section: Title and Content (3/4) */}
          <div className="w-3/4">
            <span className="text-xl font-bold">Tsinghua University</span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>2018 - 2021, Beijing</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>M.S. in Information Art and Design</li>
            </ul>
          </div>
          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">2018 - 2021</p>
            <p className="text-zinc-400">Beijing</p>
          </div>
        </div>

        <div className="mt-6 flex">
          {/* Left Section: Title and Content (3/4) */}
          <div className="w-3/4">
            <span className="text-xl font-bold">
              National Cheng Kung University
            </span>

            {/* Date & Location for Small Screens */}
            <div className="mt-1 text-sm text-zinc-400 md:hidden">
              <p>2014 - 2018, Taiwan</p>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
              <li>B.S. in Industrial Design</li>
            </ul>
          </div>
          {/* Right Section: Date & Location for Larger Screens */}
          <div className="w-1/4 text-right text-sm hidden md:block">
            <p className="text-zinc-400">2014 - 2018</p>
            <p className="text-zinc-400">Taiwan</p>
          </div>
        </div>

        <h2 className="text-3xl mt-20 mb-6 text-zinc-50 ">
          {content.skillsTitle}
        </h2>
        <p>Placeholder for skills details...</p>

        <h2 className="text-3xl mt-20 mb-6 text-zinc-50 ">
          {content.strengthsTitle}
        </h2>
        <div className="mt-6">
          <span className="font-bold ">Technology Implementation</span>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
            <li>
              Independent web developer since 2017, such as eDC Cloud Portal,
              Acer AI, Acer VR, and more.
            </li>
            <li>
              Proficient with ChatGPT for daily writing assistance and
              brainstorming.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <span className="font-bold ">Efficiency Advocate</span>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
            <li>
              Proficient in task recording and digitization, streamlining
              workflow with clean design drafts.
            </li>
            <li>
              Established resource standards in early 2D game development,
              achieving a 30% efficiency improvement.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <span className="font-bold ">Bilingual Proficiency</span>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-2 text-zinc-300 text-sm">
            <li>
              English, Cantonese, and Mandarin can be used as working languages.
              <ul className="list-disc list-outside pl-5 space-y-2 ml-5 mt-2">
                <li>
                  Use English for written and verbal communication at the
                  current company.
                </li>
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

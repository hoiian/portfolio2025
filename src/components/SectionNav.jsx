// SectionNav.jsx
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
// 預設的 section 陣列和顯示設定（可根據需要覆蓋）
const defaultSections = [
  "background",
  "vtuber",
  "editor",
  "prompt",
  "conclusion",
];

const defaultMappings = {
  background: { title: "Background", tooltip: "Project background" },
  vtuber: { title: "Vtuber Playground", tooltip: "Redesign" },
  editor: { title: "Video Editor", tooltip: "0-1" },
  prompt: { title: "AI Video Generator", tooltip: "Prompt to video" },
  conclusion: { title: "Takeaways", tooltip: "Takeaways" },
  // 為第2頁新增的映射：
  flow: { title: "Flow", tooltip: "User flow design" },
  wireframe: { title: "Wireframe", tooltip: "Low-fidelity layout" },
  design: { title: "Design", tooltip: "Visual design details" },
  takeaways: { title: "Takeaways", tooltip: "Takeaways" },
};

const SectionNav = ({
  sections = defaultSections,
  mappings = defaultMappings,
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [progress, setProgress] = useState(0);
  const [sectionWidths, setSectionWidths] = useState({});

  useEffect(() => {
    const updateWidths = () => {
      const startEl = document.getElementById(sections[0]);
      const endEl = document.getElementById(sections[sections.length - 1]);
      if (!startEl || !endEl) return;

      const startTop = startEl.offsetTop;
      const endBottom = endEl.offsetTop + endEl.offsetHeight;
      const totalHeight = endBottom - startTop - window.innerHeight;

      const widths = {};
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const height = el.offsetHeight;
          widths[id] = (height / totalHeight) * 100;
        }
      });

      setSectionWidths(widths);
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const startEl = document.getElementById(sections[0]);
      const endEl = document.getElementById(sections[sections.length - 1]);
      if (!startEl || !endEl) return;

      const startTop = startEl.offsetTop;
      const endBottom = endEl.offsetTop + endEl.offsetHeight;
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;

      const sectionHeight = endBottom - startTop - viewportHeight;
      const scrolled = scrollTop - startTop;
      let progressPercent = 0;
      if (scrolled > 0) {
        progressPercent = Math.min((scrolled / sectionHeight) * 100, 100);
      }
      setProgress(progressPercent);

      let current = sections[0];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {" "}
      <div className="w-8 h-[37px] fixed top-0 left-0 bg-gradient-to-b from-zinc-950 to-zinc-950/60 backdrop-blur-lg hover:text-zinc-400 z-50 flex items-center">
        <Link
          to="/"
          // className="text-zinc-100 pl-3 pr-5 py-2 rounded-sm w-auto text-left border border-zinc-400 hover:bg-zinc-800 flex items-center justify-between gap-1"
        >
          <ChevronLeft strokeWidth={1} size={28} />
        </Link>
      </div>
      <div className="fixed top-0 left-8 w-[calc(100%-32px)] z-50 bg-gradient-to-b from-zinc-950 to-zinc-950/60 backdrop-blur-lg">
        {/* Progress bar */}
        <div className="relative h-1 bg-zinc-800">
          <div
            className="absolute h-1 bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center border-t border-zinc-800 text-sm text-zinc-400">
          {sections.map((id) => (
            <div
              key={id}
              className="relative group"
              style={{ width: `${sectionWidths[id] || 0}%` }}
            >
              <button
                onClick={() => handleClick(id)}
                className={`h-8 w-full border-r border-zinc-800 text-left px-3 truncate ${
                  activeSection === id
                    ? "text-white font-medium"
                    : "hover:text-zinc-500"
                }`}
              >
                {(mappings[id] && mappings[id].title) ||
                  id.charAt(0).toUpperCase() + id.slice(1)}
              </button>

              {/* Tooltip */}
              <div className="absolute top-full left-0 mt-1 whitespace-nowrap text-xs text-white bg-zinc-900 bg-opacity-80 backdrop-blur-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition z-10">
                {(mappings[id] && mappings[id].tooltip) || "Project background"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNav;

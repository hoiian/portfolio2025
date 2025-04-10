import React, { useEffect, useState } from "react";

const sections = ["background", "vtuber", "editor", "prompt", "conclusion"];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("background");
  const [progress, setProgress] = useState(0);
  const [sectionWidths, setSectionWidths] = useState({});

  useEffect(() => {
    const updateWidths = () => {
      const startEl = document.getElementById("background");
      const endEl = document.getElementById("conclusion");
      if (!startEl || !endEl) return;

      const startTop = startEl.offsetTop;
      const endBottom = endEl.offsetTop + endEl.offsetHeight;
      const totalHeight = endBottom - startTop - window.innerHeight; // ✨ 加這裡保持一致

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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const startEl = document.getElementById("background");
      const endEl = document.getElementById("conclusion");

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

      let current = "background";
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
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
              {id === "vtuber"
                ? "Vtuber Playground"
                : id === "editor"
                ? "Video Editor"
                : id === "prompt"
                ? "AI Video Generator"
                : id === "conclusion"
                ? "Takeaways"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>

            {/* Tooltip */}
            <div className="absolute top-full left-0 mt-1 whitespace-nowrap text-xs text-white bg-zinc-900 bg-opacity-80 backdrop-blur-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition z-10">
              {id === "vtuber"
                ? "Redesign"
                : id === "editor"
                ? "0-1"
                : id === "prompt"
                ? "Prompt to video"
                : id === "conclusion"
                ? "Takeaways"
                : "Project background"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionNav;

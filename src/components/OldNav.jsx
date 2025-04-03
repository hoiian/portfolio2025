{
  /* Fixed Right Navigation */
}
{
  false && (
    <nav className="fixed top-20 left-6 bg-zinc-900 bg-opacity-10 p-4 rounded-xl shadow-lg w-48">
      <ul className="space-y-2 text-sm">
        {/* Background / Context */}
        <li>
          <a
            href="#background"
            onClick={(e) => handleSmoothScroll(e, "background")}
            className={`block ${
              activeSection === "background" ? "text-white" : "text-zinc-500"
            } hover:text-zinc-300`}
          >
            Background
          </a>
        </li>

        {/* Vtuber Playground (Redesign) */}
        <li>
          <a
            href="#vtuber"
            onClick={(e) => handleSmoothScroll(e, "vtuber")}
            className={`block ${
              activeSection === "vtuber" ? "text-white" : "text-zinc-500"
            } hover:text-zinc-300`}
          >
            Vtuber Playground
          </a>
          <ul className="pl-4 space-y-1">
            <li>
              <a
                href="#vtuber-competitor"
                onClick={(e) => handleSmoothScroll(e, "vtuber-competitor")}
                className={`block ${
                  activeSection === "vtuber-competitor"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Competitor
              </a>
            </li>
            <li>
              <a
                href="#vtuber-design"
                onClick={(e) => handleSmoothScroll(e, "vtuber-design")}
                className={`block ${
                  activeSection === "vtuber-design"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Design
              </a>
            </li>
          </ul>
        </li>

        {/* Video Editor (0 to 1) */}
        <li>
          <a
            href="#editor"
            onClick={(e) => handleSmoothScroll(e, "editor")}
            className={`block ${
              activeSection === "editor" ? "text-white" : "text-zinc-500"
            } hover:text-zinc-300`}
          >
            Video Editor
          </a>
          <ul className="pl-4 space-y-1">
            <li>
              <a
                href="#editor-background"
                onClick={(e) => handleSmoothScroll(e, "editor-background")}
                className={`block ${
                  activeSection === "editor-background"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Background
              </a>
            </li>
            <li>
              <a
                href="#editor-structure"
                onClick={(e) => handleSmoothScroll(e, "editor-structure")}
                className={`block ${
                  activeSection === "editor-structure"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Structure
              </a>
            </li>
            <li>
              <a
                href="#editor-competitor"
                onClick={(e) => handleSmoothScroll(e, "editor-competitor")}
                className={`block ${
                  activeSection === "editor-competitor"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Competitor
              </a>
            </li>
            <li>
              <a
                href="#editor-design"
                onClick={(e) => handleSmoothScroll(e, "editor-design")}
                className={`block ${
                  activeSection === "editor-design"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Design
              </a>
            </li>
          </ul>
        </li>

        {/* Prompt to Video (0 to 1) */}
        <li>
          <a
            href="#prompt"
            onClick={(e) => handleSmoothScroll(e, "prompt")}
            className={`block ${
              activeSection === "prompt" ? "text-white" : "text-zinc-500"
            } hover:text-zinc-300`}
          >
            Prompt to Video
          </a>
          <ul className="pl-4 space-y-1">
            <li>
              <a
                href="#prompt-background"
                onClick={(e) => handleSmoothScroll(e, "prompt-background")}
                className={`block ${
                  activeSection === "prompt-background"
                    ? "text-white"
                    : "text-zinc-500"
                } hover:text-zinc-300`}
              >
                Background
              </a>
            </li>
          </ul>
        </li>

        {/* Conclusion */}
        <li>
          <a
            href="#conclusion"
            onClick={(e) => handleSmoothScroll(e, "conclusion")}
            className={`block ${
              activeSection === "conclusion" ? "text-white" : "text-zinc-500"
            } hover:text-zinc-300`}
          >
            Conclusion
          </a>
        </li>
      </ul>
    </nav>
  );
}

useEffect(() => {
  const handleScroll = () => {
    const sections = [
      "background",
      "vtuber",
      "vtuber-competitor",
      "vtuber-design",
      "editor",
      "editor-background",
      "editor-structure",
      "editor-competitor",
      "editor-design",
      "prompt",
      "prompt-background",
      "conclusion",
    ];
    let currentSection = "background";
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Adjust the threshold for detecting active sections
        if (
          rect.top <= window.innerHeight * 0.2 &&
          rect.bottom >= window.innerHeight * 0.2
        ) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

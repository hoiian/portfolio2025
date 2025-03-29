import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const lastUpdated = new Date(document.lastModified);
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <footer className="text-white border-t-zinc-800 border-t-21 text-center pt-24">
      <h2 className="text-[16.5vw] whitespace-nowrap overflow-hidden font-extrabold italic">
        Let's connect
      </h2>
      <div className="flex justify-center p-5">
        <SocialIcons />
      </div>
      {/* <p className="mt-8 text-sm p-5">
        © {new Date().getFullYear()} Hoi Ian Wong. | All Rights Reserved. | 📅
        Last update in Feb. | 👩🏻‍💻 Crafted with React, Tailwind CSS, and Vite.
      </p> */}

      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} Hoi Ian Wong</span>
        <span className="hidden md:inline">|</span>
        <span>All Rights Reserved</span>
        <span className="hidden md:inline">|</span>
        <span>📅 Last updated on {formattedDate}</span>
        <span className="hidden md:inline">|</span>
        <span>👩🏻‍💻 Built with React, Tailwind CSS, and Vite</span>
      </div>
    </footer>
  );
}

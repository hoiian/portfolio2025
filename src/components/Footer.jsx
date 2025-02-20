import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="text-white border-t-zinc-800 border-t-21 text-center pt-24">
      <h2 className="text-[16.5vw] whitespace-nowrap overflow-hidden font-extrabold italic">Let's connect</h2>
      <div className="flex justify-center">
        <SocialIcons />
      </div>
      <p className="mt-8 text-sm">© {new Date().getFullYear()} Hoi Ian Wong. All Rights Reserved. 📅 Last update in Feb.
      👩🏻‍💻 Crafted with React, Tailwind CSS, and Vite.</p>
    </footer>
  );
}

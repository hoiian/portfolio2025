import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="p-20 text-white border-t-zinc-800 border-t-2">
      <h2 className="text-9xl font-extrabold italic mb-6">Let's connect</h2>
      <SocialIcons />
      <p className="mt-8 text-sm">© {new Date().getFullYear()} Hoi Ian Wong. All Rights Reserved. 📅 Last update on Feb.
      👩🏻‍💻 Crafted with React, Tailwind CSS, and Vite.</p>
    </footer>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="p-20 text-white border-t-zinc-800 border-t-2">
      <h2 className="text-9xl font-extrabold italic mb-6">Let's connect</h2>
      <p className="text-sm">© {new Date().getFullYear()} Hoi Ian Wong. All Rights Reserved. Last update on Feb. <br />
      Crafted with React, Tailwind CSS, and Vite.</p>
    </footer>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="p-20 text-center text-white border-t-zinc-800 border-t-2">
      <h2 className="text-9xl italic mb-6 text-left">Let's connect</h2>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

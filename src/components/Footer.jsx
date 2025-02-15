import React from "react";

export default function Footer() {
  return (
    <footer className="p-6 text-center text-white bg-black">
      <h2 className="text-9xl font-xanh italic mb-6 text-left tracking-tighter">Let's connect</h2>
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
}

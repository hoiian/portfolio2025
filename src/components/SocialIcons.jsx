import React, { useState } from "react";
import { Mail, Github, Instagram, Linkedin, Youtube } from "lucide-react";

export default function SocialIcons() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("hoiian96@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  };

  return (
    <div className="flex space-x-4 mt-5 relative">
      {/* Mail Icon - Copies to Clipboard */}
      <div className="relative group">
        <button onClick={copyToClipboard} className="focus:outline-none">
          <Mail size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </button>
        {/* Tooltip */}
        <span className={`absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition`}>
          {copied ? "Copied!" : "Copy Email"}
        </span>
      </div>

      {/* Github */}
      <div className="relative group">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          GitHub
        </span>
      </div>

      {/* Instagram */}
      <div className="relative group">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Instagram
        </span>
      </div>

      {/* LinkedIn */}
      <div className="relative group">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          LinkedIn
        </span>
      </div>

      {/* YouTube */}
      <div className="relative group">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          YouTube
        </span>
      </div>
    </div>
  );
}

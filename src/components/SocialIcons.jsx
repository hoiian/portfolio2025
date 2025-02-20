import React, { useState } from "react";
import { Mail, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import wechatQR from "../assets/images/wechatQRcode.png";


export default function SocialIcons() {
  const [copied, setCopied] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("hoiian96@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const copyWeChatID = () => {
    navigator.clipboard.writeText("A2018270109");
    setWechatCopied(true);
    setTimeout(() => setWechatCopied(false), 1500);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-5 relative">
      {/* Mail Icon - Copies to Clipboard */}
      <div className="relative group">
        <button onClick={copyToClipboard} className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full focus:outline-none">
          <Mail size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </button>
        <span className="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          {copied ? "Copied!" : "Copy Email"}
        </span>
      </div>

      {/* WeChat - Copies WeChat ID */}
      <div className="relative group">
        <button onClick={copyWeChatID} className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="text-zinc-100 hover:text-zinc-400">
            <path d="M6 5.83325H6.0075M10.9925 5.83325H11M15.1592 12.0833H15.1667M11.8333 12.0833H11.8408M8.5 13.3333C8.5 15.6341 10.7383 17.4999 13.5 17.4999C14.2558 17.4999 14.9725 17.3599 15.615 17.1099C15.7725 17.0491 15.9425 17.0266 16.1083 17.0574L18.5 17.4999L17.9567 15.8083C17.9205 15.6849 17.91 15.5555 17.9258 15.4279C17.9415 15.3004 17.9832 15.1774 18.0483 15.0666C18.3432 14.5364 18.4986 13.9399 18.5 13.3333C18.5 11.0324 16.2617 9.16659 13.5 9.16659C10.7383 9.16659 8.5 11.0324 8.5 13.3333Z" stroke="#F4F4F5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.0608 9.37417C15.1314 9.03528 15.1667 8.68833 15.1667 8.33333C15.1667 5.11167 12.1817 2.5 8.49999 2.5C4.81833 2.5 1.83333 5.11167 1.83333 8.33333C1.83333 9.26 2.08083 10.1367 2.51999 10.915C2.64249 11.1317 2.68333 11.3875 2.60999 11.6258L1.83333 14.1667L5.09499 13.5333C5.26833 13.4992 5.44666 13.5225 5.60916 13.5917C6.55629 13.9859 7.57422 14.1816 8.59999 14.1667" stroke="#F4F4F5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="w-28 absolute left-1/2 transform -translate-x-1/2 top-12 flex flex-col items-center p-2 bg-zinc-800 rounded opacity-0 group-hover:opacity-100 transition">
          <img src={wechatQR} alt="WeChat QR Code" className="mb-1" />
          <span className="whitespace-nowrap text-xs text-white">{wechatCopied ? "Copied!" : "Copy WeChat ID"}</span>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="relative group">
        <a href="https://www.linkedin.com/in/hoiianwong/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full">
          <Linkedin size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Let's connect on LinkedIn
        </span>
      </div>

      {/* Instagram */}
      <div className="relative group">
        <a href="https://www.instagram.com/note.hoi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full">
          <Instagram size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Reading logs on Instagram
        </span>
      </div>



      {/* YouTube */}
      <div className="relative group">
        <a href="https://www.youtube.com/@hoiian" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full">
          <Youtube size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Vlogs on YouTube
        </span>
      </div>

      {/* Github */}
      <div className="relative group">
        <a href="https://github.com/hoiian" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full">
          <Github size={20} strokeWidth={1} className="text-zinc-100 hover:text-zinc-400" />
        </a>
        <span className="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Code on GitHub
        </span>
      </div>
    </div>
  );
}

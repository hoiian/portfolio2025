import React, { useState } from "react";
import SocialIcons from "./SocialIcons";
import { Copy } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("hoiian96@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const lastUpdated = new Date(document.lastModified);
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <style jsx>{`
        .socialicons button,
        .socialicons a {
          background-color: transparent;
        }

        .socialicons .lucide,
        .socialicons svg {
          color: black;
        }
        .socialicons .lucide:hover,
        .socialicons svg:hover {
          color: rgb(161 161 170);
        }

        .socialicons .group:first-child {
          display: none;
        }
      `}</style>

      <footer className="text-black border-t-zinc-800 rounded-t-3xl text-center py-24 px-10 bg-zinc-50">
        <div className="max-w-[1360px]  mx-auto">
          <h2 className="min-[1360px]:text-[180px] text-[10vw] whitespace-nowrap uppercase">
            Let's connect
          </h2>
          <div className="socialicons flex flex-col md:flex-row items-center justify-between py-7 border-t border-black">
            <div className="flex items-center justify-between">
              <p className="text-black">hoiian96@gmail.com</p>
              <div className="relative group">
                <button
                  onClick={copyToClipboard}
                  className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full focus:outline-none"
                >
                  <Copy
                    size={20}
                    strokeWidth={1}
                    className="text-zinc-100 hover:text-zinc-400"
                  />
                </button>
                <span className="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </div>
            </div>
            <SocialIcons />
          </div>
          {/* <p className="mt-8 text-sm p-5">
        © {new Date().getFullYear()} Hoi Ian Wong. | All Rights Reserved. | 📅
        Last update in Feb. | 👩🏻‍💻 Crafted with React, Tailwind CSS, and Vite.
      </p> */}

          <div className="py-7 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 text-sm text-black border-t border-black">
            <span>© {new Date().getFullYear()} Hoi Ian Wong</span>
            {/* <span className="hidden md:inline">|</span> */}
            <span>All Rights Reserved</span>
            {/* <span className="hidden md:inline">|</span> 📅 */}
            <span>Last updated on {formattedDate}</span>
            {/* <span className="hidden md:inline">|</span> 👩🏻‍💻 */}
            <span>Built with React, Tailwind CSS, and Vite</span>
          </div>
        </div>
      </footer>
    </>
  );
}

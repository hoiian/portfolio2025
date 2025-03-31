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
      `}</style>

      <footer className="text-black border-t-zinc-800 rounded-t-3xl text-center py-24 px-10 bg-zinc-50">
        <div className="max-w-[1360px]  mx-auto">
          <h2 className="min-[1360px]:text-[180px] text-[11vw] whitespace-nowrap overflow-hidden uppercase">
            Let's connect
          </h2>
          <div className="socialicons flex flex-col md:flex-row items-center justify-between py-7 border-t border-black">
            <p className="text-black">hoiian96@gmail.com</p>
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

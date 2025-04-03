import React, { useState, useEffect } from "react";
import SocialIcons from "../components/SocialIcons";
import Header from "../components/Header";
import ProjectCarousel from "../components/ProjectCarousel";

const works = [
  {
    title: "Studio: Redefining AI-Powered Video Creation",
    image: "/images/placeholder-image.jpg",
    video: "/videos/work1/demo-all.mp4",
    link: "/work1",
    description:
      "Studio is an all-in-one content creation suite, enabling VTubers, AI creators, and digital influencers to stream, record, and edit videos seamlessly.",
  },

  {
    title: "Coming soon",
    image: "/images/megaeth-cover.png",
    video: "",
    link: "/work2",
    description: "",
  },
];

const funFactSentences = [
  "Bungee jumped three times, skydived once… and somehow still alive. 🪂",
  "Born and raised in Macau 🇲🇴—yes, the one with all the casinos.",
  "Currently reading *The Stranger* and having an existential crisis. 🤔",
  "Can use a mouse 🖱️ with both hands.",
  "Fueled by bubble tea 🧋—my daily survival juice.",
  "ChatGPT is my unofficial spokesperson. 🤖💬",
  "Gets things done with classical music BGM. 🎼✨",
  "Can sleep for over 18 hours straight. 😴",
  "Has nine ear piercings. 👂✨",
  "A proud Sudoku addict. 🔢",
  "An MBTI P-type who actually enjoys organizing and using Sheets. 📊✨",
];
function RotatingText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % funFactSentences.length);
        setFade(true);
      }, 300); // Fade-out duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h6
      className={`font-extralight text-xl text-zinc-200 my-4 transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {funFactSentences[index]}
    </h6>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  min-h-screen text-white flex flex-col p-5">
      {/* Floating Glow Effect */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="fixed top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 blur-[150px] rounded-full animate-floating-global"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-[1360px] mx-auto w-full py-20 min-h-[90vh] min-h-screen flex flex-col md:flex-row items-center">
        {/* <h1 className="text-[164px] uppercase text-left leading-none text-zinc-50">Hoi Ian <br /> Wong</h1> */}
        <div className="w-full md:w-2/3">
          <h1
            className={`pt-4 z-50 uppercase leading-none transition-all duration-500 text-zinc-50 mix-blend-difference  ${
              isScrolled ? "text-xl fixed top-0" : "text-[23vw] md:text-[164px]"
            }`}
          >
            Hoi Ian <br /> Wong
          </h1>

          <RotatingText />
          <SocialIcons />
        </div>

        <div className="w-full md:w-1/3 flex flex-col space-y-6 text-lg mt-10 md:mt-0">
          <div className="border-b border-zinc-900 pb-4">
            <span>💼</span>
            <h3 className="">Experience</h3>
            <p className="text-sm">3 Years full-time UX/UI design</p>
            <p className="text-sm">7 Years freelance Front-End programming</p>
          </div>
          <div className="border-b border-zinc-900 pb-4">
            <span>🗣</span>
            <h3 className="">Language</h3>
            <p className="text-sm">Cantonese, Mandarin & English</p>
          </div>
          <div>
            <span>🎓</span>
            <h3 className="">Education</h3>
            <p className="text-sm">Master’s @ Tsinghua University</p>
          </div>
        </div>
      </section>

      {/* Hologram Works Showcase */}
      <main className="max-w-[1360px] mx-auto flex-1 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="text-center md:text-left">
            <p className="mb-2 font-bold">2024</p>
            <h2 className="text-6xl italic mb-1">Latest Works</h2>
            <p className="mb-6">My most recent projects at Hologram</p>
          </div>

          <div>
            <a
              href="https://hologram.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="28"
                viewBox="0 0 154 28"
                fill="none"
              >
                <g clip-path="url(#clip0_488_2911)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.21427 11.3792C6.15589 12.223 6.125 13.0995 6.125 14C6.125 14.9003 6.15587 15.7766 6.21424 16.6202C8.09121 17.1023 10.4137 17.4185 12.9658 17.4864C13.062 16.4628 13.1172 15.3834 13.1247 14.2653C13.1241 14.1771 13.1239 14.0886 13.1239 14C13.1239 13.9114 13.1241 13.8229 13.1247 13.7347C13.1172 12.6165 13.062 11.5368 12.9658 10.5131C10.4137 10.5809 8.09123 10.8971 6.21427 11.3792ZM4.42748 11.9386C4.39287 12.6119 4.375 13.3003 4.375 14C4.375 14.6995 4.39286 15.3878 4.42745 16.0608C3.56997 15.7339 2.906 15.3765 2.44805 15.0156C1.88363 14.5707 1.75 14.2209 1.75 13.9997C1.75 13.7786 1.88363 13.4287 2.44805 12.9839C2.906 12.623 3.56998 12.2656 4.42748 11.9386ZM4.5737 10.0327C4.5297 10.047 4.48597 10.0613 4.44251 10.0758C3.20397 10.4887 2.13855 10.9996 1.3648 11.6095C0.600908 12.2115 0 13.0126 0 13.9997C0 14.9868 0.600908 15.788 1.3648 16.39C2.13855 16.9998 3.20397 17.5108 4.44251 17.9236C4.48595 17.9381 4.52966 17.9525 4.57364 17.9668C4.7918 20.0864 5.18142 21.9976 5.70141 23.5575C6.11428 24.796 6.6252 25.8614 7.23502 26.6352C7.83708 27.3991 8.63821 28 9.62531 28C10.6124 28 11.4135 27.3991 12.0156 26.6352C12.6254 25.8614 13.1363 24.796 13.5492 23.5575C13.7127 23.0671 13.8633 22.5419 13.9997 21.9864C14.1362 22.5419 14.2868 23.0671 14.4503 23.5575C14.8631 24.796 15.3741 25.8614 15.9839 26.6352C16.5859 27.3991 17.3871 28 18.3742 28C19.3613 28 20.1624 27.3991 20.7645 26.6352C21.3743 25.8614 21.8852 24.796 22.2981 23.5575C22.818 21.9977 23.2077 20.0865 23.4258 17.967C23.47 17.9526 23.5139 17.9382 23.5575 17.9236C24.796 17.5108 25.8614 16.9998 26.6352 16.39C27.3991 15.788 28 14.9868 28 13.9997C28 13.0126 27.3991 12.2115 26.6352 11.6095C25.8614 10.9996 24.796 10.4887 23.5575 10.0758C23.5139 10.0613 23.4699 10.0468 23.4258 10.0325C23.2076 7.91321 22.818 6.00218 22.2981 4.44251C21.8852 3.20397 21.3743 2.13855 20.7645 1.3648C20.1624 0.600908 19.3613 0 18.3742 0C17.3871 0 16.5859 0.600908 15.9839 1.3648C15.3741 2.13855 14.8631 3.20397 14.4503 4.44251C14.2868 4.93294 14.1362 5.45811 13.9997 6.01358C13.8633 5.45811 13.7127 4.93294 13.5492 4.44251C13.1363 3.20397 12.6254 2.13855 12.0156 1.3648C11.4135 0.600908 10.6124 0 9.62531 0C8.63821 0 7.83708 0.600908 7.23502 1.3648C6.6252 2.13855 6.11428 3.20397 5.70141 4.44251C5.18146 6.00222 4.79187 7.91331 4.5737 10.0327ZM6.3911 9.53583C8.25096 9.11065 10.424 8.83998 12.7548 8.76845C12.542 7.34376 12.2461 6.06698 11.889 4.99594C11.5101 3.85932 11.0782 3.00262 10.6412 2.44805C10.1963 1.88363 9.84642 1.75 9.62531 1.75C9.40419 1.75 9.05431 1.88363 8.60946 2.44805C8.17238 3.00262 7.74049 3.85932 7.36159 4.99594C6.94157 6.2559 6.60607 7.80059 6.3911 9.53583ZM15.0337 10.5131C14.9375 11.5368 14.8823 12.6164 14.8748 13.7347C14.8753 13.8229 14.8756 13.9114 14.8756 14C14.8756 14.0886 14.8753 14.1771 14.8748 14.2653C14.8823 15.3834 14.9375 16.4628 15.0337 17.4864C17.5858 17.4186 19.9082 17.1024 21.7852 16.6204C21.8436 15.7767 21.8745 14.9003 21.8745 14C21.8745 13.0995 21.8436 12.2229 21.7852 11.3791C19.9082 10.897 17.5858 10.5809 15.0337 10.5131ZM21.6084 9.53571C19.7485 9.11057 17.5754 8.83993 15.2447 8.76843C15.4574 7.34375 15.7534 6.06698 16.1105 4.99594C16.4893 3.85932 16.9212 3.00262 17.3583 2.44805C17.8032 1.88363 18.1531 1.75 18.3742 1.75C18.5953 1.75 18.9452 1.88363 19.39 2.44805C19.8271 3.00262 20.259 3.85932 20.6379 4.99594C21.0579 6.25587 21.3934 7.80051 21.6084 9.53571ZM23.572 11.9384C23.6066 12.6117 23.6245 13.3002 23.6245 14C23.6245 14.6996 23.6066 15.3879 23.572 16.061C24.4298 15.734 25.0939 15.3766 25.5519 15.0156C26.1164 14.5707 26.25 14.2209 26.25 13.9997C26.25 13.7786 26.1164 13.4287 25.5519 12.9839C25.0939 12.6229 24.4297 12.2654 23.572 11.9384ZM21.6084 18.4638C19.7485 18.8889 17.5754 19.1596 15.2446 19.231C15.4574 20.6559 15.7534 21.9329 16.1105 23.0041C16.4893 24.1407 16.9212 24.9974 17.3583 25.5519C17.8032 26.1164 18.1531 26.25 18.3742 26.25C18.5953 26.25 18.9452 26.1164 19.39 25.5519C19.8271 24.9974 20.259 24.1407 20.6379 23.0041C21.0579 21.744 21.3935 20.1992 21.6084 18.4638ZM12.7549 19.231C10.4241 19.1595 8.25093 18.8888 6.39103 18.4636C6.606 20.1991 6.94153 21.744 7.36159 23.0041C7.74049 24.1407 8.17238 24.9974 8.60946 25.5519C9.05431 26.1164 9.40419 26.25 9.62531 26.25C9.84642 26.25 10.1963 26.1164 10.6412 25.5519C11.0782 24.9974 11.5101 24.1407 11.889 23.0041C12.2461 21.9329 12.5421 20.6559 12.7549 19.231Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M45.2162 12.6736H38.6279V8.33301H35.4375V19.6872H38.6279V14.993H45.2162V19.6872H48.4277V8.33301H45.2162V12.6736Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M58.3858 8.33301H55.9622C51.9523 8.33301 49.8523 10.3161 49.8523 14.0188C49.8523 17.7215 51.9523 19.6872 55.9622 19.6872H58.3858C62.3958 19.6872 64.4958 17.7007 64.4958 14.0188C64.4958 10.3369 62.3958 8.33301 58.3858 8.33301ZM57.823 17.451H56.3386C53.609 17.451 53.0603 15.8008 53.0603 14.0188C53.0603 12.2368 53.6055 10.5865 56.3386 10.5865H57.823C60.725 10.5865 61.2878 12.2333 61.2878 14.0188C61.2878 15.8042 60.725 17.451 57.823 17.451Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M86.5748 8.33301H84.1512C80.1412 8.33301 78.0413 10.3196 78.0413 14.0188C78.0413 17.718 80.1412 19.6872 84.1512 19.6872H86.5748C90.5848 19.6872 92.6847 17.7007 92.6847 14.0188C92.6847 10.3369 90.5883 8.33301 86.5748 8.33301ZM86.012 17.451H84.5276C81.798 17.451 81.2492 15.8008 81.2492 14.0188C81.2492 12.2368 81.7945 10.5865 84.5276 10.5865H86.012C88.9139 10.5865 89.4767 12.2333 89.4767 14.0188C89.4767 15.8042 88.9139 17.451 86.012 17.451Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M99.8117 14.993H103.635V17.3644H99.4353C97.4374 17.3644 97.0786 16.1197 97.0786 14.0153C97.0786 11.9109 97.4374 10.7009 99.4353 10.7009H106.467V8.33301H98.9394C95.6786 8.33301 93.8882 10.167 93.8882 14.0188C93.8882 17.8705 95.6786 19.6872 98.9394 19.6872H106.516V12.9406H99.8082V14.993H99.8117Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M121.423 12.1362C121.423 9.5291 120.196 8.33301 116.953 8.33301H108.521V19.6872H111.645V15.9187H115.623L118.286 19.6872H122.039L118.915 15.6482C120.674 15.1594 121.423 14.102 121.423 12.1328V12.1362ZM116.815 13.6686H111.645V10.7044H116.815C117.857 10.7044 118.25 10.9748 118.25 12.1674C118.25 13.3601 117.857 13.6651 116.815 13.6651V13.6686Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M129.387 8.33301C128.43 8.33301 127.579 8.86345 127.164 9.71285L122.331 19.6872H125.447L126.531 17.451H132.236L133.32 19.6872H136.44L131.607 9.71285C131.195 8.85998 130.344 8.33301 129.383 8.33301H129.387ZM127.53 15.3986L129.387 11.5642L131.244 15.3986H127.526H127.53Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M68.9026 8.33301H66.0886V17.2534C66.0886 18.5917 67.1931 19.6803 68.5509 19.6803H77.2216V16.9067H68.9026V8.33301Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M152.043 8.42394C151.006 8.10845 149.898 8.48982 149.282 9.37388L145.568 14.7303L141.857 9.37388C141.245 8.48982 140.137 8.10845 139.095 8.42394C138.058 8.73944 137.361 9.67204 137.361 10.7433V19.6915H140.175V11.8631L143.535 16.7099C143.992 17.3721 144.755 17.7673 145.568 17.7673C146.38 17.7673 147.144 17.3721 147.601 16.7099L150.964 11.8597V19.6845H153.778V10.7399C153.778 9.66857 153.081 8.73597 152.043 8.42048V8.42394Z"
                    fill="#D4D4D8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_488_2911">
                    <rect width="154" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          <a
            href={works[0].link}
            className="group block relative col-span-1 lg:col-span-2 overflow-hidden transform transition hover:rotate-1"
          >
            <div className="bg-[linear-gradient(108deg,#2DEDD0_0%,#2474DD_100%)] rounded-3xl md:h-[460px] p-6 flex items-center justify-center">
              {/* <img  alt={works[0].title} className="  w-full object-cover group-hover:opacity-80 transition" /> */}
              <video
                src={works[0].video}
                loop
                playsInline
                autoPlay
                muted
                className=" transition-opacity duration-500 max-w-[80%] max-h-[90%] rounded-xl shadow-xl"
              />
            </div>

            <div className="p-4 text-white">
              <h3 className="text-2xl italic">{works[0].title}</h3>
              <p className="text-sm">{works[0].description}</p>
            </div>
          </a>
          <a
            // href={works[1].link}

            className="group block relative col-span-1 overflow-hidden transform transition hover:rotate-1"
          >
            <div className="bg-[linear-gradient(142deg,#A22BC7_0%,#F17256_100%)] rounded-3xl md:h-[460px] p-6 flex items-center justify-center">
              <img
                alt={works[1].title}
                src={works[1].image}
                className=" max-w-[50%] max-h-[90%] object-cover group-hover:opacity-80 transition blur"
              />
            </div>
            <div className="p-4 text-white">
              <h3 className="text-2xl italic">{works[1].title}</h3>
              <p className="text-sm">{works[1].description}</p>
            </div>
          </a>
        </div>
      </main>

      <main className="flex-1 py-20">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="text-center md:text-left">
            <p className="mb-2 font-bold">2021 - 2023</p>
            <h2 className="text-6xl italic mb-1">Past Works</h2>
            <p className="mb-6">
              A collection of projects from my time at NetEase.
            </p>
          </div>

          <div>
            <a
              href="https://www.neteasegames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <img
                src="/images/neteaseLogo.png"
                alt="NetEase Logo"
                className="mb-1 w-[120px]"
              />
            </a>
          </div>
        </div>
        <ProjectCarousel />
      </main>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes floating-global {
            0% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            25% { transform: translate(-50%, -50%) translate(220px, -80px) scale(1.1); }
            50% { transform: translate(-50%, -50%) translate(-90px, 190px) scale(1.2); }
            75% { transform: translate(-50%, -50%) translate(100px, -100px) scale(1.1); }
            100% { transform: translate(-50%, -50%) translate(0px, 0px); scale(1) }
          }
          .animate-floating-global {
            animation: floating-global 40s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
}

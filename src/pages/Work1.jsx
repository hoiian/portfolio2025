import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Work1BeforeAfter from "../components/Work1BeforeAfter";
import { ChevronLeft } from "lucide-react";

export default function Work1() {
  const [activeSection, setActiveSection] = useState("background");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["background", "vtuber", "editor"];
      let currentSection = "background";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col mx-auto relative">
      {/* Fixed Right Navigation */}
      <nav className="fixed top-20 left-6 bg-zinc-900 bg-opacity-10 p-4 rounded-xl shadow-lg w-48">
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#background"
              className={`block ${
                activeSection === "background" ? "text-white" : "text-zinc-500"
              } hover:text-zinc-300`}
            >
              Background
            </a>
          </li>
          <li>
            <a
              href="#vtuber"
              className={`block ${
                activeSection === "vtuber" ? "text-white" : "text-zinc-500"
              } hover:text-zinc-300`}
            >
              Vtuber Playground
            </a>
          </li>
          <li>
            <a
              href="#editor"
              className={`block ${
                activeSection === "editor" ? "text-white" : "text-zinc-500"
              } hover:text-zinc-300`}
            >
              Video Editor
            </a>
          </li>
        </ul>
      </nav>
      {/* Header with Back Button */}
      <header className="p-6 fixed top-2 left-2">
        <Link
          to="/"
          className="text-zinc-100 pl-3 pr-5 py-2 rounded-sm w-auto text-left border border-zinc-400 hover:bg-zinc-800 flex items-center justify-between gap-1"
        >
          <ChevronLeft strokeWidth={1} />
          Back
        </Link>
      </header>
      {/* Work1 Content */}
      <div className="flex-1 pt-48 pb-32 text-center max-w-4xl mx-auto">
        {/* Floating Glow Effect */}
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1095px] h-[421px] rounded-[1095px] bg-white/20 blur-[150px] z-[-1]"></div>

        <div className="max-w-3xl mx-auto mb-16 ">
          <span>Hologram, 2024</span>
          <h1 className="mt-3 italic text-4xl">
            Studio: Redefining AI-Powered Video Creation
          </h1>
        </div>
        <video autoPlay loop muted playsInline className="rounded-2xl">
          <source src="/videos/work1/demo-FullStudio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto py-24">
        <div>
          <h2 className="text-3xl italic">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-white">
            <div className="md:col-span-2">
              <p className="text-zinc-400 mt-2">
                Studio is an all-in-one content creation suite, enabling
                VTubers, AI creators, and digital influencers to stream, record,
                and edit videos seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 md:col-span-2">
              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  📅 Duration
                </span>
                <span className="text-zinc-400 ml-6">2 months</span>
              </div>

              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  🏷 Role
                </span>
                <span className="text-zinc-400 ml-6">UXUI Designer</span>
              </div>

              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  🔧 Tool
                </span>
                <span className="text-zinc-400 ml-6">Figma</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl italic mb-4">Timeline</h2>
          <img
            src="/images/work1/timeline.png"
            alt="Studio Timeline"
            className="mb-1 w-full"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* Background Section */}
      <section id="background" className="max-w-6xl mx-auto py-24">
        <h2 className="text-[11vw] md:text-[184px] whitespace-nowrap font-extrabold italic text-center">
          Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-200">
          {/* <!-- 左側空間 (1/3) --> */}
          <div className="hidden md:block"></div>

          {/* <!-- 右側文字 (2/3) --> */}
          <div className="md:col-span-2 text-2xl leading-relaxed max-w-3xl">
            <p className="mt-4">
              Video creation has always been a top demand for Hologram. Our goal
              is to transform HoloStudio into a complete content creation
              platform for users. Today’s creators rely on their digital
              identities—avatars, PFPs, and IPs—and we're focusing on talking
              videos, a format popular on TikTok, YouTube, and Twitch. Hologram
              uniquely lets users have their personalized AI avatars speak on
              their behalf.
            </p>
            <p className="mt-6">
              The current studio is a basic canvas for one-time short clips
              (with face tracking, background change, and picture-in-picture
              mode), but it lacks the full editing experience—combining multiple
              tracks and advanced effects—that creators need. We envision a
              studio modeled after tools like TikTok’s editor and CapCut,
              offering seamless recording, editing, and interaction all in one.
            </p>
          </div>
        </div>
      </section>
      <Work1BeforeAfter />
      {/* Vtuber Playground */}
      {/* <section id="Vtuber" className="p-8 border-t border-zinc-800">
        <div className="flex flex-row items-center justify-between text-5xl italic">
          <h2 className="">Vtuber Playground</h2>
          <h2>01</h2>
        </div>
        <div className="flex flex-row items-center justify-between">
          <video autoPlay loop muted playsInline>
            <source
              src="/videos/work1/demo-VtuberPlayground-before.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted playsInline>
            <source
              src="/videos/work1/demo-VtuberPlayground.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-row items-center justify-between text-4xl mt-10">
          <h2 className="italic">Problem</h2>
          <h2>🔍</h2>
        </div>
      </section> */}

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* Vtuber Playground Section */}
      <section
        id="vtuber"
        className="border-t border-zinc-800 max-w-[1360px] mx-auto py-16"
      >
        <h2 className="text-[11vw] md:text-[143px] whitespace-nowrap font-extrabold italic text-center">
          Vtuber Playground
        </h2>

        <div className="flex items-center justify-between gap-20 relative my-10">
          <video
            className="flex-1 w-[637.5px] h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/videos/work1/demo-VtuberPlayground-before.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="flex-1 w-[637.5px] h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/videos/work1/demo-VtuberPlayground.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            src="/images/work1/vtuber/compareLine.png"
            alt="compareLine"
            className="absolute top-[44px] left-[621px] w-[564px]"
          />
        </div>

        <div className="max-w-6xl mx-auto py-36  md:px-5 px-3">
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-32 items-start">
            {/* Left 1/3 - Title */}
            <h2 className="text-5xl md:text-6xl font-extrabold italic">
              Exploration
            </h2>

            {/* Right 2/3 - Description */}
            <p className="md:col-span-2 text-zinc-300">
              Before finalizing the toolbar redesign, I explored layouts from
              similar livestream platforms and interaction patterns from meeting
              apps to enhance usability, efficiency, and seamless AI avatar
              integration.
            </p>
          </div>

          {/* Exploration - 1.Hyper */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {/* Left 1/3 - Text Content */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase text-zinc-400">
                Livestreaming Platform
              </h3>
              <h4 className="text-3xl italic font-semibold mt-2">Hyper</h4>
              <p className=" text-zinc-300 mt-4">
                Hyper Online, a leading VTubing and livestreaming platform,
                features motion capture, avatar customization, and real-time
                broadcasting. Its center-bottom toolbar ensures quick, intuitive
                access to essential controls for a seamless user experience.
              </p>

              <h4 className="text-lg font-bold mt-6 text-white">
                Impact on Studio’s Livestream Playground
              </h4>
              <p className="text-zinc-300 mt-2">
                Inspired by Hyper’s user-centric design, I relocated Studio’s
                toolbar from the right to center-bottom, improving
                accessibility, efficiency, and focus while keeping the interface
                clean and intuitive.
              </p>
            </div>

            {/* Right 1/3 - Hyper Logo */}
            <div className="flex justify-end mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="17"
                viewBox="0 0 132 17"
                fill="none"
              >
                <path
                  d="M18.986 10.9933V16.5222H25.3099V0.333008H18.986V5.8619H9.50619V0.333008H3.19434V16.5222H9.50619V10.9933H18.986Z"
                  fill="white"
                />
                <path
                  d="M35.7632 0.357422H28.2588L37.3411 11.0177V16.5466H43.653V11.0177L48.1941 5.68756L52.7353 0.357422H45.2429L40.497 6.16336L35.7632 0.357422Z"
                  fill="white"
                />
                <path
                  d="M61.9959 7.8491V5.09068H69.705C70.0784 5.09068 70.4037 5.22318 70.6686 5.50022C70.9457 5.76523 71.0782 6.09045 71.0782 6.47591C71.0782 6.84933 70.9457 7.17455 70.6686 7.4516C70.4037 7.7166 70.0784 7.8491 69.705 7.8491H61.9959ZM55.6841 0.35679V16.546H61.9959V12.595H71.283C74.6196 12.6432 77.4503 9.81248 77.4021 6.47591C77.4503 3.12726 74.6196 0.320654 71.283 0.35679H55.6841Z"
                  fill="white"
                />
                <path
                  d="M81.5916 16.5466H100.539V12.3909H87.9034V10.3191H100.539V6.5729H87.9034V4.50108H100.539V0.357422H81.5916V16.5466Z"
                  fill="white"
                />
                <path
                  d="M106.366 0.345072V16.5342H112.678V12.5833H118.316L121.363 16.5342H128.085L124.556 11.9931C125.615 11.4992 126.471 10.7524 127.109 9.77673C127.759 8.78897 128.085 7.68079 128.085 6.4642C128.133 3.11554 125.303 0.308935 121.966 0.345072H106.366ZM120.375 5.07896C121.146 5.07896 121.761 5.69328 121.761 6.4642C121.761 6.8376 121.629 7.16283 121.351 7.43988C121.087 7.70488 120.761 7.83738 120.375 7.83738H112.678V5.07896H120.375Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <img
              src="/images/work1/vtuber/exploration/hyper1.png"
              alt="Hyper Livestream Interface"
              className="rounded-xl shadow-lg"
            />
            <img
              src="/images/work1/vtuber/exploration/hyper2.png"
              alt="Hyper Avatar Builder"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Exploration - 2. Google Meet */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {/* Left 1/3 - Text Content */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase text-zinc-400">
                Meeting Platform
              </h3>
              <h4 className="text-3xl italic font-semibold mt-2">
                Google Meet
              </h4>
              <p className=" text-zinc-300 mt-4">...</p>
            </div>

            {/* Right 1/3 - Logo */}
            <div className="flex1 justify-end1 flex mt-5">
              <img
                src="/images/work1/vtuber/exploration/logo-googlemeet.png"
                alt="Google Meet"
                className="w-[170px] object-contain ml-auto "
              />
            </div>
          </div>

          <video autoPlay loop muted playsInline className="rounded-2xl">
            <source
              src="/videos/work1/vtuber/exploration/2-GoogleMeet.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
            {/* Card 1: Streamlined Device Settings */}
            <div className="flex flex-col  ">
              <div className="bg-[#1E1E20]  h-[300px] w-full rounded-3xl overflow-hidden mb-4 p-5 flex justify-center items-center">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/vtuber/exploration/2-GoogleMeet-Setting.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-3xl">Streamlined Device Settings</h3>
              <p className="text-zinc-300 mt-2">
                Consolidated for easier access and better discoverability.
              </p>
            </div>

            {/* Card 2: Clear Hover Labels */}
            <div className="flex flex-col ">
              <div className="bg-[#1E1E20] h-[300px] w-full rounded-3xl overflow-hidden mb-4 p-5 flex items-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="scale-[180%] ml-40"
                >
                  <source
                    src="/videos/work1/vtuber/exploration/2-GoogleMeet-Hover.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-3xl">Clear Hover Labels</h3>
              <p className="text-zinc-300 mt-2">
                Use verb + noun instead of single words.
                <br /> ✅ Turn on microphone <br /> ❌ Microphone
              </p>
            </div>

            {/* Card 3: Toast Notifications */}
            <div className="flex flex-col ">
              <div className="bg-zinc-900 h-[300px] w-full rounded-3xl overflow-hidden mb-4 flex justify-center items-center">
                <img
                  src="/images/work1/vtuber/exploration/toast.png"
                  alt="Toast Notifications"
                  className="w-60 object-cover"
                />
              </div>
              <h3 className="text-3xl">Toast Notifications</h3>
              <p className="text-zinc-300 mt-2">
                Reduce confusion and prevent awkward moments by clearly
                confirming mic and camera toggles.
              </p>
            </div>
          </div>

          {/* Exploration - 3. Figma */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {/* Left 1/3 - Text Content */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase text-zinc-400">
                Design Tool
              </h3>
              <h4 className="text-3xl italic font-semibold mt-2">Figma</h4>
              <p className=" text-zinc-300 mt-4">...</p>
            </div>

            {/* Right 1/3 - Logo */}
            <div className="flex1 justify-end flex mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="49"
                fill="none"
                viewBox="0 0 33 49"
                aria-label="Homepage"
                class="css-7vzs6a"
              >
                <path
                  fill="#00B6FF"
                  d="M16.5 23.612a7.28 7.28 0 0 1 7.28-7.279h1.053a8.167 8.167 0 1 1 0 16.333H23.78a7.28 7.28 0 0 1-7.279-7.279z"
                ></path>
                <path
                  fill="#24CB71"
                  d="M0 40.834a8.167 8.167 0 0 1 8.167-8.167H16.5v8.083c0 4.557-3.735 8.25-8.292 8.25C3.698 49 0 45.344 0 40.834"
                ></path>
                <path
                  fill="#FF7237"
                  d="M16.5 0v16.333h8.333a8.167 8.167 0 1 0 0-16.333z"
                ></path>
                <path
                  fill="#FF3737"
                  d="M0 8.166a8.167 8.167 0 0 0 8.167 8.167H16.5V0H8.167A8.167 8.167 0 0 0 0 8.166"
                ></path>
                <path
                  fill="#874FFF"
                  d="M0 24.5a8.167 8.167 0 0 0 8.167 8.167H16.5V16.334H8.167A8.167 8.167 0 0 0 0 24.5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-5">
            {/* Card 1:   */}
            <div className="flex flex-col  ">
              <div className="bg-[#1E1E20]  h-[300px] w-full rounded-3xl overflow-hidden mb-4 ">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/vtuber/exploration/3-FigJam-Toolbar.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-3xl">FigJam</h3>
              <p className="text-zinc-300 mt-2">..</p>
            </div>

            {/* Card 2:   */}
            <div className="flex flex-col ">
              <div className="bg-[#1E1E20] h-[300px] w-full rounded-3xl overflow-hidden mb-4 ">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/vtuber/exploration/3-Figma-Toolbar.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-3xl">Figma</h3>
              <p className="text-zinc-300 mt-2">..</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-36  md:px-5 px-3">
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-32 items-start">
            {/* Left 1/3 - Title */}
            <h2 className="text-5xl md:text-6xl font-extrabold italic">
              Design
            </h2>

            {/* Right 2/3 - Description */}
            <p className="md:col-span-2 text-zinc-300">
              Before: Tools were cluttered on the left, breaking user flow.
              After: Centered toolbar, following standard video platforms like
              TikTok Live.
            </p>
          </div>

          {/* Design - 1.Avatar selection */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {/* Left 1/3 - Text Content */}
            <div className="md:col-span-1">
              <h4 className="text-3xl italic font-semibold mt-2">
                1. Avatar Selection
              </h4>
              <h4 className="text-lg font-bold mt-6 text-white">
                Simplified Navigation
              </h4>
              <p className=" text-zinc-300 mt-1">
                Reduced hierarchy for a more intuitive experience; each section
                contains only one or two layers to minimize unnecessary clicks.
              </p>

              <h4 className="text-lg font-bold mt-6 text-white">
                Compact Thumbnails
              </h4>
              <p className="text-zinc-300 mt-1">
                Smaller thumbnails allow more projects to be displayed per
                screen, improving scannability and accessibility.
              </p>
            </div>

            {/* Right 2/3 */}
            <div className="flex justify-end bg-zinc-900 md:col-span-2 rounded-xl">
              <video autoPlay loop muted playsInline className="w-1/2">
                <source
                  src="/videos/work1/vtuber/design/menu-before.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <video autoPlay loop muted playsInline className="w-1/2">
                <source
                  src="/videos/work1/vtuber/design/menu.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Design - 2.Device Setting */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {/* Left 1/3 - Text Content */}
            <div className="md:col-span-1">
              <h4 className="text-3xl italic font-semibold mt-2">
                2. Device Setting
              </h4>
              <h4 className="text-lg font-bold mt-6 text-white">
                Streamlined Device Settings
              </h4>
              <p className=" text-zinc-300 mt-1">
                Consolidated for easier access and better discoverability.
              </p>
            </div>

            {/* Right 2/3 */}
            <div className="flex justify-end bg-zinc-900 md:col-span-2 rounded-xl">
              {" "}
              <video autoPlay loop muted playsInline className="w-1/2">
                <source
                  src="/videos/work1/vtuber/design/setting-before.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <video autoPlay loop muted playsInline className="w-1/2">
                <source
                  src="/videos/work1/vtuber/design/setting.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* VVideo Editor */}
      <section
        id="editor"
        className="border-t border-zinc-800 max-w-[1360px] mx-auto py-16"
      >
        <h2 className="text-[11vw] md:text-[216px] whitespace-nowrap font-extrabold italic text-center">
          Video Editor
        </h2>
      </section>

      {/* Key Features Section */}
      {/* <section id="features" className="p-8 border-t border-zinc-800">
        <h2 className="text-5xl italic">Key Features</h2>
        <p className="mt-4">
          What makes Studio unique and how it empowers creators.
        </p>
      </section> */}
      {/* Next Project Link */}
      <div className="p-6 text-center">
        <Link to="/work2" className="italic hover:underline text-4xl">
          Next Project →
        </Link>
      </div>
    </div>
  );
}

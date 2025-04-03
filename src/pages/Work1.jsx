import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Work1BeforeAfter from "../components/Work1BeforeAfter";
import SectionNav from "../components/SectionNav";
import {
  ChevronLeft,
  MoveRight,
  MoveDown,
  CircleX,
  CircleCheck,
} from "lucide-react";

export default function Work1() {
  const [activeSection, setActiveSection] = useState("background");
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const AIGeneratorSteps = [
    {
      step: "STEP 1",
      title: "Input prompt",
      description: [
        "Input box / entry button?",
        "How to guide the user?",
        "How to display the final result?",
      ],
    },
    {
      step: "STEP 2",
      title: "Edit Script, select style",
      description: [
        "One page or split into two steps?",
        "What is the editing difference between single-person and two-person dialogue?",
        "Is the script edited as a whole or line by line?",
      ],
    },
    {
      step: "STEP 3",
      title: "Generate video",
      description: ["How to quickly set the ratio?"],
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col mx-auto relative">
      <SectionNav />

      {/* Header with Back Button */}
      <div className="w-8 h-8 fixed top-0 left-0 bg-gradient-to-b from-zinc-950 to-zinc-950/60 backdrop-blur-lg hover:text-zinc-400 ">
        <Link
          to="/"
          // className="text-zinc-100 pl-3 pr-5 py-2 rounded-sm w-auto text-left border border-zinc-400 hover:bg-zinc-800 flex items-center justify-between gap-1"
        >
          <ChevronLeft strokeWidth={1} size={28} />
        </Link>
      </div>
      {/* Work1 Content */}
      <div className="flex flex-col items-center justify-center pt-48">
        {/* Floating Glow Effect */}
        <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-full md:max-w-[885px] h-[600px] rounded-[1095px] bg-white/20 blur-[150px] z-[-1]"></div>

        <div className="md:max-w-3xl w-full mx-auto mb-16 text-center">
          <span>Hologram, 2024</span>
          <h1 className="mt-3 text-4xl">
            Studio: Redefining AI-Powered Video Creation
          </h1>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl border-[16px] border-black md:max-w-4xl w-full md:mx-auto"
        >
          <source
            src="/videos/work1/videoeditor/demo-videoeditor-fromhome.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="max-h-[30px] max-w-[968px] bg-black rounded-t-2xl"></div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto py-24 px-4">
        <div>
          <h2 className="text-3xl">Overview</h2>
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
          <h2 className="text-3xl mb-4">Timeline</h2>
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
      <section id="background" className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-200">
          {/* <!-- 左側空間 (1/3) --> */}
          <div className="hidden md:block"></div>

          {/* <!-- 右側文字 (2/3) --> */}
          <div className="md:col-span-2 text-2xl leading-relaxed md:max-w-3xl w-full">
            <h2 className="md:text-9xl text-6xl">Background</h2>
            <p className="mt-4">
              Video creation has always been a top demand for Hologram. Our goal
              is to transform HoloStudio into a{" "}
              <span className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-black px-1 rounded">
                complete content creation platform
              </span>{" "}
              for users. Today’s creators rely on their digital
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

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>

      <Work1BeforeAfter />
      {/* Vtuber Playground */}

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* Vtuber Playground Section */}
      <section id="vtuber" className="py-44 w-full px-4 mx-auto">
        <div className="flex flex-col space-y-4 items-center text-center">
          <h2 className="md:text-9xl text-6xl">Vtuber Playground</h2>
          <p className="md:max-w-3xl w-full">
            Real-time AI avatar streaming with enhanced interactivity. Real-time
            AI avatar streaming with enhanced interactivity. Real-time AI avatar
            streaming with enhanced interactivity. Real-time AI avatar streaming
            with enhanced interactivity.
          </p>
        </div>

        <div className="flex  items-center justify-between  my-24 bg-black max-w-full mx-auto md:py-52 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20 relative w-full px-4 md:max-w-[1360px] md:mx-auto">
            <div>
              <h3 className="text-3xl flex items-center justify-center mb-2">
                Before
              </h3>
              <video
                className="flex-1 max-w-[637.5px] w-full h-auto object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source
                  src="/videos/work1/demo-VtuberPlayground-before.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h3 className="text-3xl flex items-center justify-center mb-2">
                After
              </h3>
              <video
                className="flex-1 max-w-[637.5px] w-full h-auto object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source
                  src="/videos/work1/demo-VtuberPlayground.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <img
              src="/images/work1/vtuber/compareLine.png"
              alt="compareLine"
              className="hidden lg:block absolute top-[94px] left-[621px] w-[564px] "
            />
          </div>
        </div>

        <div
          id="vtuber-competitor"
          className="max-w-6xl mx-auto py-36 md:px-5 px-3"
        >
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left 2/3 - Title + Description */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl md:text-6xl">Competitor</h2>
              <p className=" text-zinc-300">
                Before finalizing the toolbar redesign, I explored layouts from
                similar livestream platforms and interaction patterns from
                meeting apps to enhance usability, efficiency, and seamless AI
                avatar integration.
              </p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="130"
                viewBox="0 0 132 130"
                fill="none"
              >
                <circle cx="46.5" cy="46.5" r="46" stroke="white" />
                <line
                  x1="80.3536"
                  y1="78.6464"
                  x2="131.354"
                  y2="129.646"
                  stroke="white"
                />
              </svg>
            </div>
          </div>

          {/* Exploration - 1.Hyper */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 1/3 - Text Content */}
              <div className="md:col-span-2">
                <p className="text-sm font-bold text-zinc-400">
                  Livestreaming Platform
                </p>
                <h4 className="text-3xl mt-2">Hyper</h4>
                <p className=" text-zinc-300 mt-4">
                  Hyper Online, a leading VTubing and livestreaming platform,
                  features motion capture, avatar customization, and real-time
                  broadcasting. Its center-bottom toolbar ensures quick,
                  intuitive access to essential controls for a seamless user
                  experience.
                </p>

                <h4 className="text-lg font-bold mt-6 text-white">
                  Impact on Studio’s Livestream Playground
                </h4>
                <p className="text-zinc-300 mt-2">
                  Inspired by Hyper’s user-centric design, I relocated Studio’s
                  toolbar from the right to center-bottom, improving
                  accessibility, efficiency, and focus while keeping the
                  interface clean and intuitive.
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
          </div>

          {/* Exploration - 2. Google Meet */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 1/3 - Text Content */}
              <div className="md:col-span-2">
                <p className="text-sm font-bold text-zinc-400">
                  Meeting Platform
                </p>
                <h4 className="text-3xl mt-2">Google Meet</h4>
                <p className=" text-zinc-300 mt-4">...</p>
              </div>

              {/* Right 1/3 - Logo */}
              <div className="flex1 justify-end1 flex mt-5">
                <img
                  src="/images/work1/vtuber/exploration/logo-googlemeet.png"
                  alt="Google Meet"
                  className="max-w-[170px] object-contain ml-auto "
                />
              </div>
            </div>

            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-2xl"
            >
              <source
                src="/videos/work1/vtuber/exploration/2-GoogleMeet.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              {/* Card 1: Streamlined Device Settings */}
              <div className="flex flex-col  ">
                <div className="bg-[#1E1E20]  max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 p-5 flex justify-center items-center">
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
                <div className="bg-[#1E1E20] max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 p-5 flex items-center">
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
                <div className="bg-zinc-900 max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 flex justify-center items-center">
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
          </div>
          {/* Exploration - 3. Figma */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 1/3 - Text Content */}
              <div className="md:col-span-2">
                <p className="text-sm font-bold text-zinc-400">Design Tool</p>
                <h4 className="text-3xl mt-2">Figma</h4>
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
                <div className="bg-[#1E1E20]  max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 ">
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
                <div className="bg-[#1E1E20] max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 ">
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
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        <div
          id="vtuber-design"
          className="max-w-6xl mx-auto pt-36  md:px-5 px-3"
        >
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left 2/3 - Title + Description */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl md:text-6xl">Design</h2>
              <p className=" text-zinc-300">
                Before: Tools were cluttered on the left, breaking user flow.
                After: Centered toolbar, following standard video platforms like
                TikTok Live.
              </p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
              >
                <path
                  d="M73.049 47.898L26.1511 1.00006L2.83667 24.3145L49.7346 71.2124"
                  stroke="white"
                />
                <path
                  d="M68.8662 90.3145L115.764 137.212L139.079 113.898L92.1806 67.0001"
                  stroke="white"
                />
                <path
                  d="M115.267 5.33222C115.853 4.74644 116.803 4.74643 117.389 5.33222L134.547 22.4909C135.133 23.0766 135.133 24.0264 134.547 24.6122L29.7734 129.386L10.4935 129.386L10.4935 110.106L115.267 5.33222Z"
                  stroke="white"
                />
                <line
                  x1="49.2195"
                  y1="25.3536"
                  x2="38.2195"
                  y2="36.3536"
                  stroke="white"
                />
                <line
                  x1="115.249"
                  y1="90.3536"
                  x2="104.249"
                  y2="101.354"
                  stroke="white"
                />
                <line
                  x1="94.3536"
                  y1="25.6464"
                  x2="114.153"
                  y2="45.4454"
                  stroke="white"
                />
              </svg>
            </div>
          </div>

          {/* Design - 1.Avatar selection */}
          <div className="mt-24 flex md:flex-row flex-col gap-12 items-center md:pr-10 p-8 rounded-3xl border border-zinc-700">
            {/* Left */}
            <div className="flex flex-row w-full mx-auto bg-black rounded-l-3xl p-10 gap-8">
              <div>
                <video autoPlay loop muted playsInline className="rounded-lg">
                  <source
                    src="/videos/work1/vtuber/design/menu-before.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4 className="text-3xl mt-4 text-center">Before</h4>
              </div>
              <div>
                <video autoPlay loop muted playsInline className="rounded-lg">
                  <source
                    src="/videos/work1/vtuber/design/menu.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4 className="text-3xl mt-4 text-center">After</h4>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="">
              <h4 className="text-5xl">Avatar Selection</h4>
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
          </div>

          {/* Design - 2.Device Setting */}
          <div className="mt-24 flex md:flex-row flex-col gap-12 items-center md:pl-16 p-8 rounded-3xl border border-zinc-700">
            {/* Left - Text Content */}
            <div className="">
              <h4 className="text-5xl">Device Setting</h4>
              <h4 className="text-lg font-bold mt-6 text-white">
                Streamlined Device Settings
              </h4>
              <p className=" text-zinc-300 mt-1">
                Consolidated for easier access and better discoverability.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-row  mx-auto bg-black rounded-r-3xl p-10 gap-8">
              <div className="max-w-[152px]">
                <video autoPlay loop muted playsInline className="rounded-lg">
                  <source
                    src="/videos/work1/vtuber/design/setting-before.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4 className="text-3xl mt-4 text-center">Before</h4>
              </div>
              <div className="max-w-[300px]">
                <video autoPlay loop muted playsInline className="rounded-lg">
                  <source
                    src="/videos/work1/vtuber/design/setting.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4 className="text-3xl mt-4 text-center">After</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* Video Editor */}
      <section
        id="editor"
        className="w-full px-4 md:max-w-[1360px] md:mx-auto py-36"
      >
        <div className="flex flex-col space-y-4 items-center text-center">
          <h2 className="md:text-9xl text-6xl">Video Editor</h2>
          <p className="md:max-w-3xl w-full">
            Designed a 0-to-1 video editor that lets users generate videos with
            our avatars using face tracking and auto-generated copy. The editor
            focuses on enhancing avatar narration and face tracking with simple
            post-production tweaks—unlike professional tools like CapCut or
            Final Cut Pro—to create content that’s ready for seamless posting on
            platforms like TikTok.
          </p>
        </div>

        {/* Competitor */}
        <div
          id="editor-competitor"
          className="max-w-6xl mx-auto  py-36 md:px-5 px-3"
        >
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left 1/3 - Title */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl md:text-6xl">Competitor</h2>
              <p className=" text-zinc-300">,,</p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="130"
                viewBox="0 0 132 130"
                fill="none"
              >
                <circle cx="46.5" cy="46.5" r="46" stroke="white" />
                <line
                  x1="80.3536"
                  y1="78.6464"
                  x2="131.354"
                  y2="129.646"
                  stroke="white"
                />
              </svg>
            </div>
          </div>

          {/* Competitor - 1. CapCut */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 1/3 - Text Content */}
              <div className="md:col-span-2">
                <h4 className="text-3xl mt-2">CapCut</h4>
                <p className=" text-zinc-300 mt-4">...</p>
              </div>

              {/* Right 1/3 -  Logo */}
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="24"
                  viewBox="0 0 128 24"
                  fill="none"
                >
                  <path
                    d="M30.8152 5.03318V0.306107L25.1296 3.29079V3.11417C25.1296 1.22989 23.7792 0.0927734 21.8235 0.0927734H3.80127C1.74137 0.0927734 0.496094 1.22989 0.496094 3.11417V7.87696L8.4569 11.9998L0.496094 16.1583V20.9211C0.496094 22.7696 1.74137 23.9067 3.80127 23.9067H21.8225C23.7772 23.9067 25.1267 22.7696 25.1267 20.9211V20.673L30.8132 23.6934V18.8959L17.5925 11.9998L30.8152 5.03318ZM13.0083 14.3444L22.784 19.4644H3.19501L13.0064 14.3444H13.0083ZM22.7125 4.53606L13.0073 9.61836L3.19699 4.53606H22.7105H22.7125ZM47.8769 19.1181C42.1755 19.1181 38.1926 15.4984 38.1926 10.3129C38.1926 5.12744 42.1755 1.50772 47.8769 1.50772C49.3157 1.50772 51.0055 1.67045 53.5953 2.84924V6.53742C51.7209 5.49259 49.8684 4.96273 48.0883 4.96273C44.5162 4.96273 42.0217 7.16353 42.0217 10.3109C42.0217 13.4593 44.5162 15.6611 48.0883 15.6611C49.8198 15.6611 51.7229 15.1214 53.5953 14.0993V17.7756C51.0035 18.9544 49.3157 19.1181 47.8769 19.1181ZM61.2316 19.1181C57.8609 19.1181 55.5073 16.5581 55.5073 12.8938C55.5073 9.22939 57.9631 6.6426 61.3457 6.6426C63.2151 6.6426 64.5149 7.21315 65.5598 8.49612L65.6441 8.59733V7.25085H68.9404V18.8522H65.6441V17.2051L65.5578 17.3281C64.7104 18.5496 63.3352 19.1181 61.2316 19.1181ZM62.3707 9.408C60.3961 9.408 58.9633 10.8745 58.9633 12.8938C58.9633 14.914 60.3961 16.3537 62.3707 16.3537C64.3453 16.3537 65.8039 14.8971 65.8039 12.8938C65.8039 10.8904 64.3611 9.408 62.3707 9.408ZM71.4408 23.9067V7.25085H74.7649V8.69953L74.8502 8.58046C75.4882 7.68446 76.9984 6.64161 79.1556 6.64161C82.4697 6.64161 84.8739 9.27107 84.8739 12.8928C84.8739 16.5145 82.5104 19.1171 79.1288 19.1171C77.1105 19.1171 75.6708 18.5367 74.8502 17.3877L74.7639 17.2686V23.9067H71.4408ZM78.0095 9.40601C76.0349 9.40601 74.6051 10.8726 74.6051 12.8928C74.6051 14.912 76.0379 16.3517 78.0105 16.3517C79.9831 16.3517 81.3911 14.8961 81.3911 12.8928C81.3911 10.8884 79.9682 9.40601 78.0095 9.40601ZM96.5894 19.1181C90.8869 19.1181 86.905 15.4984 86.905 10.3129C86.905 5.12744 90.8869 1.50772 96.5894 1.50772C98.0271 1.50772 99.7169 1.67045 102.308 2.84924V6.53742C100.432 5.49259 98.5798 4.96273 96.8017 4.96273C93.2296 4.96273 90.7351 7.16353 90.7351 10.3109C90.7351 13.4593 93.2296 15.6611 96.8017 15.6611C98.5332 15.6611 100.436 15.1214 102.308 14.0993V17.7756C99.7159 18.9544 98.0271 19.1181 96.5894 19.1181ZM110.438 19.1181C106.721 19.1181 104.321 17.3638 104.321 14.651V6.90654H107.618V13.6886C107.618 15.3555 108.673 16.3508 110.438 16.3508C112.203 16.3508 113.208 15.3565 113.208 13.6895V6.90654H116.504V14.6481C116.504 17.3629 114.123 19.1162 110.438 19.1162V19.1181ZM123.78 19.1181C120.129 19.1181 118.833 16.8538 118.833 14.915V6.28639L122.129 4.55194V6.90753H126.679V9.60446H122.129V14.2502C122.129 14.8743 122.367 16.326 124.578 16.326C125.191 16.326 125.953 16.1642 126.677 15.8814V18.6597C125.524 19.0824 124.17 19.1162 123.778 19.1162L123.78 19.1181Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-2xl"
            >
              <source
                src="/videos/work1/videoeditor/capcut-record.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Competitor - 2. D-ID  */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 1/3 - Text Content */}
              <div className="md:col-span-2">
                <h4 className="text-3xl mt-2">D-ID</h4>
                <p className=" text-zinc-300 mt-4">...</p>
              </div>

              {/* Right 1/3 -  Logo */}
              <div className="flex justify-end">
                <img
                  src="/images/work1/videoeditor/d-id-logo.svg"
                  alt="D-ID Logo"
                  className="w-[60px]"
                />
              </div>
            </div>

            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-2xl"
            >
              <source
                src="/videos/work1/videoeditor/competitor-Did.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Competitor -  3. Other*/}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 1/3 - Text Content */}
              <div className="md:col-span-2">
                <h4 className="text-3xl mt-2">Other Platform</h4>
                <p className=" text-zinc-300 mt-4">...</p>
              </div>

              {/* Right 1/3 -  Logo */}
              <div className="flex justify-end"></div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        <div id="editor-flow" className="max-w-6xl mx-auto py-36  md:px-5 px-3">
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left 2/3 - Title */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl md:text-6xl">Flow</h2>
              <p className=" text-zinc-300">
                Initially, Record Mode was intended as a sub-feature within Edit
                Mode. However, we repositioned it as the primary step—ensuring
                users have generated content to edit—making the editing process
                an auxiliary refinement.
              </p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="137"
                viewBox="0 0 137 137"
                fill="none"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="56.5"
                  height="38.5"
                  stroke="white"
                  stroke-width="0.5"
                />
                <rect
                  x="80.25"
                  y="98.25"
                  width="56.5"
                  height="38.5"
                  stroke="white"
                  stroke-width="0.5"
                />
                <rect
                  x="68"
                  y="48.4004"
                  width="29.1985"
                  height="29.1985"
                  transform="rotate(45 68 48.4004)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M57 20H110.5C124.031 20 135 30.969 135 44.5V44.5C135 58.031 124.031 69 110.5 69H88.5205"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M80 118H26.5C12.969 118 2 107.031 2 93.5V93.5C2 79.969 12.969 69 26.5 69H47.5"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Record Mode as a Sub-Feature */}
          <div className="my-24">
            <h3 className="text-2xl text-red-400 flex items-center justify-start gap-3">
              <CircleX strokeWidth={1} size={36} />
              Record Mode as a Sub-Feature
            </h3>
            <div className="mt-4 flex flex-col md:flex-row items-center rounded-3xl border border-red-400 overflow-hidden">
              {/* Left */}
              <div className="px-8">
                <img
                  src="/images/work1/videoeditor/Flow-1-Left-Diagram.png"
                  alt="Flow-1-Left-Diagram"
                  className="w-full"
                />
              </div>

              {/* Right */}
              <div className="bg-black rounded-r-3xl">
                <img
                  src="/images/work1/videoeditor/Flow-1-Right-Layout.png"
                  alt="Flow-1-Left-Diagram"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Record Mode as the Primary Process */}
          <div className="mt-24">
            <h3 className="text-2xl text-emerald-300 flex items-center justify-start gap-3">
              <CircleCheck strokeWidth={1} size={36} />
              Record Mode as the Primary Process
            </h3>
            <div className="mt-4 flex flex-col md:flex-row items-center rounded-3xl border border-emerald-300 overflow-hidden">
              {/* Left */}
              <div className="px-8">
                <img
                  src="/images/work1/videoeditor/Flow-2-Left-Diagram.png"
                  alt="Flow-1-Left-Diagram"
                  className="w-full"
                />
              </div>

              {/* Right */}
              <div className="bg-black rounded-r-3xl">
                <img
                  src="/images/work1/videoeditor/Flow-2-Right-Layout.png"
                  alt="Flow-1-Left-Diagram"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <h3 className="max-w-4xl mx-auto text-center text-2xl my-32">
            Unlike typical editing software, HoloStudio integrates both video
            recording and post-production editing services, allowing users to
            seamlessly upload their final content to social media.
          </h3>

          <div className="flex md:flex-row flex-col w-full mx-auto mt-16">
            {/* Card 1:   */}
            <div className="flex flex-col">
              <div className="text-3xl text-center pb-3 pt-4 border border-zinc-600 font-heading">
                Home
              </div>
              <div className="w-full rounded-xl overflow-hidden mt-4 border border-zinc-800">
                <img
                  src="/images/work1/background/Home.png"
                  alt="Studio Homepage"
                  className="mb-1 w-full"
                />
              </div>
            </div>
            <MoveDown
              strokeWidth={0.5}
              className="md:hidden block w-[200px] h-[60px] text-zinc-400"
            />
            <MoveRight
              strokeWidth={0.5}
              className="hidden md:block w-[200px] h-[60px] text-zinc-400"
            />
            {/* Card 2:   */}
            <div className="flex flex-col  ">
              <div className="text-3xl text-center pb-3 pt-4 border border-zinc-600 font-heading">
                Record Mode
              </div>
              <div className="w-full rounded-xl overflow-hidden mt-4 border border-zinc-800">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/videoeditor/demo-videoeditor-recordmode.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>{" "}
            <MoveDown
              strokeWidth={0.5}
              className="md:hidden block w-[200px] h-[60px] text-zinc-400"
            />
            <MoveRight
              strokeWidth={0.5}
              className="hidden md:block w-[200px] h-[60px] text-zinc-400"
            />
            {/* Card 3:   */}
            <div className="flex flex-col  ">
              <div className="text-3xl text-center pb-3 pt-4 border border-zinc-600 font-heading">
                Edit Mode
              </div>
              <div className="w-full rounded-xl overflow-hidden mt-4 border border-zinc-800">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/videoeditor/demo-videoeditor-editmode.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Design - Record Mode */}
        <div
          id="editor-design-record"
          className="max-w-6xl mx-auto my-32 md:px-5 px-3"
        >
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            {/* Left 1/3 - Title */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-5xl md:text-6xl">Design - Record Mode</h2>
              <div className="space-y-1 text-zinc-300 mt-4 mb-6">
                <h3 className="text-xl ">
                  Record Mode is the project’s key innovation, featuring three
                  input modes:
                </h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-zinc-300">
                  <li>
                    <strong>Narrate (Text Mode):</strong> Your avatar reads
                    aloud your input content.
                  </li>
                  <li>
                    <strong>Vtube (Camera Mode):</strong> Captures dynamic video
                    with face tracking.
                  </li>
                  <li>
                    <strong>Companion (Microphone Mode):</strong> Enables
                    real-time avatar conversations.
                  </li>
                </ul>
                <p className="text-zinc-300">
                  This approach delivers a unique, efficient recording
                  experience.
                </p>
              </div>
            </div>
            {/* Right 2/3 - Description */}
          </div>

          <img src="/images/work1/videoeditor/RecordModesTable.png" />

          <div className="mt-14 bg-[linear-gradient(110deg,#171717_-0.06%,#1A1A1A_99.58%)] flex items-center justify-center md:p-24 p-4 rounded-3xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-xl border border-zinc-800 md:max-w-3xl w-full"
            >
              <source
                src="/videos/work1/videoeditor/demo-videoeditor-recordmode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Design - Edit Mode */}
        <div id="editor-design-edit" className="max-w-6xl mx-auto md:px-5 px-3">
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start mt-32">
            {/* Left 1/3 - Title */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-5xl md:text-6xl">Design - Edit Mode</h2>

              <p className="text-zinc-300">
                Edit Mode, while more conventional and comparable to tools like
                CapCut, offers a familiar and intuitive interface that
                complements the innovative Record Mode, ensuring users can
                easily refine and enhance their videos post-recording. This
                comprehensive approach allows HoloStudio to deliver a seamless
                end-to-end video creation experience that sets it apart in the
                market.
              </p>
            </div>
            {/* Right 2/3 - Description */}
          </div>

          <div className="mt-12 bg-black flex items-center justify-center rounded-3xl">
            <img src="/images/work1/videoeditor/Design-Editmode-Layout.png" />
          </div>

          <div className="mt-12 bg-[linear-gradient(110deg,#171717_-0.06%,#1A1A1A_99.58%)] flex items-center justify-center md:p-24 p-4 rounded-3xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-xl border border-zinc-800 md:max-w-3xl w-full"
            >
              <source
                src="/videos/work1/videoeditor/demo-videoeditor-editmode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* AI Video Generator */}
      <section
        id="prompt"
        className="w-full px-4 md:max-w-[1360px] md:mx-auto py-36"
      >
        <div className="flex flex-col space-y-4 items-center text-center mb-32">
          <h2 className="md:text-9xl text-6xl">AI Video Generator</h2>
          <p className="md:max-w-3xl w-full">
            With GPT-like platforms popularizing input-based interactions, our
            Prompt to Video feature lets users create videos from text. Choose
            between a single-person narration with subtitles or a two-person
            split-screen dialogue, and with simple customization, generate the
            video you envision.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Behaviour */}
        <div
          id="prompt-behaviour"
          className="max-w-6xl mx-auto my-32 md:px-5 px-3"
        >
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            {/* Left 1/3 - Title */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl md:text-6xl">Behaviour</h2>
              <p className=" text-zinc-300">
                We break down user behavior into three core components to drive
                our design decisions.
              </p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="137"
                viewBox="0 0 137 137"
                fill="none"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="56.5"
                  height="38.5"
                  stroke="white"
                  stroke-width="0.5"
                />
                <rect
                  x="80.25"
                  y="98.25"
                  width="56.5"
                  height="38.5"
                  stroke="white"
                  stroke-width="0.5"
                />
                <rect
                  x="68"
                  y="48.4004"
                  width="29.1985"
                  height="29.1985"
                  transform="rotate(45 68 48.4004)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M57 20H110.5C124.031 20 135 30.969 135 44.5V44.5C135 58.031 124.031 69 110.5 69H88.5205"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M80 118H26.5C12.969 118 2 107.031 2 93.5V93.5C2 79.969 12.969 69 26.5 69H47.5"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </div>
          </div>
          {/* Step */}
          <div className="max-w-4xl text-white my-12">
            {AIGeneratorSteps.map((item, index) => (
              <div
                key={index}
                // className="flex flex-row gap-28 py-12 border-zinc-900"
                className={`flex md:flex-row flex-col md:gap-28 gap-3 py-12 ${
                  index !== AIGeneratorSteps.length - 1
                    ? "border-b border-zinc-900"
                    : ""
                }`}
              >
                {/* Step Number */}
                <span className="text-zinc-400 text-2xl">{item.step}</span>

                {/* Step Title + Description */}
                <div>
                  <span className="text-2xl font-semibold">{item.title}</span>
                  <ul className="list-disc list-outside pl-5 space-y-1 mt-2 text-zinc-300">
                    {item.description.map((desc, i) => (
                      <li key={i} className="">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Step1. */}
        <div className="max-w-6xl mx-auto my-40">
          <div className="md:max-w-3xl w-full space-y-3 text-center mx-auto">
            <span className="uppercase text-2xl">Step 1</span>
            <h2 className="text-5xl md:text-6xl">Input prompt</h2>
            <p className=" text-zinc-300">
              Unlike the other two more complex features with subtle entry
              points, this functionality is designed for rapid video
              generation—so we've opted for a straightforward input box
              approach.
            </p>
          </div>

          <div className="mt-12 flex flex-row gap-8">
            <div className="w-full">
              <h3 className="text-2xl text-red-400 flex items-center justify-center gap-3">
                <CircleCheck strokeWidth={1} size={36} />
              </h3>
              <div className="mt-2 flex items-center rounded-3xl border border-red-400 p-4">
                <img
                  src="/images/work1/prompt/s1-layout-1.png"
                  alt="step1 layout"
                />
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-2xl text-emerald-300 flex items-center justify-center gap-3">
                <CircleCheck strokeWidth={1} size={36} />
              </h3>
              <div className="mt-2 flex items-center rounded-3xl border border-emerald-300 p-4">
                <img
                  src="/images/work1/prompt/s1-layout-2.png"
                  alt="step1 layout"
                />
              </div>
            </div>
          </div>

          <h3 className="max-w-4xl mx-auto text-center text-4xl my-32">
            But, if it's just an input box...
          </h3>

          {/* Problem - 1.  */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="">
              <h4 className="text-3xl mt-2">💭 Problem 1</h4>
              <p className="text-zinc-300 mt-2">
                Users might not understand what can be generated and may end up
                entering random, meaningless content.
              </p>
            </div>

            <div className="mt-12">
              <h4 className="text-3xl mt-2">💡 So,</h4>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl my-4 border1 border-zinc-800"
              >
                <source
                  src="/videos/work1/prompt/problem1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p>
                Below the input box, we offer selected sample ideas to help
                users get started quickly, allowing them to enjoy full
                functionality without the pressure of coming up with the perfect
                idea.
              </p>
            </div>
          </div>

          {/* Problem - 2.  */}
          <div className="mt-24 p-10 rounded-3xl border border-zinc-700">
            <div className="">
              <h4 className="text-3xl mt-2">💭 Problem 2</h4>
              <p className="text-zinc-300 mt-2">
                Users might not be aware of the final output's presentation,
                including its style.
              </p>
            </div>

            <div className="mt-12">
              <h4 className="text-3xl mt-2">💡 So,</h4>
              <div className="mt-2 mb-14 flex flex-row gap-8">
                {/* Left */}
                <div className="w-full">
                  <h3 className="text-2xl text-red-400 flex items-center justify-center gap-3">
                    <CircleCheck strokeWidth={1} size={36} />
                  </h3>
                  <div className="flex items-center justify-center rounded-3xl border border-red-400 h-full px-4">
                    <img
                      src="/images/work1/prompt/problem2-false.png"
                      alt="problem2 menu"
                      className="max-w-[200px] w-full mx-auto"
                    />
                  </div>
                </div>
                {/* Right */}
                <div className="w-full">
                  <h3 className="text-2xl text-emerald-300 flex items-center justify-center gap-3 ">
                    <CircleCheck strokeWidth={1} size={36} />
                  </h3>
                  <div className="flex items-center rounded-3xl border border-emerald-300 h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-xl md:max-w-xs w-full mx-auto border1 border-zinc-800"
                    >
                      <source
                        src="/videos/work1/prompt/problem2-true.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <p>
                Instead of relying on unclear single-word labels, we added
                descriptive text and a preview video so users can easily
                understand the final presentation without having to interpret
                uncommon terms like "monologue."
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Step2. */}
        <div className="max-w-6xl mx-auto my-40">
          <div className="md:max-w-3xl w-full space-y-3 text-center mx-auto">
            <span className="uppercase text-2xl">Step 2</span>
            <h2 className="text-5xl md:text-6xl">Edit Script, select style</h2>
            <p className=" text-zinc-300">
              All-in-one page for quick editing. Half-page layout optimized for
              shorter videos and scripts requiring minimal user edits. Scripts
              are presented line-by-line for enhanced readability and ease of
              interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-20">
            {/* Card 1:   */}
            <div className="flex flex-col  ">
              <div className="bg-[#1E1E20]  max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 ">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/prompt/s2-edit-mono.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-3xl">Monologue</h3>
              <p className="text-zinc-300 mt-2">..</p>
            </div>

            {/* Card 2:   */}
            <div className="flex flex-col ">
              <div className="bg-[#1E1E20] max-h-[300px] w-full rounded-3xl overflow-hidden mb-4 ">
                <video autoPlay loop muted playsInline className="">
                  <source
                    src="/videos/work1/prompt/s2-edit-diag.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-3xl">Dialogue</h3>
              <ul className="list-disc list-outside pl-5 space-y-1 text-zinc-300">
                <li>
                  Avatars positioned intuitively to the left of script lines,
                  resembling a chatroom.
                </li>
                <li>
                  Clicking avatars triggers a subtle shake animation, visually
                  guiding users to the right-side menu.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Step3. */}
        <div className="max-w-6xl mx-auto my-40">
          <div className="md:max-w-3xl w-full space-y-3 text-center mx-auto">
            <span className="uppercase text-2xl">Step 3</span>
            <h2 className="text-5xl md:text-6xl">Generate</h2>
            <p className=" text-zinc-300">
              No complicated settings before generating—just select the ratio to
              complete the setup.
            </p>
          </div>

          <div className="mt-12 bg-[linear-gradient(110deg,#171717_-0.06%,#1A1A1A_99.58%)] flex items-center justify-center md:p-24 p-4 rounded-3xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-xl border border-zinc-800 md:max-w-3xl w-full"
            >
              <source
                src="/videos/work1/prompt/s3-generate.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Outcome */}
        <div
          id="prompt-outcome"
          className="max-w-6xl mx-auto my-32 md:px-5 px-3"
        >
          {/* Title and Description Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            {/* Left 1/3 - Title */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl md:text-6xl">Outcome</h2>
              <p className=" text-zinc-300">..</p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="110"
                viewBox="0 0 142 110"
                fill="none"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="141.5"
                  height="109.5"
                  rx="7.75"
                  stroke="white"
                  stroke-width="0.5"
                />
                <line
                  y1="20.75"
                  x2="142"
                  y2="20.75"
                  stroke="white"
                  stroke-width="0.5"
                />
                <line
                  x1="51.25"
                  y1="21"
                  x2="51.25"
                  y2="110"
                  stroke="white"
                  stroke-width="0.5"
                />
                <line
                  x1="52"
                  y1="64.75"
                  x2="142"
                  y2="64.75"
                  stroke="white"
                  stroke-width="0.5"
                />
                <line
                  x1="98.25"
                  y1="65"
                  x2="98.25"
                  y2="110"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </div>
          </div>

          <div className="mt-12 bg-[linear-gradient(110deg,#171717_-0.06%,#1A1A1A_99.58%)] flex items-center justify-center md:p-24 p-4 rounded-3xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-xl border border-zinc-800 md:max-w-3xl w-full"
            >
              <source
                src="/videos/work1/prompt/demo-prompt-diag.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      {/* Conclusion */}
      <section
        id="conclusion"
        className="w-full px-4 md:max-w-[1360px] md:mx-auto py-36"
      >
        <div className="flex flex-col space-y-4 items-center text-center mb-32">
          <h2 className="md:text-9xl text-6xl">Conclusion</h2>
          <p className="md:max-w-3xl w-full">
            This project encompassed diverse design challenges: redesigning an
            interactive playground tool, building a video editor from scratch,
            and introducing a new AI-generated video feature. Through this
            experience, I explored detailed interactions essential to creative
            tools and gained valuable insights into AI applications in video
            production. Operating under rapid iteration cycles required swiftly
            translating basic requirements into fully functional prototypes. As
            the sole designer without direct PM support, I took ownership of
            defining the overall framework, workflows, and high-fidelity
            designs. This challenged me to sharpen my skills in independent
            decision-making, balancing innovation with practicality, and quickly
            validating design ideas through prototypes.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto border-t border-zinc-800"></div>

        {/* Reflection */}
        {/* Title and Description Section */}
        <div className="grid md:grid-cols-3 gap-8 items-start my-32 w-full md:max-w-6xl mx-auto">
          {/* Left 2/3 - Title */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-5xl md:text-6xl">Reflection</h2>
            <ul className="list-disc list-outside pl-5 space-y-1 text-zinc-300">
              <li>
                Learned to prioritize critical interactions, ensuring intuitive
                user experiences.
              </li>
              <li>
                Deepened my understanding of AI capabilities and limitations in
                creative contexts.
              </li>
              <li>
                Improved efficiency by balancing thorough exploration with rapid
                prototyping.
              </li>
              <li>
                Gained confidence in independently handling end-to-end product
                design processes without direct project management support.
              </li>
            </ul>
          </div>

          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="132"
              height="144"
              viewBox="0 0 132 144"
              fill="none"
            >
              <path
                d="M25.6612 112.5C10.681 101.182 1 83.2218 1 63C1 28.7583 28.7583 1 63 1C92.7827 1 117.661 21.9997 123.635 50"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M123.5 49.5L130.779 79.0431C131.4 81.5644 129.492 84 126.895 84H108.5V116.5C108.5 121.471 104.471 125.5 99.5 125.5H75.5V143.5"
                stroke="white"
                stroke-width="0.5"
              />
              <line
                x1="25.25"
                y1="112"
                x2="25.25"
                y2="144"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M44 45C45.5 41.6667 51.1 34 61.5 34C74.5 34 79 43 79 49.5C79 57 73.0962 61.9038 68.5 66.5C65.5 69.5 61.5 73.5 61.5 81.5"
                stroke="white"
                stroke-width="0.5"
              />
              <line
                x1="61.25"
                y1="94"
                x2="61.25"
                y2="102"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Next Project Link */}
      {/* <div className="p-6 text-center">
        <Link to="/work2" className="italic hover:underline text-4xl">
          Next Project →
        </Link>
      </div> */}
    </div>
  );
}

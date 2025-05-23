import React from "react";
import TitleSection from "../components/TitleSection";
import SectionNav from "../components/SectionNav";
import SmartImage from "../components/SmartImage";
import SmartVideo from "../components/SmartVideo";
import BackToTop from "../components/BackToTop";
import HoverImage from "../components/HoverImage";
import Work3BeforeAfterGallery from "../components/Work3BeforeAfterGallery";
import { CircleX, CircleCheck } from "lucide-react";

import { Link } from "react-router-dom"; // Ensure you have React Router set up

export default function Work3() {
  const page3Sections = ["overview", "style", "css", "scalability"];

  const images = [
    "/images/work3/css/blur1.png",
    "/images/work3/css/blur2.png",
    "/images/work3/css//shadow1.png",
    "/images/work3/css/shadow2.png",
    "/images/work3/css/radius1.png",
    "/images/work3/css/radius2.png",
  ];

  // 切成每两张一组
  const groups = [];
  for (let i = 0; i < images.length; i += 2) {
    groups.push(images.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen text-white flex flex-col overflow-x-hidden">
      <SectionNav sections={page3Sections} />

      <section className="min-h-screen w-full md:max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-center px-4 overflow-y-clip">
        {/* Floating Glow Effect */}
        <div className="absolute top-[100px] left-[100px] -translate-x-1/2 w-full md:max-w-[885px] h-[600px] rounded-[1095px] bg-[#32B288]/10 blur-[150px] z-[-1]"></div>

        <div className="md:max-w-xl w-full mx-auto mb-16 md:text-left text-center md:mt-0 mt-40">
          <span>Hologram, 2024</span>
          <h1 className="mt-3 text-4xl">Holoworld Design System</h1>
        </div>
        <div className="relative w-full md:w-[620px] h-[646px] scale-50 md:scale-100 md:mt-0 mt-[-120px] -rotate-12">
          <HoverImage
            src="/images/work3/hero/button.png"
            alt="Preview Image 1"
            className="w-[735px] absolute left-[calc(50%-360px)] top-[-100px] left-0 z-40 "
          />
          <HoverImage
            src="/images/work3/hero/color.png"
            alt="Preview Image 1"
            className="w-[735px] absolute left-[calc(50%-220px)] top-[187px] left-0 z-40 "
          />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Overview Section */}
      <div
        id="overview"
        className="max-w-6xl mx-auto py-36 px-4 grid md:grid-cols-3 gap-6"
      >
        <div className=" col-span-1">
          <h2 className="text-5xl">Overview</h2>
        </div>

        <div className="col-span-2">
          <p className="text-zinc-400 mt-2">
            When I took over the existing design library—originally built by the
            previous designer—the product had grown in complexity and undergone
            a visual refresh. I was responsible for updating the style
            foundation to align with the new direction and Tailwind CSS logic.
            This included refining component structure, improving naming
            conventions, and making the system more scalable. These updates
            significantly improved usability for both designers and engineers,
            streamlining collaboration and speeding up implementation.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      <div
        id="style"
        className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3"
      >
        <TitleSection
          title="Style Refresh"
          description="To quickly update the visual style and reduce development effort, we kept the shapes unchanged and only adjusted the color—replacing the bluish gray with a more neutral tone."
          icon="refresh"
        />
        <SmartImage
          src="/images/work3/style/colorChange.png"
          alt="color Change"
          className="my-10"
        />

        <Work3BeforeAfterGallery />
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      <div id="css" className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3">
        <TitleSection
          title="Tailwind CSS Alignment"
          description="Introduced Tailwind CSS-aligned variables—using only predefined values for spacing, border radius, and effects during design. This allows engineers to directly apply CSS classes without manual conversion, speeding up implementation."
          icon="code"
        />
      </div>

      <div className="flex flex-col gap-16 items-center pb-16">
        {groups.map((pair, idx) => (
          <div
            key={idx}
            className="relative flex flex-col md:flex-row rounded-lg items-start1"
          >
            {/* 底图 */}
            <img
              src={pair[0]}
              alt={`before-${idx}`}
              className="md:max-w-[720px] w-full object-contain rounded-lg"
              draggable={false}
            />
            {/* 叠加的上图，右下偏移 */}
            {pair[1] && (
              <img
                src={pair[1]}
                alt={`after-${idx}`}
                className="md:ml-[-80px] md:mt-32 md:max-w-[530px]  w-full object-contain rounded-lg "
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      <div
        id="scalability"
        className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3"
      >
        <TitleSection
          title="Scalability Enhancements"
          description=""
          icon="scale"
        />

        <h2 className="text-4xl mt-8">Icon</h2>
        <div className="border border-zinc-700 rounded-2xl overflow-hidden ">
          <div className="p-8">
            <h3 className="md:text-2xl text-lg text-red-400 flex items-center justify-start gap-3">
              <CircleX strokeWidth={1} size={36} />
              Before: Swap icon by selecting text
            </h3>
            <div className=" flex flex-col md:flex-row justify-between mt-4">
              <div className="relative flex flex-col md:flex-row items-start">
                {/* 底图 */}
                <img
                  src="/images/work3/scalability/icons-before.png"
                  alt=""
                  className="md:max-w-[500px] w-full object-contain rounded-lg"
                />
                {/* 叠加的上图，右下偏移 */}
                <img
                  src="/images/work3/scalability/icons-before1.png"
                  alt=""
                  className="hidden md:block ml-[-80px] max-w-[150px] object-contain rounded-lg mt-8"
                />
              </div>

              <SmartVideo
                src="/videos/work3/icon-before.mp4"
                className="md:h-[70vh]"
              />
            </div>
          </div>

          <div className="p-8 border-t border-zinc-700">
            <h3 className="md:text-2xl text-lg text-emerald-300 flex items-center justify-start gap-3">
              <CircleCheck strokeWidth={1} size={36} />
              After: Swap icon by selecting icon
            </h3>
            <div className=" flex md:flex-row flex-col justify-between mt-4">
              <div className="relative flex flex-col md:flex-row rounded-lg items-start">
                {/* 底图 */}
                <img
                  src="/images/work3/scalability/icons-after.png"
                  alt=""
                  className="md:max-w-[500px] w-full object-contain rounded-lg"
                />
                {/* 叠加的上图，右下偏移 */}
                <img
                  src="/images/work3/scalability/icons-after1.png"
                  alt=""
                  className="hidden md:block  ml-[-80px] mt-32 max-w-[150px] object-contain rounded-lg "
                />
              </div>

              <SmartVideo
                src="/videos/work3/icon-after.mp4"
                className="md:h-[70vh]"
              />
            </div>
          </div>
        </div>

        <h2 className="text-4xl mt-16">Slider</h2>
        <div className="mt-2 p-12 border border-zinc-700 rounded-2xl overflow-hidden">
          <h3 className="md:text-2xl text-lg text-red-400 flex items-center justify-start gap-3">
            <CircleX strokeWidth={1} size={36} />
            Before: Non-resizable
          </h3>
          <div className=" flex flex-row justify-between mt-4">
            <SmartVideo src="/videos/work3/slider-before.mp4" className="" />
          </div>

          <h3 className="mt-12 md:text-2xl text-lg text-emerald-300 flex items-center justify-start gap-3">
            <CircleCheck strokeWidth={1} size={36} />
            After: Resizable
          </h3>
          <div className=" flex flex-row justify-between mt-4">
            <SmartVideo src="/videos/work3/slider-after.mp4" className="" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-zinc-200">
          <div className="md:col-span-1 text-2xl leading-relaxed md:max-w-3xl w-full ">
            <h2 className="text-4xl mt-16">Number Stepper</h2>
            <div className="mt-2 p-12 border border-zinc-700 rounded-2xl overflow-hidden flex flex-row items-center h-[300px]">
              <div className="text-center">
                <h3 className="md:text-2xl text-lg text-red-400 flex items-center justify-center gap-3">
                  <CircleX strokeWidth={1} size={36} />
                  {/* Before: */}
                </h3>
                <SmartVideo
                  src="/videos/work3/amount-before.mp4"
                  alt="Number Stepper"
                />
              </div>
              <div>
                <h3 className="md:text-2xl text-lg text-emerald-300 flex items-center justify-center gap-3">
                  <CircleCheck strokeWidth={1} size={36} />
                  {/* After: */}
                </h3>

                <SmartVideo
                  src="/videos/work3/amount-after.mp4"
                  alt="Number Stepper"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 text-2xl leading-relaxed md:max-w-3xl w-full">
            <h2 className="text-4xl mt-16">Progress Bar</h2>
            <div className="mt-2 p-12 border border-zinc-700 rounded-2xl overflow-hidden  items-center h-[300px]">
              <h3 className="md:text-2xl text-lg text-red-400 flex items-center justify-start gap-3">
                <CircleX strokeWidth={1} size={36} />
                Before: Non-resizable
              </h3>
              <SmartVideo
                src="/videos/work3/progress-before.mp4"
                alt="Progress Bar"
              />

              <h3 className="mt-12 md:text-2xl text-lg text-emerald-300 flex items-center justify-start gap-3">
                <CircleCheck strokeWidth={1} size={36} />
                After: Resizable by updating auto-layout padding
              </h3>
              <SmartVideo
                src="/videos/work3/progress-after.mp4"
                alt="Progress Bar"
              />
            </div>
          </div>
        </div>
        <a
          href="https://www.figma.com/design/vcOGP07ifDcEV2LJBJ0lCE/-Public--Holoworld-Design-System-2024?node-id=5579-311&t=UtADAsxRCpdNtP8V-1"
          target="_blank"
        >
          <div className="mt-40 p-12 border border-zinc-700 rounded-2xl overflow-hidden grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-5xl">View Full Figma File</h2>
              <p className=" text-zinc-300">
                This project was originally initiated by previous designer, and
                I later took over to update and refine the design system for
                better scalability and responsiveness.
              </p>
            </div>
            {/* Right 1/3 - Icon */}
            <div className="flex justify-end">
              <HoverImage
                src="/images/work3/Thumbnail.png"
                alt="Preview Image 1"
                className=" "
              />
            </div>
          </div>
        </a>
      </div>
      <BackToTop />
    </div>
  );
}

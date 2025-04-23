import React from "react";
import TitleSection from "../components/TitleSection";
import SectionNav from "../components/SectionNav";
import SmartImage from "../components/SmartImage";
import SmartVideo from "../components/SmartVideo";
import BackToTop from "../components/BackToTop";
import HoverImage from "../components/HoverImage";
import BeforeAfterGallery from "../components/BeforeAfterGallery";
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
    <div className="min-h-screen text-white flex flex-col">
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
        className="max-w-6xl mx-auto py-36 px-4 grid grid-cols-3 gap-6"
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
          icon="flow"
        />
        <SmartImage
          src="/images/work3/style/colorChange.png"
          alt="color Change"
          className="my-10"
        />

        <BeforeAfterGallery />
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-800"></div>
      <div id="css" className="w-full md:max-w-6xl mx-auto py-36 md:px-5 px-3">
        <TitleSection
          title="Tailwind CSS Alignment"
          description="Introduced Tailwind CSS-aligned variables—using only predefined values for spacing, border radius, and effects during design. This allows engineers to directly apply CSS classes without manual conversion, speeding up implementation."
          icon="flow"
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
              className="max-w-[720px] object-contain rounded-lg"
              draggable={false}
            />
            {/* 叠加的上图，右下偏移 */}
            {pair[1] && (
              <img
                src={pair[1]}
                alt={`after-${idx}`}
                className="ml-[-80px] mt-32 max-w-[530px] object-contain rounded-lg "
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
          icon="flow"
        />

        <h2 className="text-4xl mt-8">Icon</h2>
        <div className="border border-zinc-700 rounded-2xl overflow-hidden ">
          <div className="p-8">
            <h3 className="md:text-2xl text-lg text-red-400 flex items-center justify-start gap-3">
              <CircleX strokeWidth={1} size={36} />
              Before: Swap icon by selecting text
            </h3>
            <div className=" flex flex-row justify-between mt-4">
              <div className="relative flex flex-col md:flex-row items-start">
                {/* 底图 */}
                <img
                  src="/images/work3/scalability/icons-before.png"
                  alt=""
                  className="max-w-[500px] object-contain rounded-lg"
                />
                {/* 叠加的上图，右下偏移 */}
                <img
                  src="/images/work3/scalability/icons-before1.png"
                  alt=""
                  className="ml-[-80px] max-w-[150px] object-contain rounded-lg mt-8"
                />
              </div>

              <SmartVideo
                src="/videos/work3/icon-before.mp4"
                className="h-[70vh]"
              />
            </div>
          </div>

          <div className="p-8 border-t border-zinc-700">
            <h3 className="md:text-2xl text-lg text-emerald-300 flex items-center justify-start gap-3">
              <CircleCheck strokeWidth={1} size={36} />
              After: Swap icon by selecting icon
            </h3>
            <div className=" flex flex-row justify-between mt-4">
              <div className="relative flex flex-col md:flex-row rounded-lg items-start">
                {/* 底图 */}
                <img
                  src="/images/work3/scalability/icons-after.png"
                  alt=""
                  className="max-w-[500px] object-contain rounded-lg"
                />
                {/* 叠加的上图，右下偏移 */}
                <img
                  src="/images/work3/scalability/icons-after1.png"
                  alt=""
                  className="ml-[-80px] mt-32 max-w-[150px] object-contain rounded-lg "
                />
              </div>

              <SmartVideo
                src="/videos/work3/icon-after.mp4"
                className="h-[70vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

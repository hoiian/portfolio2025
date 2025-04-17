// src/components/VideoLoader.jsx
import React from "react";
import loaderVideo from "/videos/loading.webm"; // 或 .webm

export default function VideoLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        playsInline
        className=" object-contain"
      />
    </div>
  );
}

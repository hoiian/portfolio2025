import React, { useState } from "react";

const SmartVideo = ({ src, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton loading 當 video 還沒 load 完時顯示 */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white/5 backdrop-blur-md rounded-md z-10" />
      )}

      {/* Video 本體 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 rounded-md ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SmartVideo;

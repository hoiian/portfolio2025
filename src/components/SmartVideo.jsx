import React, { useState, useRef, useEffect } from "react";

const SmartVideo = ({ src, className = "", controls = false }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const videoRef = useRef(null);

  // ✅ Lazy Load – Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className={`relative ${className}`}>
      {/* Spinner while loading */}
      {!loaded && inView && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Video */}
      {inView && (
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={controls}
          onLoadedData={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 rounded-md ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default SmartVideo;

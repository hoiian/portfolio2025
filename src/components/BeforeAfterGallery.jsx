import React, { useState, useRef, useEffect, useCallback } from "react";

const beforeAfterSets = [
  {
    before: "/images/work3/style/before1.png",
    after: "/images/work3/style/after1.png",
    thumb: "/images/work3/style/thumb1.png",
  },
  {
    before: "/images/work3/style/before2.png",
    after: "/images/work3/style/after2.png",
    thumb: "/images/work3/style/thumb2.png",
  },
  {
    before: "/images/work3/style/before3.png",
    after: "/images/work3/style/after3.png",
    thumb: "/images/work3/style/thumb3.png",
  },
  {
    before: "/images/work3/style/before4.png",
    after: "/images/work3/style/after4.png",
    thumb: "/images/work3/style/thumb4.png",
  },
];

export default function BeforeAfterGallery() {
  const [current, setCurrent] = useState(0);
  const [pct, setPct] = useState(50); // 初始 50%
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  // 拖拽逻辑
  const onMouseMove = useCallback(
    (e) => {
      if (!dragging || !containerRef.current) return;
      const { left, width } = containerRef.current.getBoundingClientRect();
      let x = e.clientX - left;
      let newPct = Math.min(100, Math.max(0, (x / width) * 100));
      setPct(newPct);
    },
    [dragging]
  );

  const onMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  return (
    <div className="space-y-6">
      {/* 滑块容器 */}
      <div
        ref={containerRef}
        className="relative select-none overflow-hidden bg-gray-200"
        style={{ height: "722px" }}
      >
        {/* After 图铺底 */}
        <img
          src={beforeAfterSets[current].after}
          alt="after"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* Before 图，通过 width clip */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          <div
            className="w-full h-full bg-cover bg-left-top"
            style={{
              backgroundImage: `url(${beforeAfterSets[current].before})`,
            }}
          />
        </div>
        {/* 中间把手 */}
        <div
          className="absolute top-0 h-full w-1 bg-white/80 cursor-ew-resize"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          onMouseDown={() => setDragging(true)}
        >
          {/* 手柄圆环 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border border-gray-400" />
        </div>
      </div>

      {/* 缩略图切换 */}
      <div className="flex justify-center gap-4">
        {beforeAfterSets.map(({ thumb }, idx) => (
          <button
            key={idx}
            className={`
              border-2 rounded overflow-hidden
              ${
                idx === current
                  ? "border-blue-500 ring-2 ring-blue-300"
                  : "border-transparent hover:ring-1 hover:ring-gray-400/60"
              }
            `}
            onClick={() => {
              setCurrent(idx);
              setPct(50); // 切换时重置到 50%
            }}
          >
            <img
              src={thumb}
              alt={`thumb ${idx + 1}`}
              className="w-16 h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

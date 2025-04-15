import React from "react";
import Tilt from "react-parallax-tilt";
import SmartImage from "../components/SmartImage";

const HoverImage = ({ src, alt, className }) => {
  return (
    <Tilt
      tiltMaxAngleX={10} // X 軸最大傾斜角度，可依需求調整
      tiltMaxAngleY={10} // Y 軸最大傾斜角度
      perspective={1000} // 視角距離
      //   scale={1.05} // 應用 hover 時的放大倍率
      transitionSpeed={400} // 過渡速度（毫秒）
      gyroscope={true} // 可啟用裝置感應（如果支援）
      className={className} // 可傳入額外 CSS class
    >
      <SmartImage
        src={src}
        alt={alt}
        style={{ width: "100%", display: "block" }}
      />
    </Tilt>
  );
};

export default HoverImage;

import React from "react";

export default function GradientText({
  children,
  className = "",
  colors = ["#3f78f3", "#4e47e6", "#3f78f3"],
  animationSpeed = 6,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%", 
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    animation: `gradientFlow ${animationSpeed}s linear infinite`,
  };

  return (
    <span
      className={` inline-block ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}

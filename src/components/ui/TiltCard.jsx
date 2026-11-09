import React, { useRef, useState, useEffect } from "react";

export function TiltCard({
  children,
  className = "",
  maxTilt = 5, // Max 5 degrees perspective tilt
  glareOpacity = 0.12,
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
      setIsTouchDevice(isTouch);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: isHovered && !isTouchDevice ? transform : "none",
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {/* Dynamic Cursor-Following Specular Glare */}
      {!isTouchDevice && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(var(--accent-rgb), ${glareOpacity * 0.45}), rgba(255, 255, 255, ${glareOpacity * 0.65}) 40%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 1px Inner Highlight Border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-20"
        style={{
          boxShadow: "var(--card-inner-highlight)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

export default TiltCard;

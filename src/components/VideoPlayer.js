import { useEffect, useRef } from "react";

export default function VideoPlayer({
  src,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = true,
  poster,
  className,
  pauseWhenOffscreen = true,
  bg = "",
  width, // e.g. "100%" or 640
  height, // e.g. 360 or "360px"
  objectFit = "contain", // "contain" | "cover" | "fill"
  caption,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !pauseWhenOffscreen) return;

    // Respect reduced motion preferences: disable autoplay behavior
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      try {
        video.pause();
      } catch {}
      return;
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const isVisible =
          entry.isIntersecting && entry.intersectionRatio > 0.25;
        try {
          if (isVisible && autoPlay) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        } catch {}
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: [0, 0.25, 0.5, 1],
    });
    observer.observe(video);

    return () => {
      try {
        observer.disconnect();
      } catch {}
    };
  }, [autoPlay, pauseWhenOffscreen]);

  const containerClass = `${className || "video-player"} ${
    bg === "sand" ? "sand" : bg === "mist" ? "mist" : ""
  }`.trim();

  const resolvedWidth =
    typeof width === "number" ? `${width}px` : width || "100%";
  const resolvedHeight =
    typeof height === "number" ? `${height}px` : height || "auto";

  return (
    <div className={containerClass}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        poster={poster}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          borderRadius: "0.5rem",
          objectFit: objectFit,
        }}
      />
      {caption ? <div className="video-caption">{caption}</div> : null}
    </div>
  );
}

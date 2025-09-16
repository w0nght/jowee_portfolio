import React, { useRef, useState } from "react";
import "./Gallery.css";

const CustomGallery = ({ images }) => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video && video.dataset.autoplay === "true" && playingIndex === null) {
      video.play().catch(() => {
        console.log("Autoplay blocked");
      });
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video && video.dataset.autoplay === "true" && playingIndex === null) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // Play the video
      video
        .play()
        .then(() => setPlayingIndex(index))
        .catch(() => console.log("Play failed"));
    } else {
      // Pause the video
      video.pause();
      setPlayingIndex(null);
    }
  };

  const handleVideoEnd = (index) => {
    // Reset playing state when video ends
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  return (
    <div className="custom-gallery">
      {images.map((media, index) => {
        // Ensure width and height are numbers, not strings
        const width =
          typeof media.width === "string" ? parseInt(media.width) : media.width;
        const height =
          typeof media.height === "string"
            ? parseInt(media.height)
            : media.height;

        // Calculate aspect ratio safely
        const aspectRatio = width && height ? width / height : 4 / 3; // Fallback
        const itemHeight = Math.round((height / (width / 300)) * 0.8); // Adjusted calculation

        return (
          <div
            key={index}
            className="gallery-item"
            style={{
              "--item-height": itemHeight,
              "--aspect-ratio": aspectRatio,
            }}
            data-type={media.type}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {media.type === "video" ? (
              <div
                className="video-container"
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="gallery-media"
                  width={width}
                  height={height}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  data-autoplay={media.autoplayOnHover}
                  onEnded={() => handleVideoEnd(index)}
                  style={{
                    aspectRatio: `${width}/${height}`,
                    backgroundColor: "#1a365d", // Dark blue fallback
                  }}
                >
                  <source src={media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause overlay button */}
                <div
                  className={`video-controls ${
                    playingIndex === index ? "playing" : ""
                  }`}
                >
                  <button
                    className="play-pause-btn"
                    aria-label={
                      playingIndex === index ? "Pause video" : "Play video"
                    }
                  >
                    {playingIndex === index ? "❚❚" : "▶"}
                  </button>
                </div>
              </div>
            ) : (
              <img
                src={media.src}
                alt={media.caption || `Project media ${index + 1}`}
                className="gallery-media"
                width={width}
                height={height}
                loading="lazy"
                style={{
                  aspectRatio: `${width}/${height}`,
                  backgroundColor: "#f0f0f0", // Light fallback for images
                }}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.backgroundColor = "#1a365d";
                }}
              />
            )}

            <div className="media-overlay">
              {/* Video indicator badge */}
              {media.type === "video" && (
                <div className="video-badge">
                  {playingIndex === index ? "⏸️ Playing" : "▶️ Video"}
                </div>
              )}

              {media.caption && (
                <div className="media-caption">{media.caption}</div>
              )}

              {media.tags && media.tags.length > 0 && (
                <div className="media-tags">
                  {media.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomGallery;

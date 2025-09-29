import React, { useRef, useState } from "react";
import "./Gallery.css";

export default function CustomGallery({ images }) {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  // --- Video Handlers ---
  const playVideo = (video, index) => {
    video
      .play()
      .then(() => setPlayingIndex(index))
      .catch(() => console.log("Autoplay blocked"));
  };

  const pauseVideo = (video, resetTime = false) => {
    video.pause();
    if (resetTime) video.currentTime = 0;
  };

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video && video.dataset.autoplay === "true" && playingIndex === null) {
      playVideo(video, null); // hover preview (don’t set index as "playing")
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video && video.dataset.autoplay === "true" && playingIndex === null) {
      pauseVideo(video, true);
    }
  };

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      playVideo(video, index);
    } else {
      pauseVideo(video);
      setPlayingIndex(null);
    }
  };

  const handleVideoEnd = (index) => {
    if (playingIndex === index) setPlayingIndex(null);
  };

  return (
    <div className="custom-gallery">
      {images.map((media, index) => (
        <GalleryItem
          key={index}
          media={media}
          index={index}
          videoRefs={videoRefs}
          playingIndex={playingIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onVideoClick={handleVideoClick}
          onVideoEnd={handleVideoEnd}
        />
      ))}
    </div>
  );
}

function GalleryItem({
  media,
  index,
  videoRefs,
  playingIndex,
  onMouseEnter,
  onMouseLeave,
  onVideoClick,
  onVideoEnd,
}) {
  const { width, height, type, orientation, caption, tags } = media;
  const aspectRatio = width / height;
  const itemHeight = Math.round(height / (width / 300));
  const isFullWidth = orientation === "landscape" && width / height > 1.5;

  return (
    <div
      className="gallery-item"
      style={{
        "--item-height": itemHeight,
        "--aspect-ratio": aspectRatio,
        gridColumn: isFullWidth ? "1 / -1" : "auto",
      }}
      data-type={type}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
    >
      {type === "video" ? (
        <GalleryVideo
          media={media}
          index={index}
          videoRefs={videoRefs}
          playingIndex={playingIndex}
          onVideoClick={onVideoClick}
          onVideoEnd={onVideoEnd}
        />
      ) : (
        <GalleryImage media={media} index={index} />
      )}

      <div className="media-overlay">
        {type === "video" && (
          <div className="video-badge">
            {playingIndex === index ? "⏸️ Playing" : "▶️ Video"}
          </div>
        )}
        {caption && <div className="media-caption">{caption}</div>}
        {tags?.length > 0 && (
          <div className="media-tags">
            {tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag">
                {tag.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryVideo({
  media,
  index,
  videoRefs,
  playingIndex,
  onVideoClick,
  onVideoEnd,
}) {
  return (
    <div className="video-container" onClick={() => onVideoClick(index)}>
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        className="gallery-media"
        width={media.width}
        height={media.height}
        muted
        loop
        playsInline
        preload="metadata"
        data-autoplay={media.autoplayOnHover}
        onEnded={() => onVideoEnd(index)}
        style={{
          aspectRatio: `${media.width}/${media.height}`,
          backgroundColor: "#1a365d", // fallback color
        }}
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={`video-controls ${playingIndex === index ? "playing" : ""}`}
      >
        <button
          className="play-pause-btn"
          aria-label={playingIndex === index ? "Pause video" : "Play video"}
        >
          {playingIndex === index ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}

function GalleryImage({ media, index }) {
  return (
    <img
      src={media.src}
      alt={media.caption || `Project media ${index + 1}`}
      className="gallery-media"
      width={media.width}
      height={media.height}
      loading="lazy"
      style={{
        aspectRatio: `${media.width}/${media.height}`,
        backgroundColor: "#f0f0f0",
      }}
      onError={(e) => {
        e.target.style.backgroundColor = "#1a365d"; // fallback if image fails
      }}
    />
  );
}

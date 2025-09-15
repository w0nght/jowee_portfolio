import React, { useRef, useState } from 'react';
import './Gallery.css';

const CustomGallery = ({ images }) => {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        const video = videoRefs.current[index];
        if (video && video.dataset.autoplay === 'true') {
            video.play().catch(() => {
                // Autoplay might be blocked by browser
                console.log('Autoplay blocked');
            });
        }
    };

    const handleMouseLeave = (index) => {
        const video = videoRefs.current[index];
        if (video && video.dataset.autoplay === 'true') {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <div className="custom-gallery">
            {images.map((media, index) => {
                // Ensure width and height are numbers, not strings
                const width = typeof media.width === 'string' ? parseInt(media.width) : media.width;
                const height = typeof media.height === 'string' ? parseInt(media.height) : media.height;

                // Calculate aspect ratio safely
                const aspectRatio = width && height ? width / height : 4 / 3; // Fallback
                const itemHeight = Math.round((height / (width / 300)) * 0.8); // Adjusted calculation

                return (
                    <div
                        key={index}
                        className="gallery-item"
                        style={{
                            '--item-height': itemHeight,
                            '--aspect-ratio': aspectRatio
                        }}
                        data-type={media.type}
                    >
                        {media.type === 'video' ? (
                            <video
                                ref={el => videoRefs.current[index] = el}
                                className="gallery-media"
                                width={width}
                                height={height}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                style={{
                                    aspectRatio: `${width}/${height}`,
                                    backgroundColor: '#1a365d' // Dark blue fallback
                                }}
                            >
                                <source src={media.src} type="video/mp4" />
                            </video>
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
                                    backgroundColor: '#f0f0f0' // Light fallback for images
                                }}
                                onError={(e) => {
                                    // Fallback if image fails to load
                                    e.target.style.backgroundColor = '#e2e8f0';
                                }}
                            />
                        )}


                        <div className="media-overlay">
                            {/* Video indicator badge */}
                            {media.type === 'video' && (
                                <div className="video-badge">
                                    ▶️ Video
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
        </div >
    );
};

export default CustomGallery;
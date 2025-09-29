export const IMAGE_PATHS = {
  SCRABBLE: "/assets/images/scrabble-helper/",
  PORTFOLIO: "/assets/images/jowee-portfolio/",
  SYMBIO: "/assets/images/symbio/",
  TAFEQLD: "/assets/images/tafeqld/",
};

// Enhanced helper function for both images and videos
export const createMedia = (
  basePath,
  filename,
  width, // natural width
  height, // natural height
  caption,
  tags = [],
  type = "image",
  autoplayOnHover = false
) => {
  const orientation = width >= height ? "landscape" : "portrait";

  return {
    src: `${basePath}${filename}`,
    width,
    height,
    orientation,
    caption,
    type, // 'image' or 'video'
    autoplayOnHover,
    tags: Array.isArray(tags)
      ? tags.map((tag) =>
          typeof tag === "string" ? { value: tag, title: tag } : tag
        )
      : [],
  };
};

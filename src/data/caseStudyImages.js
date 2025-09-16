import { IMAGE_PATHS, createMedia } from "./imagePaths";

const { SCRABBLE, PORTFOLIO } = IMAGE_PATHS;
// SYMBIO, TAFEQLD
export const scrabbleHelperImages = [
  createMedia(SCRABBLE, "dark_mode_view_1.png", 800, 700, "Dark mode", []),
  createMedia(
    SCRABBLE,
    "light_mode_view_1.png",
    800,
    600,
    "Light mode",
    [],
    "image" // Specify type
  ),
  createMedia(
    SCRABBLE,
    "scrabblehelper_demo_vid_720.mp4",
    800,
    600,
    "Scrabble Helper App Demo ",
    [],
    "video", // Specify type
    false // Optional: autoplay on hover, false is better
  ),
  createMedia(
    SCRABBLE,
    "sh_result_sorting_1.png",
    800,
    300,
    "Sort results (Score, Length, Alphabetical)",
    []
  ),
  createMedia(
    SCRABBLE,
    "light_mode_view_2.png",
    800,
    600,
    "Search result",
    [],
    "image" // Specify type
  ),
  createMedia(
    SCRABBLE,
    "sh_dict_sort_1.png",
    800,
    300,
    "Dictionary selection with caching for fast switching (Collins 2019, OTCWL 2016, SOWPODS)",
    []
  ),
  createMedia(
    SCRABBLE,
    "sh_wild_result_1.png",
    900,
    400,
    "Wildcard Results",
    []
  ),
  createMedia(
    SCRABBLE,
    "sh_wild_result_2.png",
    800,
    300,
    "Wildcard Results",
    []
  ),
  createMedia(
    SCRABBLE,
    "sh_word_filter_1.png",
    800,
    260,
    "Word length and required letters filtering",
    []
  ),
  createMedia(SCRABBLE, "dark_mode_view_2.png", 800, 700, "Search results", []),
  // Add more images...
];

export const portfolioImages = [
  createMedia(PORTFOLIO, "my_ss_1.png", 800, 600, "Portfolio Homepage Design", [
    "React",
    "CSS",
    "Responsive Design",
  ]),
  createMedia(
    PORTFOLIO,
    "my_ss_2.png",
    800,
    600,
    "Portfolio Project Showcase",
    ["UI/UX", "Modern Design"]
  ),
  // Add more images...
];

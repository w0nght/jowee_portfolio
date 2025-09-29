import { IMAGE_PATHS, createMedia } from "./imagePaths";

const { SCRABBLE, PORTFOLIO } = IMAGE_PATHS;
// SYMBIO, TAFEQLD

// Landscape, full width 1600x900
// Portrait, half width 800x1200
// Square, third width 600x600
export const scrabbleHelperImages = [
  createMedia(SCRABBLE, "dark_mode_view_1.png", 800, 700, "Dark mode"),
  createMedia(SCRABBLE, "light_mode_view_1.png", 800, 600, "Light mode"),
  createMedia(
    SCRABBLE,
    "scrabblehelper_demo_vid_720.mp4",
    800,
    700,
    "Scrabble Helper App Demo ",
    [],
    "video", // Specify type
    false // Optional: autoplay on hover, false is better
  ),
  createMedia(SCRABBLE, "light_mode_view_2.png", 800, 600, "Search result"),
  createMedia(SCRABBLE, "sh_wild_result_1.png", 600, 400, "Wildcard Results"),
  createMedia(SCRABBLE, "dark_mode_view_2.png", 800, 660, "Search results"),
  createMedia(
    SCRABBLE,
    "sh_word_filter_1.png",
    880,
    460,
    "Word length and required letters filtering"
  ),
  createMedia(
    SCRABBLE,
    "sh_result_sorting_1.png",
    1000,
    500,
    "Sort results (Score, Length, Alphabetical)"
  ),
  createMedia(
    SCRABBLE,
    "sh_dict_sort_1.png",
    800,
    300,
    "Dictionary selection with caching for fast switching (Collins 2019, OTCWL 2016, SOWPODS)"
  ),
  createMedia(SCRABBLE, "sh_wild_result_1.png", 900, 400, "Wildcard Results"),
  createMedia(SCRABBLE, "sh_wild_result_2.png", 820, 520, "Wildcard Results"),

  // Add more images...
];

export const portfolioImages = [
  createMedia(
    PORTFOLIO,
    "my_ss_2.png",
    1600,
    740,
    "Passing proprs to components"
  ),
  createMedia(
    PORTFOLIO,
    "my_ss_3.png",
    1600,
    860,
    "Custom component can be reused!"
  ),

  // Add more images...
];

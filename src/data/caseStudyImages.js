import { IMAGE_PATHS, createMedia } from './imagePaths';

const { SCRABBLE, PORTFOLIO, } = IMAGE_PATHS;
// SYMBIO, TAFEQLD 
export const scrabbleHelperImages = [

    createMedia(SCRABBLE, 'dark_mode_view_1.png', 800, 700,
        'Scrabble Helper - Wildcard Results',
        ['JavaScript', 'Node.js']
    ),
    createMedia(SCRABBLE, 'dark_mode_view_1.png', 800, 600,
        'Scrabble Helper - Wildcard Results',
        ['JavaScript', 'Node.js'],
        'image' // Specify type
    ),
    createMedia(SCRABBLE, 'scrabblehelper_demo_vid_720.mp4', 800, 750,
        'Scrabble Helper App Demo',
        ['React Native', 'Mobile Development'],
        'video', // Specify type
        true // Optional: autoplay on hover
    ),
    createMedia(SCRABBLE, 'scrabblehelper_demo_vid_720.mp4', 800, 750,
        'Scrabble Helper App Demo',
        ['React Native', 'Mobile Development'],
        'video', // Specify type
        false // Optional: autoplay on hover
    ),


    createMedia(SCRABBLE, 'dark_mode_view_1.png', 800, 700,
        'Scrabble Helper - Wildcard Results',
        ['JavaScript', 'Node.js']
    ),
    createMedia(SCRABBLE, 'sh_wild_result_1.png', 800, 200,
        'Scrabble Helper - Wildcard Results',
        ['JavaScript', 'Node.js']
    ),
    createMedia(SCRABBLE, 'sh_wild_result_2.png', 800, 200,
        'Scrabble Helper - Advanced Filtering',
        ['Algorithm', 'Optimization']
    ),
    // Add more images...
];

export const portfolioImages = [
    createMedia(PORTFOLIO, 'my_ss_1.png', 800, 600,
        'Portfolio Homepage Design',
        ['React', 'CSS', 'Responsive Design']
    ),
    createMedia(PORTFOLIO, 'my_ss_2.png', 800, 600,
        'Portfolio Project Showcase',
        ['UI/UX', 'Modern Design']
    ),
    // Add more images...
];
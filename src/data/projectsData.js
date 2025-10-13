// src/data/projectsData.js
import { IMAGE_PATHS } from "./imagePaths";
const { SCRABBLE, PORTFOLIO, SYMBIO, TAFEQLD } = IMAGE_PATHS;


export const PROJECTS = {
    SCRABBLE_HELPER: {
        title: "Scrabble Helper",
        description:
            "A web tool that helps users explore word combinations using filters, required letters, and wildcard support.",
        liveUrl: "https://scrabble-helper.netlify.app/",
        caseStudyUrl: "/projects/scrabble-helper",
        tags: [
            { label: "HTML", icon: "html" },
            { label: "CSS", icon: "css" },
            { label: "JavaScript (Vanilla & ES6+)", icon: "javascript" },
            { label: "Git", icon: "git" },
        ],
        images: [
            {
                src: `${SCRABBLE}/dark_mode_view_1.png`,
                alt: "Scrabble Helper screenshot Dark Mode",
            },
        ],
    },

    PORTFOLIO: {
        title: "Responsive Portfolio",
        description:
            "This portfolio site itself. Built with React, showcasing reusable components and modular design.",
        liveUrl: "",
        caseStudyUrl: "/projects/portfolio",
        tags: [
            { label: "HTML", icon: "html" },
            { label: "CSS", icon: "css" },
            { label: "JavaScript", icon: "javascript" },
            { label: "React", icon: "react" },
            { label: "Node.js", icon: "node" },
            { label: "Git", icon: "git" },
        ],
        images: [
            {
                src: `${PORTFOLIO}/my_ss_1.png`,
                alt: "Responsive Portfolio screenshot",
            },
        ],
    },

    TAFE: {
        title: "Interactive Learning Resource (TAFE Queensland)",
        description:
            "Developed engaging multimedia content for online and blended learning courses, with accessibility as a core focus.",
        liveUrl: "https://tafeqld.edu.au/courses/ways-to-study/tafe-at-school",
        caseStudyUrl: "/projects/three",
        tags: [
            { label: "HTML", icon: "html" },
            { label: "CSS", icon: "css" },
            { label: "JavaScript", icon: "javascript" },
            { label: "Bootstrap", icon: "bootstrap" },
            { label: "Git", icon: "git" },
            { label: "Deployment", icon: "deployment" },
            { label: "Accessibility", icon: "accessibility" },
            { label: "Photoshop", icon: "photoshop" },
        ],
        images: [
            {
                src: `${TAFEQLD}/ss_1.png`,
                alt: "TAFE Queensland learning resource screenshot",
            },
        ],
    },

    SYMBIO: {
        title: "Seamless Provisioning for ALDI Mobile (Symbio Networks)",
        description:
            "Implemented custom monitoring and QA processes to ensure smooth deployments for ALDI Mobile provisioning systems.",
        liveUrl: "https://www.aldimobile.com.au/",
        caseStudyUrl: "/projects/four",
        tags: [
            { label: "HTML", icon: "html" },
            { label: "CSS", icon: "css" },
            { label: "JavaScript", icon: "javascript" },
            { label: "PHP", icon: "php" },
            { label: "AWS", icon: "aws" },
            { label: "Docker", icon: "docker" },
            { label: "Kubernetes", icon: "kubernetes" },
            { label: "GitLab CI/CD", icon: "git" },
            { label: "Elastic", icon: "elastic" },
            { label: "Deployment", icon: "deployment" },
            { label: "Agile", icon: "agile" },
        ],
        images: [
            {
                src: `${SYMBIO}/ss_1.png`,
                alt: "ALDI Mobile provisioning system screenshot",
            },
        ],
    },
};

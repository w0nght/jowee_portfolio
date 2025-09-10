// reusable Tag component that accepts props like label and icon (or an icon name)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJs,
    faCss3Alt,
    faHtml5,
    faReact,
    faNodeJs,
    faGitAlt,
    faPhp,
    faDocker,
    faBootstrap,
    faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faWandMagicSparkles,
    faDatabase,
    faPalette,
    faCubes,
    faMagnifyingGlass,
    faUniversalAccess,
    faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
    javascript: faJs,
    css: faCss3Alt,
    html: faHtml5,
    react: faReact,
    node: faNodeJs,
    git: faGitAlt,
    code: faCode,
    "vanilla-js": faWandMagicSparkles,
    php: faPhp,
    docker: faDocker,
    jquery: faJs, // fallback: no official jQuery icon in FA Free
    "react-native": faReact, // reuse React icon
    bootstrap: faBootstrap,
    mysql: faDatabase, // fallback: use database icon
    figma: faFigma,
    miro: faCode, // fallback: generic code icon
    photoshop: faPalette, // fallback: palette icon
    kubernetes: faCubes, // fallback: cubes icon
    elastic: faMagnifyingGlass, // fallback: elastic brand not in FA Free
    accessibility: faUniversalAccess,
    agile: faArrowsRotate,
};

export default function Tag({ label, icon }) {
    const iconDef = iconMap[icon];
    return (
        <span className="tag">
            {iconDef ? <FontAwesomeIcon icon={iconDef} /> : null}
            <span>{label}</span>
        </span>
    );
}
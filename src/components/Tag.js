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
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFolderOpen,
  faDatabase,
  faPalette,
  faCubes,
  faGear,
  faMagnifyingGlass,
  faUniversalAccess,
  faArrowsRotate,
  faPlaneCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  // core languages & web fundamentals
  html: faHtml5,
  css: faCss3Alt,
  javascript: faJs,
  php: faPhp,

  // frameworks & libraries
  react: faReact,
  jquery: faFolderOpen, // fallback: no official jQuery icon in FA Free
  bootstrap: faBootstrap,

  // backend & devops
  node: faNodeJs,
  docker: faDocker,
  kubernetes: faCubes, // fallback: cubes icon
  elastic: faMagnifyingGlass, // fallback: elastic brand not in FA Free
  aws: faAws,

  // databases
  mysql: faDatabase, // fallback: use database icon

  // collaboration & workflow
  git: faGitAlt,
  agile: faArrowsRotate,
  deployment: faPlaneCircleCheck,
  accessibility: faUniversalAccess,
  troubleshooting: faGear,

  // design & prototyping tools
  figma: faFigma,
  miro: faCode, // fallback: generic code icon
  photoshop: faPalette, // fallback: palette icon
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

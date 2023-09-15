import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReduxsaga,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiDiscord,
  SiStyledcomponents,
  SiDart,
  SiFlutter,
  SiNotion,
  SiReactquery,
} from "react-icons/si";
import { iconCss } from "./skillsCss";
import type { IskillData } from "src/types";
const skillGradeData: string[] = [
  "Main",
  "Experience",
  "Version Control",
  "Communication",
];

const skillData: IskillData = {
  Main: [
    { icon: <AiOutlineHtml5 className={iconCss} />, body: "HTML" },
    { icon: <SiCss3 className={iconCss} />, body: "CSS" },
    { icon: <SiJavascript className={iconCss} />, body: "Javascript" },
    { icon: <SiTypescript className={iconCss} />, body: "Typescript" },
    { icon: <FaReact className={iconCss} />, body: "React.js" },
    { icon: <SiNextdotjs className={iconCss} />, body: "Next.js" },
    { icon: <SiRedux className={iconCss} />, body: "Redux" },
    { icon: <SiReduxsaga className={iconCss} />, body: "ReduxSaga" },
    { icon: <SiReactquery className={iconCss} />, body: "React Query" },
    { icon: <SiTailwindcss className={iconCss} />, body: "Tailwind CSS" },
    {
      icon: <SiStyledcomponents className={iconCss} />,
      body: "Styled-Components",
    },
  ],
  Experience: [
    { icon: <SiDart className={iconCss} />, body: "Dart" },
    { icon: <SiFlutter className={iconCss} />, body: "Flutter" },
  ],
  "Version Control": [
    { icon: <SiGit className={iconCss} />, body: "Git" },
    { icon: <SiGithub className={iconCss} />, body: "GitHub" },
  ],
  Communication: [
    { icon: <SiNotion className={iconCss} />, body: "Notion" },
    { icon: <SiDiscord className={iconCss} />, body: "Discord" },
    { icon: <SiFigma className={iconCss} />, body: "Figma" },
  ],
};
export { skillGradeData, skillData };

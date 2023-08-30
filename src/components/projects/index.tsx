import Title from "../title";
import Contents from "../contents";
import { useMemo } from "react";
import { containerCssData } from "../common/commonCssData";
import ProjectContent from "./projectContent";
import { projectListArr, projectObj } from "./projectsData";

export default function Projects() {
  const color = useMemo(() => "orangeColor", []);
  return (
    <div className={containerCssData}>
      <Title title="Projects" color={color} />

      {projectListArr.map((key, idx) => {
        return (
          <Contents
            color={color}
            direction="left"
            project={idx !== projectListArr.length - 1 ? true : false}
          >
            <ProjectContent key={key} project={projectObj[key]} />
          </Contents>
        );
      })}
    </div>
  );
}

import Title from "../title";
import Contents from "../contents";
import { useMemo, forwardRef, ForwardedRef } from "react";
import { containerCssData } from "../common/commonCssData";
import ProjectContent from "./projectContent";
import { projectListArr, projectObj } from "./projectsData";

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const color = useMemo(() => "orangeColor", []);
  return (
    <div className={containerCssData} ref={ref}>
      <div className="w-full h-[50px]"></div>
      <Title title="Projects" color={color} />
      {projectListArr.map((key, idx) => {
        return (
          <Contents
            key={key}
            color={color}
            project={idx !== projectListArr.length - 1 ? true : false}
          >
            <ProjectContent project={projectObj[key]} />
          </Contents>
        );
      })}
    </div>
  );
});
export default Projects;

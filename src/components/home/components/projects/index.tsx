import Contents from "../contents";
import { Fragment } from "react";
import ProjectContent from "./projectContent";
import { projectListArr, projectObj } from "./projectsData";

const Projects = ({ color, inView }: { color: string; inView: boolean }) => {
  return (
    <Fragment>
      {projectListArr.map((key, idx) => {
        return (
          <Contents
            key={key}
            color={color}
            project={idx !== projectListArr.length - 1 ? true : false}
            inView={inView}
          >
            <ProjectContent project={projectObj[key]} inView={inView} />
          </Contents>
        );
      })}
    </Fragment>
  );
};
export default Projects;

import Introduce from "./components/introduce";
import About from "./components/about";
import Skills from "./components/skills";
import Archiving from "./components/archiving";
import Projects from "./components/projects";
import { Fragment, useMemo } from "react";
import { containerCssData } from "../common/commonCssData";
import Title from "./components/title";
import Contents from "./components/contents";
import type { IelementListData } from "src/types";
export default function Home({
  elementList,
}: {
  elementList: IelementListData;
}) {
  const renderComponentsArr = useMemo(() => {
    return [
      {
        title: "Introduce",
        color: "purpleColor",
        children: <Introduce />,
        ref: elementList.Introduce.ref,
        inView: elementList.Introduce.inView,
      },
      {
        title: "About",
        color: "redColor",
        children: <About inView={elementList.About.inView} />,
        ref: elementList.About.ref,
        inView: elementList.About.inView,
      },
      {
        title: "Skills",
        color: "blueColor",
        children: <Skills inView={elementList.Skills.inView} />,
        ref: elementList.Skills.ref,
        inView: elementList.Skills.inView,
      },
      {
        title: "Archiving",
        color: "greenColor",
        children: (
          <Archiving
            color={"greenColor"}
            inView={elementList.Archiving.inView}
          />
        ),
        ref: elementList.Archiving.ref,
        inView: elementList.Archiving.inView,
      },
      {
        title: "Projects",
        color: "orangeColor",
        children: (
          <Projects
            color={"orangeColor"}
            inView={elementList.Projects.inView}
          />
        ),
        ref: elementList.Projects.ref,
        inView: elementList.Projects.inView,
      },
    ];
  }, [elementList]);
  return (
    <Fragment>
      {renderComponentsArr.map((component) => {
        return (
          <div
            className={containerCssData}
            key={component.title}
            ref={component.ref}
          >
            <div className="w-full h-[50px]"></div>
            <Title
              title={component.title}
              color={component.color}
              inView={component.inView}
            />
            {component.title !== "Projects" ? (
              <Contents color={component.color} inView={component.inView}>
                {component.children}
              </Contents>
            ) : (
              component.children
            )}
          </div>
        );
      })}
    </Fragment>
  );
}

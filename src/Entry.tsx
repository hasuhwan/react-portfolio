import Layout from "./components/layout";
import useMoveScrool from "./hooks/useMoveScroll";
import { useMemo } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import Home from "./components/home";
import type { IelementListData } from "./types";
function Entry() {
  const introduce = useMoveScrool();
  const about = useMoveScrool();
  const skills = useMoveScrool();
  const archiving = useMoveScrool();
  const projects = useMoveScrool();
  const introduceInView = useIntersectionObserver(introduce.element);
  const aboutInView = useIntersectionObserver(about.element);
  const skillsInView = useIntersectionObserver(skills.element);
  const archivingInView = useIntersectionObserver(archiving.element);
  const projectsInView = useIntersectionObserver(projects.element, 0.1);

  const elementList: IelementListData = useMemo(() => {
    return {
      Introduce: { ref: introduce.element, inView: introduceInView },
      About: { ref: about.element, inView: aboutInView },
      Skills: { ref: skills.element, inView: skillsInView },
      Archiving: { ref: archiving.element, inView: archivingInView },
      Projects: { ref: projects.element, inView: projectsInView },
    };
  }, [
    introduce,
    about,
    skills,
    archiving,
    projects,
    introduceInView,
    aboutInView,
    skillsInView,
    archivingInView,
    projectsInView,
  ]);
  const onMoveToElmentList = useMemo(() => {
    return {
      About: about.onMoveToElement,
      Skills: skills.onMoveToElement,
      Archiving: archiving.onMoveToElement,
      Projects: projects.onMoveToElement,
    };
  }, [about, skills, archiving, projects]);

  return (
    <Layout onMoveToElmentList={onMoveToElmentList}>
      <Home elementList={elementList} />
    </Layout>
  );
}

export default Entry;

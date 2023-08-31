import Layout from "./components/layout";
import Introduce from "./components/introduce";
import About from "./components/about";
import Skills from "./components/skills";
import Archiving from "./components/archiving";
import Projects from "./components/projects";
import useMoveScrool from "./hooks/useMoveScroll";
function Home() {
  const categoryListToScroll = {
    about: useMoveScrool(),
    skills: useMoveScrool(),
    archiving: useMoveScrool(),
    projects: useMoveScrool(),
  };
  const onMoveToElmentList = {
    About: categoryListToScroll.about.onMoveToElement,
    Skills: categoryListToScroll.skills.onMoveToElement,
    Archiving: categoryListToScroll.archiving.onMoveToElement,
    Projects: categoryListToScroll.projects.onMoveToElement,
  };

  return (
    <Layout onMoveToElmentList={onMoveToElmentList}>
      <Introduce />
      <About ref={categoryListToScroll.about.element} />
      <Skills ref={categoryListToScroll.skills.element} />
      <Archiving ref={categoryListToScroll.archiving.element} />
      <Projects ref={categoryListToScroll.projects.element} />
    </Layout>
  );
}

export default Home;

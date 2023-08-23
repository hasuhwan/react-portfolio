import React from "react";
import Layout from "./components/layout";
import Introduce from "./components/introduce";
import About from "./components/about";
import Skills from "./components/skills";
import Archiving from "./components/archiving";
import Projects from "./components/projects";
function Home() {
  return (
    <Layout>
      <Introduce />
      <About />
      <Skills />
      <Archiving />
      <Projects />
    </Layout>
  );
}

export default Home;

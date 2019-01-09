import Page from "../layout/main";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import About from "../components/about";
import Stack from "../components/stack";
import Projects from "../components/projects";

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    $(".text-danger").css("font-size", "2rem");
  });

  return (
    <Page>
      <Navbar />
      <Showcase />
      <About />
      <Projects />
      <Stack />
    </Page>
  );
};

export default Index;

import Page from "../layout/main";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import About from "../components/about";
import Stack from "../components/stack";

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
      <Stack />
    </Page>
  );
};

export default Index;

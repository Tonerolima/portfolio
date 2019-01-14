import Page from "../layout/main";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import About from "../components/about";
import Stack from "../components/stack";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Contact from "../components/contact";

const Index = () => {
  return (
    <Page id="page">
      <Navbar />
      <Showcase />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </Page>
  );
};

export default Index;

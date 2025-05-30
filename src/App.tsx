import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { ProjectSection } from "@/layout/ProjectSection";
import { ExperienceSection } from "./layout/ExperienceSection";
import { Hero } from "./layout/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default App;

import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { ProjectSection } from "@/layout/ProjectSection";
import { ExperienceSection } from "./layout/ExperienceSection";

const App = () => {
  return (
    <>
      <Header />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default App;

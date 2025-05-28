import { Footer } from "@/layout/footer";
import { ThemeToggle } from "./components/ThemeToggle";

const App = () => {
  return (
    <>
      <div className="flex justify-center">
        <ThemeToggle />
      </div>

      <Footer />
    </>
  );
};

export default App;

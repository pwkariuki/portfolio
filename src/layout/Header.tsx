import { ThemeToggle } from "@/components/ThemeToggle";
import { Code } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/40 backdrop-blur px-5">
      <div className="flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-x-2.5">
          <Code className="hidden md:block h-10 w-auto" />
          <p className="font-code font-bold text-xl">Patrick's Portfolio</p>
        </a>
        <div className="flex items-center gap-x-8">
          <nav className="hidden md:flex items-center gap-x-8 font-code">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="/Patrick_Kariuki_Resume.pdf"
              className="hover:text-primary transition-colors"
            >
              Resume
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

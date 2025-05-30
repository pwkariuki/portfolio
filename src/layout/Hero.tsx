import { FaLinkedin, FaGithub, FaGoodreads } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen max-w-6xl mx-auto px-4 py-15">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-primary font-code text-sm md:text-base tracking-wide">
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Patrick Kariuki.
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground leading-tight">
            I build software for web and mobile.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a computer science student specializing in full-stack
            development and building accessible, user-centered applications.
          </p>

          {/* Tech Stack */}
          <div className="space-y-4">
            <p className="text-muted-foreground font-code text-sm tracking-wide">
              Technologies I work with:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm font-code">
              {[
                "TypeScript",
                "React",
                "Swift",
                "Python",
                "Vercel AI SDK",
                "PostgreSQL",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="mailto:pkariuk1@jhu.edu"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="Email"
            >
              <CiMail size={24} />
            </a>
            <a
              href="https://github.com/pwkariuki"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/pkariuk1"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.goodreads.com/user/show/188727804-patrick-kariuki"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="Goodreads"
            >
              <FaGoodreads size={24} />
            </a>
            <a
              href="https://leetcode.com/pkariuk1"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </a>
          </div>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors font-code text-sm tracking-wide"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/headshot.jpeg"
            alt="Patrick Kariuki"
            className="rounded-2xl w-64 h-64 object-cover shadow-lg border border-muted-foreground"
          />
        </div>
      </div>
    </section>
  );
};

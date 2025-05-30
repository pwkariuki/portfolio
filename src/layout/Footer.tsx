import { GitHubLogo } from "@/components/GitHubLogo";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 md:px-12 py-5 md:py-5">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://github.com/pwkariuki/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubLogo className="h-5 w-5" />
              <span className="sr-only">View source code on GitHub</span>
            </a>
            <p className="text-sm font-code text-muted-foreground">
              &copy; {new Date().getFullYear()} Patrick Kariuki. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

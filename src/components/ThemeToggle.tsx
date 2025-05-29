import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeType } from "@/data/types";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const currTheme = localStorage.getItem("theme");
    if (
      currTheme === "light" ||
      currTheme === "dark" ||
      currTheme === "system"
    ) {
      return currTheme;
    } else {
      const isDarkMode = document.documentElement.classList.contains("dark");
      return isDarkMode ? "dark" : "light";
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const isDark =
      theme == "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme:dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

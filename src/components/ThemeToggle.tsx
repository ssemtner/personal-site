import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  const saveToLocalStorage = (theme: string) => {
    localStorage.setItem("theme", theme);
  };

  const getFromLocalStorage = () => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "dark";
  };

  useEffect(() => {
    const localTheme = getFromLocalStorage();
    if (localTheme) {
      if (localTheme !== "dark" && localTheme !== "light") {
        setTheme("dark");
        document.documentElement.dataset.theme = "dark";
        saveToLocalStorage("dark");
      }

      setTheme(localTheme as "light" | "dark");
      document.documentElement.dataset.theme = localTheme;
    }
  });

  return (
    <button
      data-toggle-theme="dark,light"
      data-act-class="show-selected"
      className="theme-toggle-btn btn transform transition"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          document.documentElement.dataset.theme = "dark";
          saveToLocalStorage("dark");
        } else {
          setTheme("light");
          document.documentElement.dataset.theme = "light";
          saveToLocalStorage("light");
        }
      }}
    >
      {theme === "light" ? (
        <SunIcon className="h-6 w-6" />
      ) : theme === "dark" ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <span className="h-6 w-6"></span>
      )}
    </button>
  );
};

export default ThemeToggle;

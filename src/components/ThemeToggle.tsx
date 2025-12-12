import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white cursor-pointer  text-3xl transition-all"
    >
      {darkMode ? (
        <div className="flex items-center gap-4 text-slate-900">
          <FaCircle />
          <HiOutlineMoon />
        </div>
      ) : (
        <div className="flex items-center gap-4 text-white">
          <HiOutlineSun />
          <FaCircle />
        </div>
      )}
    </button>
  );
}

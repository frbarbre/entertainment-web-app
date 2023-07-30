import { useThemeStore } from "@/app/store";
import Image from "next/image";
import { shallow } from "zustand/shallow";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useThemeStore(
    (store) => [store.darkMode, store.setDarkMode],
    shallow
  );

  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <Image
        src={darkMode ? "/icon-sun.svg" : "/icon-moon.svg"}
        width={20}
        height={20}
        alt={darkMode ? "light mode button" : "dark mode button"}
        className="cursor-pointer"
      />
    </div>
  );
}

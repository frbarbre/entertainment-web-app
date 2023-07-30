import { useThemeStore } from "@/app/store";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <nav className="w-full lg:w-max lg:h-screen pb-[26px] md:p-[24px] md:pb-[34px] lg:sticky top-0 lg:p-[32px] lg:pr-[36px]">
      <div
        className={`flex justify-between items-center lg:flex-col lg:h-full w-full ${
          darkMode ? "bg-blue" : "bg-blue/20"
        } md:rounded-[20px] py-[18px] px-[16px] md:p-[24px] lg:px-[32px] lg:py-[36px]`}
      >
        <Logo />
        <div className="lg:flex-1 lg:pt-[75px]">
          <NavLinks />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

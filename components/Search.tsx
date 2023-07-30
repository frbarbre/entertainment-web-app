import { useThemeStore } from "@/app/store";
import Image from "next/image";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

type Props = {
  searchValue: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function Search({
  searchValue,
  placeholder,
  handleChange,
  handleSubmit,
}: Props) {
  const darkMode = useThemeStore((state) => state.darkMode);
  const [focused, setFocused] = useState(false);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-[16px] md:gap-[24px] relative"
    >
      <button type="submit">
        {darkMode ? (
          <Image
            src={"icon-search.svg"}
            width={24}
            height={24}
            alt="search-icon"
          />
        ) : (
          <Image
            src={"icon-search-light.svg"}
            width={24}
            height={24}
            alt="search-icon"
          />
        )}
      </button>
      <div className="w-full pr-[16px] md:pr-[25px] lg:pr-[35px] lg:max-w-[500px]">
        <input
          type="text"
          value={searchValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${
            darkMode ? "bg-dark-blue" : "bg-white"
          } transition-all outline-none text-[16px] font-light md:text-[24px] w-full caret-red`}
        />
        <AnimatePresence>
          {focused && (
            <m.div
              initial={{ scaleX: 0, y: 8, originX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="h-[1px] bg-white/50 w-full"
            />
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

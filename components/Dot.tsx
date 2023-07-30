import { useThemeStore } from "@/app/store";

export default function Dot({ isTrending }: { isTrending?: boolean }) {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div
      className={`translate-y-[-4px] rounded-full ${
        darkMode
          ? "text-white/50"
          : !isTrending
          ? "text-black/50"
          : "text-white/50"
      }`}
    >
      .
    </div>
  );
}

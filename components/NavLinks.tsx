import { useThemeStore } from "@/app/store";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div className="flex lg:flex-col gap-[24px] md:gap-[32px] lg:gap-[40px]">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <Image
            src={
              pathName === link.href
                ? darkMode
                  ? link.iconActive
                  : link.icon
                : darkMode
                  ? link.icon
                  : link.iconActive
            }
            width={20}
            height={20}
            alt={link.id}
          />
        </Link>
      ))}
    </div>
  );
}

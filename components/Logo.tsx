import { useInputStore } from "@/app/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {

  const pathName = usePathname()
  const setReset = useInputStore((state) => state.setReset)
  function handleClick() {
    if (pathName === "/") {
      setReset(true)
    }
  }

  return (
    <Link href={"/"} onClick={handleClick}>
      <Image src={"/logo.svg"} width={32} height={25.6} alt="logo" />
    </Link>
  );
}

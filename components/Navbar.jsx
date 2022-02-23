import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  
  return (
    <div className={"p-4 sticky top-0 w-full backdrop-blur-xs bg-black/50 z-10"}>
      <div className="flex justify-end gap-4">
        <LocaleSwitcher/>
        <Link href="#projects">
					<a className="transition-colors hover:text-blue-500">
            {t("projects")}
          </a>
				</Link>
        <Link href="#about">
          <a className="transition-colors hover:text-blue-500">
            {t("about")}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const navLinks = [
    "projects",
    "about",
  ]


  return (
    <div className={"p-4 sticky top-0 w-full backdrop-blur-xs bg-black/50 z-10"}>
      <div className="flex justify-between">
        <LocaleSwitcher/>
        <div>
          {navLinks.map(link => (
            <Link href={`#${link}`} key={link}>
              <a className="transition-colors hover:text-blue-500 mr-2 last:mr-0">
                {t(link)}
              </a>
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

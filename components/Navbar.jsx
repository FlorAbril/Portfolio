import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`${styles.container} bg-black/5 flex justify-end p-4`}>
      <div className="flex gap-4">
        <Link href="/">
          <a className="transition-colors hover:text-indigo-500">About</a>
        </Link>
        <Link href="/about">
					<a className="transition-colors hover:text-indigo-500">Projects</a>
				</Link>
        <Link href="/contact">
					<a className="transition-colors hover:text-indigo-500">Contact</a>
				</Link>
      </div>
    </div>
  );
};

export default Navbar;

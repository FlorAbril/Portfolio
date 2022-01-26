import Link from "next/link";

const Navbar = () => {
  return (
    <div className={"flex justify-end p-4"}>
      <div className="flex gap-4">
        <Link href="#about">
          <a className="transition-colors hover:text-dark-blue">About</a>
        </Link>
        <Link href="#projects">
					<a className="transition-colors hover:text-dark-blue">Projects</a>
				</Link>
        <Link href="#contact">
					<a className="transition-colors hover:text-dark-blue">Contact</a>
				</Link>
      </div>
    </div>
  );
};

export default Navbar;

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={"flex justify-end p-4 sticky top-0 w-full backdrop-blur-xs bg-black/50 z-10"}>
      <div className="flex gap-4">
        <Link href="#projects">
					<a className="transition-colors hover:text-blue-500">Projects</a>
				</Link>
        <Link href="#about">
          <a className="transition-colors hover:text-blue-500">About</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

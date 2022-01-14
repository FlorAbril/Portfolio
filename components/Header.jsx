import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="
        h-128 mb-16
        flex flex-wrap justify-center content-center
        md:justify-evenly md:items-center
        bg-layered-waves
    ">
      <div className="flex-none relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
          <Image
            src="/profile.jpg"
            alt="profile"
            layout="fill"
            className="rounded-full"
          />
      </div>
      <div className="p-4 h-fit">
        <h1 className="text-xl text-center md:text-4xl md:text-left">
          Hi, I&apos;m Florencia Soto
        </h1>
        <h2 className="text-sm text-center md:text-lg">
          Frontend Developer based in Buenos Aires, AR.
        </h2>
        <div className="flex justify-center gap-3 pt-3 md:justify-start items-center">
          <a href={"https://www.linkedin.com/in/florabrilsoto"} target={"_blank"}>
            <div className="flex items-center gap-1 cursor-pointer">
              <Image
                  src="/linkedin.svg"
                  width={28}
                  height={28}
              />
              <span className="transition duration-500 hover:underline hover:text-light-blue">LinkeIn</span>
            </div>
          </a>
          <div className="flex items-center gap-1 cursor-pointer" target={"_blank"}>
            <Image
              src="/github.svg"
              height={28}
              width={28}
            />
            <a className="transition duration-500 hover:underline hover:text-light-blue">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";

const Header = () => {
  return (
    <div className="
        h-128 mb-16 mt-16
        flex flex-wrap justify-center content-start
        sm:justify-evenly sm:items-center
        bg-layered-waves
    ">
      <div className="flex-none w-1/2 sm:w-1/4 xl:w-1/5 max-w-xs">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={1}
            height={1}
            layout="responsive"
            objectFit="cover"
            className="rounded-full"
          />
      </div>
      <div className="p-4 h-fit">
        <h1 className="text-xl text-center sm:text-3xl md:text-4xl sm:text-left">
          Hi, I&apos;m Florencia Soto
        </h1>
        <h2 className="text-sm text-center sm:text-base md:text-lg">
          Frontend Developer based in Buenos Aires, AR.
        </h2>
        <div className="flex justify-center gap-3 pt-3 sm:justify-start items-center text-sm sm:text-base md:text-lg">
          <a href="https://www.linkedin.com/in/florabrilsoto">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 md:w-6">
                <Image
                    src="/linkedin.svg"
                    width={1}
                    height={1}
                    layout="responsive"
                    alt="linkedin"
                />
              </div>
              <span className="transition duration-300 hover:underline hover:text-blue-500">LinkedIn</span>
            </div>
          </a>
          <a href="https://github.com/FlorAbril">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 md:w-6">
                <Image
                  src="/github.svg"
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="github"
                />
              </div>
              <span className="transition duration-300 hover:underline hover:text-blue-500">Github</span>
            </div>
          </a>
        </div>
        <div className="text-center sm:text-left">
          <a href="mailto:florenciasoto801@gmail.com" 
            className="text-xs sm:text-left sm:text-sm md:text-base 
              transition duration-300 hover:underline hover:text-blue-500"
          >
            ✉ florenciasoto801@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

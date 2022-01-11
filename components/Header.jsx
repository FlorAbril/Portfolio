import Image from "next/image";

const Header = () => {
  return (
    <div className="mt-8 mb-16 flex flex-wrap justify-center md:justify-evenly md:items-center md:mt-12 md:mb-32">
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
        <h2 className="text-sm md:text-lg">
          Frontend Developer based in Buenos Aires, AR.
        </h2>
      </div>
    </div>
  );
};

export default Header;

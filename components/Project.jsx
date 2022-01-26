import Image from "next/image";
import Link from "next/link";

const Project = ({title,description,links}) => {
  return (
    <div className="
      flex flex-col gap-3
      p-4 max-w-lg rounded-md transition ease-in-out duration-700 
      border-2 border-blue-500/50 
      hover:bg-dark-blue/75"
    > 
      <h1 className="text-lg font-medium">
        {title}
      </h1>
      <p>
        {description}
      </p>
      <div className="flex gap-2">
        <Link href={links.github}>
          <a className="flex gap-1 items-center" target="_blank">
            <div className="w-4">
              <Image
                src="/github.svg"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <span className="transition  ease-in-out delay-150 border-b border-solid border-transparent hover:border-b-white">
              Repository
            </span>
          </a>
        </Link>
				<Link href={links.website}>
        <a className="flex gap-1 items-center" target="_blank">
            <div className="w-4">
              <Image
                src="/globe.svg"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <span className="transition  ease-in-out delay-150 border-b border-solid border-transparent hover:border-b-white">
              Website
            </span>
          </a>
				</Link>
      </div>
    </div>
  );
};

export default Project;

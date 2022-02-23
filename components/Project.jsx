import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import { useTranslations } from "next-intl";

const Project = ({title,description,links,technologies}) => {
  const t = useTranslations("Projects.card");
  return (
    <motion.div className="
      flex flex-col gap-3
      w-full
      p-4 max-w-lg transition ease-in-out duration-700 
      rounded-md border-2 border-blue-500/50 
      hover:bg-dark-blue/75"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    > 
      <motion.h1 className="text-lg font-medium"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <p>
        {description}
      </p>
      <div className="flex flex-wrap gap-y-1 justify-center">
        {technologies?.map(technology => (
          <span key={technology.id}
            className="inline-block bg-blue-500/70 text-white px-2 py-1 rounded-full mr-2 text-xs">
            {technology.name}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {links.github && (
          <Link href={links.github}>
            <a className="flex gap-1 items-center">
              <div className="w-4">
                <Image
                  src="/github.svg"
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="github"
                />
              </div>
              <span className="transition  ease-in-out delay-150 border-b border-solid border-transparent hover:border-b-white">
                {t("repository")}
              </span>
            </a>
          </Link>
        )}
        {links.website && (
          <Link href={links.website}>
          <a className="flex gap-1 items-center">
              <div className="w-4">
                <Image
                  src="/globe.svg"
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="website"
                />
              </div>
              <span className="transition  ease-in-out delay-150 border-b border-solid border-transparent hover:border-b-white">
                {t("website")}
              </span>
            </a>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Project;

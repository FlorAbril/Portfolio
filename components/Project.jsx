import Link from "next/link";

const Project = () => {
  return (
    <div className="p-4 max-w-lg rounded-md transition ease-in-out duration-700 border-2 border-blue-500/50 hover:bg-blue-500/75"> 
      <h1>Project Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        corrupti consectetur tenetur mollitia in vero quam ut nesciunt excepturi
        dolores.
      </p>
      <div>
        <Link href="">
          <a>Repository</a>
        </Link>
				<Link href="">
          <a>Website</a>
				</Link>
      </div>
    </div>
  );
};

export default Project;

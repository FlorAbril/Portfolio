import Project from "./Project"

const Projects = () => {
	return (
		<div className="flex flex-col items-center gap-3 ml-2 mr-2">
			<h1 className="text-lg text-center mb-4 md:text-3xl">Projects</h1>
			<Project/>
		</div>	
	)
}

export default Projects
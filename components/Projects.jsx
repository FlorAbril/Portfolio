import { useTranslations } from "next-intl"
import Project from "./Project"


const Projects = ({projects}) => {
	const t = useTranslations("Projects")

	return (
		<div className="flex flex-col items-center gap-3 ml-2 mr-2">
			<h1 className="text-lg text-center mb-4 md:text-3xl" id="projects">
				{t("title")}
			</h1>
			{projects?.map(({id,properties}) => (
				<Project
					key={id}
					properties={properties}
				/>
			))}
		</div>	
	)
}

export default Projects
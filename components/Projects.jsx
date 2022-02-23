import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import Project from "./Project"


const Projects = ({projects}) => {
	const t = useTranslations("Projects")
	
	return (
		<div className="flex flex-col items-center gap-3 ml-2 mr-2">
			<h1 className="text-lg text-center mb-4 md:text-3xl" id="projects">
				{t("title")}
			</h1>
			{projects?.map(({id,properties:{Name,WebSite,Github,Description,Technologies}}) => (
				<Project
					key={id}
					title={Name?.title[0]?.["plain_text"]}
					description={Description?.["rich_text"][0]?.["plain_text"]}
					technologies={Technologies?.["multi_select"]}
					links={
						{
							github: Github?.url,
							website: WebSite?.url
						}
					}
				/>
			))}
		</div>	
	)
}

export default Projects
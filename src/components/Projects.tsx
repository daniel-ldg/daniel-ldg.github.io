import { Container, SimpleGrid } from "@mantine/core";
import { projectsData } from "../data/ProjectsData";
import ProjectCard from "./card/ProjectCard";

const Projects = () => {
	return (
		<Container>
			<SimpleGrid cols={2} m='xl' breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
				{projectsData.map((project, i) => (
					<ProjectCard project={project} key={i} />
				))}
			</SimpleGrid>
		</Container>
	);
};

export default Projects;

import { createStyles, Overlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import CardCover from "./CardCover";
import { Project } from "./Project";

const useStyles = createStyles((theme, isOpen: boolean) => ({
	container: isOpen
		? {
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflowY: "scroll",
				scrollbarWidth: "none",
				"::-webkit-scrollbar": { display: "none" },
				paddingTop: theme.spacing.xl,
				paddingBottom: theme.spacing.xl,
		  }
		: {},
	placeholder: { height: "300px" },
	card: {
		borderRadius: theme.radius.lg,
		overflow: "hidden",
		backgroundColor: "white",
		...(isOpen
			? {
					width: "90vw",
					maxWidth: "800px",
					marginLeft: "auto",
					marginRight: "auto",
					zIndex: 1,
					position: "relative",
			  }
			: {
					height: "300px",
					cursor: "pointer",
			  }),
	},
	content: {
		marginTop: theme.spacing.lg,
		paddingLeft: theme.spacing.lg,
		paddingRight: theme.spacing.lg,
		marginBottom: theme.spacing.lg,
	},
	title: { marginBottom: theme.spacing.sm },
	paragraph: { margin: 0, marginBottom: theme.spacing.xs },
}));

const ProjectCard = ({ project }: { project: Project }) => {
	const [isOpen, handlers] = useDisclosure(false);

	const { classes } = useStyles(isOpen);

	return (
		<>
			{isOpen && <div className={classes.placeholder}></div>}
			<div className={classes.container}>
				{isOpen && <Overlay fixed onClick={handlers.close} zIndex={0} />}
				<motion.div layout className={classes.card} onClick={handlers.open}>
					<CardCover project={project} isOpen={isOpen} />
					{isOpen && (
						<motion.div layout className={classes.content}>
							{project.description.map((entry, i) => (
								<div key={i}>
									{entry.title && <h5 className={classes.title}>{entry.title}</h5>}
									{entry.asList && (
										<ul>
											{entry.paragraphs.map((paragraph, k) => (
												<li key={k}>{paragraph}</li>
											))}
										</ul>
									)}
									{!entry.asList &&
										entry.paragraphs.map((paragraph, k) => (
											<p className={classes.paragraph} key={k}>
												{paragraph}
											</p>
										))}
								</div>
							))}
						</motion.div>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default ProjectCard;

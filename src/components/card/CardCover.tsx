import { Badge, Button, createStyles } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, GitBranch } from "tabler-icons-react";
import { Project } from "./Project";

export interface Props {
	project: Project;
	isOpen: boolean;
}

const useStyles = createStyles((theme, isOpen: boolean) => ({
	coverContainer: {
		display: "flex",
		flexFlow: "row nowrap",
		"& > div": {
			boxSizing: "border-box",
			flex: "none",
			width: "100%",
		},
		"& > div:first-of-type": isOpen ? { zIndex: 0 } : {},
		"& > div:not(:first-of-type)": { marginLeft: "-100%", ...(isOpen ? { zIndex: 1 } : {}) },
		"& img": {
			flexShrink: 0,
			minWidth: "100%",
			minHeight: "100%",
			maxWidth: "800px",
		},
	},
	imageContainer: {
		height: "300px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	imageGradient: {
		background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.5) 33%,rgba(0,0,0,0) 100%)",
	},
	nameTechContainer: { paddingLeft: theme.spacing.lg, paddingTop: theme.spacing.lg },
	name: { color: "white", textTransform: "uppercase", marginTop: theme.spacing.sm },
	links: isOpen ? { paddingTop: "250px", paddingLeft: theme.spacing.lg } : { visibility: "hidden" },
}));

const CardCover = ({ project, isOpen }: Props) => {
	const updateImg = () => {
		if (project.extraPictures.length !== 0) {
			setImg(actual => {
				if (actual.index === 0) {
					return { ...project.extraPictures[0], index: 1 };
				} else if (actual.index === project.extraPictures.length) {
					return { ...project.mainPicture, index: 0 };
				} else {
					return { ...project.extraPictures[actual.index], index: actual.index + 1 };
				}
			});
		}
	};
	const interval = useInterval(updateImg, 7000);
	const [img, setImg] = useState({ ...project.mainPicture, index: 0 });

	useEffect(() => {
		isOpen ? interval.start() : interval.stop();
	}, [isOpen]);

	const { classes } = useStyles(isOpen);

	return (
		<div className={classes.coverContainer}>
			<AnimatePresence initial={false}>
				<motion.div
					layout
					className={classes.imageContainer}
					style={
						img.pointOfInterest && !isOpen
							? img.pointOfInterest > 0
								? { paddingRight: img.pointOfInterest }
								: { paddingLeft: -img.pointOfInterest }
							: {}
					}
					key={`img_${img.index}`}
					initial={isOpen ? { opacity: 0 } : false}
					animate={{ opacity: 1, transition: { duration: 1 } }}
					exit={{ opacity: 0, transition: { delay: 1 } }}>
					<motion.img layout src={img.url} />
				</motion.div>
			</AnimatePresence>
			<motion.div layout className={classes.imageGradient}></motion.div>
			<motion.div layout='position' className={classes.nameTechContainer}>
				<Badge color={project.mainTech.color} mr={5}>
					{project.mainTech.name}
				</Badge>
				{project.extraTechs.length !== 0 &&
					(isOpen ? (
						project.extraTechs.map((tech, i) => (
							<Badge key={i} color={tech.color} mr={5}>
								{tech.name}
							</Badge>
						))
					) : (
						<Badge>{`${project.extraTechs.length}+`}</Badge>
					))}
				<h3 className={classes.name}>{project.name}</h3>
			</motion.div>
			<motion.div layout='position' className={classes.links}>
				{(project.live || project.code) && (
					<Button.Group>
						{project.live && (
							<Button
								component='a'
								href={project.live}
								target='_blank'
								variant='default'
								leftIcon={<ExternalLink size='0.9rem' />}>
								Visitar
							</Button>
						)}
						{project.code && (
							<Button
								component='a'
								href={project.code}
								target='_blank'
								variant='default'
								leftIcon={<GitBranch size='0.9rem' />}>
								Ver código fuente
							</Button>
						)}
					</Button.Group>
				)}
			</motion.div>
		</div>
	);
};

export default CardCover;

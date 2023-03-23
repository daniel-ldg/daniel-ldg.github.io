import { createStyles, Flex } from "@mantine/core";

const useStyles = createStyles(theme => ({
	header: { backgroundColor: theme.primaryColor, color: "white" },
	title: {
		fontSize: "65px",
		fontWeight: 200,
		letterSpacing: "3px",
		lineHeight: ".8",
		paddingTop: "50px",
		marginBottom: "10px",
	},
	subtitle: {
		textTransform: "uppercase",
		letterSpacing: "7px",
		lineHeight: "1",
		position: "relative",
		marginTop: "50px",
		transition: "all 0.5s ease-out",
		":before,:after": {
			content: '""',
			position: "absolute",
			display: "block",
			width: "10px",
			height: "10px",
			transition: "all 0.5s ease-out",
		},
		":before": {
			top: "-14px",
			left: "-22px",
			borderLeft: "5px solid",
			borderTop: "5px solid",
		},
		":after": {
			bottom: "-14px",
			right: "-22px",
			borderRight: "5px solid",
			borderBottom: "5px solid",
		},
		":hover": {
			":before,:after": { width: "0px", height: "0px", opacity: "0" },
		},
	},
}));

const Header = () => {
	const { classes } = useStyles();

	return (
		<Flex justify='flex-end' align='center' direction='column' wrap='nowrap' className={classes.header}>
			<h1 className={classes.title}>daniel-ldg</h1>
			<span>Junior Front-End Developer.</span>
			<h3 className={classes.subtitle}>portfolio gallery</h3>
		</Flex>
	);
};

export default Header;

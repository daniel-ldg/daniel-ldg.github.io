import { createStyles } from "@mantine/core";

const useStyles = createStyles(theme => ({
	container: { position: "relative", height: "60px", overflowX: "hidden" },
	wave: {
		background: theme.primaryColor,
		borderRadius: "0 0 1000% 1000%",
		position: "absolute",
		width: "200%",
		height: "50px;",
		animation: "wave 18s -3s linear infinite",
		transform: "translate3d(0, 0, 0)",
		opacity: "0.5",
		top: "0",
		left: "0",
		zIndex: -1,
		":nth-of-type(2)": {
			top: "-15px",
			animation: "wave 30s linear reverse infinite",
			opacity: "0.8",
		},
		":nth-of-type(3)": {
			top: "-30px",
			animation: "wave 27s -1s reverse infinite",
			opacity: "0.9",
		},
		"@keyframes wave": {
			"2%": { transform: "translateX(1)" },
			"25%": { transform: "translateX(-25%)" },
			"50%": { transform: "translateX(-50%)" },
			"75%": { transform: "translateX(-25%)" },
			"100%": { transform: "translateX(1)" },
		},
	},
}));

const Waves = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
		</div>
	);
};

export default Waves;

export interface Tech {
	name: string;
	icon?: string;
	color?: string;
}

export interface ImageData {
	url: string;
	pointOfInterest?: number;
}

export interface Project {
	name: string;
	description: { paragraphs: string[]; title?: string; asList?: boolean }[];
	mainPicture: ImageData;
	extraPictures: ImageData[];
	mainTech: Tech;
	extraTechs: Tech[];
	live?: string;
	code?: string;
}

export const Techs: { [key: string]: Tech } = {
	react: { name: "React", color: "cyan" },
	vite: { name: "Vite", color: "grape" },
	mantine: { name: "Mantine" },
	git: { name: "Version Control", color: "dark" },
	blueprint: { name: "Blueprint", color: "teal" },
	typescript: { name: "TypeScript", color: "indigo" },
	bootstrap: { name: "Bootstrap" },
	framerMotion: { name: "Framer Motion", color: "gray" },
	lottie: { name: "Lottie", color: "teal" },
};

import { Project, Techs } from "../components/card/Project";

export const projectsData: Project[] = [
	{
		name: "Nominas 1.2",
		mainPicture: { url: "/assets/iStock-1329986157.png", pointOfInterest: 50 },
		extraPictures: [{ url: "/assets/screenshot3.png", pointOfInterest: 70 }, { url: "/assets/calculator-385506_1920.jpg" }],
		description: [
			{
				title: "Resumen del proyecto",
				paragraphs: [
					"El objetivo de este proyecto fue desarrollar una herramienta que permita a los usuarios importar múltiples recibos de nómina con un archivo CSV para editar campos como tipo de nómina, periodicidad de pago, percepciones, deducciones y otros pagos. Además, validar los datos en tiempo real para asegurarse de que cumplan con las especificaciones del Complemento de Nómina 1.2 para finalmente exportar los cambios generando un nuevo archivo CSV.",
				],
			},
			{
				title: "Desarrollo del proyecto",
				paragraphs: [
					"Desarrolle módulo para convertir la compleja estructura de los recibos de nómina en formato CSV a objetos de JavaScript.",
					"Durante el desarrollo del proyecto, utilicé React y Blueprint debido a sus ventajas en la creación de interfaces de usuario dinámicas y reutilizables. Además, Blueprint es un kit de herramientas de interfaz de usuario que se integra fácilmente con React y proporciona una gran cantidad de componentes predefinidos que se pueden utilizar para construir interfaces de usuario de alta calidad.",
					"Para la interfaz de usuario desarrollé un sistema de campos de texto que permite a los usuarios introducir y editar datos de manera sencilla y eficiente.",
					"Además, se implementó un control de versiones para el proyecto utilizando Git. Esto mantener un registro de los cambios realizados.",
				],
			},
			{
				title: "Conclusión",
				paragraphs: [
					"En resumen, el proyecto fue un éxito al proporcionar una herramienta útil y fácil de usar para los contadores que necesitan editar recibos de nómina. El uso de tecnologías modernas como React y Blueprint permitió crear una interfaz de usuario atractiva y funcional, mientras que la implementación de un control de versiones garantizó la integridad del código fuente. En general, el proyecto demuestra la importancia de utilizar herramientas modernas y enfoques de desarrollo efectivos para crear aplicaciones web útiles y de alta calidad.",
				],
			},
		],
		mainTech: Techs.react,
		extraTechs: [Techs.blueprint, Techs.git],
		code: "https://github.com/daniel-ldg/nominas",
		live: "https://daniel-ldg.github.io/nominas/",
	},
	{
		name: "Portfolio Galery",
		mainPicture: { url: "/assets/office-932926_1280.jpg", pointOfInterest: 300 },
		extraPictures: [{ url: "/assets/code-1084923_1280.png", pointOfInterest: -200 }],
		description: [
			{
				title: "Resumen del proyecto",
				paragraphs: [
					"El objetivo de este proyecto fue diseñar y desarrollar un sitio web portafolio que permitiera presentar mi trabajo, habilidades y experiencia en una forma atractiva y profesional.",
					"El sitio web debía ser moderno, fácil de navegar y responsive para adaptarse a diferentes dispositivos.",
				],
			},
			{
				title: "Desarrollo del proyecto",
				paragraphs: [
					"Para comenzar, realicé una investigación detallada sobre los sitios web portafolio existentes en la industria de desarrollo web para entender las tendencias actuales de diseño y las funcionalidades que podrían ser incluidas. Para después establecer los requerimientos, metas y preferencias de diseño.",
				],
			},
			{
				title: "Tecnologías",
				paragraphs: [
					"Como herramienta de construcción y empaquetamiento utilicé Vite considerada una herramienta front-end de nueva generación que se centra en la velocidad y el rendimiento.",
					"Para crear componentes reutilizables de la interfaz de usuario y manejar la lógica de la aplicación utilicé React.",
					"Decidí usar React con TypeScript que en general puede ayudar a crear aplicaciones más robustas, seguras y fáciles de mantener.",
					"Para la interfaz de usuario utilicé la librería de componentes Mantine que proporciona elementos estilizados y personalizables, para ahorrar tiempo en el diseño y desarrollo de la interfaz.",
					"Para añadir animaciones interactivas utilicé Framer Motion, una librería de animaciones para React que permite crear animaciones fluidas y personalizables para mejorar la experiencia del usuario.",
				],
			},
			{
				title: "Conclusión",
				paragraphs: [
					"Este proyecto combinó varias tecnologías modernas de desarrollo web para crear una aplicación rápida, atractiva y fácil de usar.",
				],
			},
		],
		mainTech: Techs.react,
		extraTechs: [Techs.vite, Techs.framerMotion, Techs.mantine, Techs.typescript, Techs.git],
		code: "https://github.com/daniel-ldg/daniel-ldg.github.io",
	},
];
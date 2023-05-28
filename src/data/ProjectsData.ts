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
	{
		name: "Hangman",
		mainPicture: { url: "/assets/iStock-1403619925_2.png", pointOfInterest: -180 },
		extraPictures: [],
		description: [
			{
				title: "Resumen del proyecto",
				paragraphs: [
					"Hangman es un juego clásico de adivinanza de palabras, en el que el jugador debe adivinar la palabra oculta letra por letra antes de que se complete un dibujo de un ahorcado.",
					"El objetivo del proyecto fue ofrecer una experiencia de juego divertida y desafiante para los usuarios, al mismo tiempo que demostrar las habilidades en el desarrollo front-end utilizando tecnologías como React, Bootstrap, Framer Motion y Lottie",
				],
			},
			{
				title: "Desarrollo del proyecto",
				paragraphs: [
					"El desarrollo del proyecto comenzó con la planificación de la estructura y la funcionalidad del juego. Se creó un diseño de alta fidelidad utilizando Figma.",
					"Para las animaciones, se usó la librería Framer Motion, permitiendo una gran personalización y control de los efectos. Se pudo animar la entrada y salida de las letras, la imagen del ahorcado, la animación de las letras acertadas y falladas, y un texto animado que se muestra cuando se gana o puerde el juego.",
					"Para dar estilo al juego, se utilizó Bootstrap y react-Bootstrap, lo que permitió una rápida implementación de estilos y diseño responsivo. Además, para mejorar la experiencia de usuario, se incorporó la librería react-lottie para agregar animaciones atractivas y dinámicas al juego. También se utilizó la librería React-simple-keyboard para permitir al usuario introducir las letras en el juego a través de un teclado virtual.",
				],
			},
			{
				title: "Conclusión",
				paragraphs: [
					"El proyecto Hangman fue un gran desafío para el desarrollo de habilidades en el front-end utilizando tecnologías modernas y populares. El uso de React permitió un desarrollo rápido y eficiente del juego, mientras que Bootstrap proporcionó un estilo consistente y un diseño responsivo. La incorporación de Framer Motion, react-lottie y react-simple-keyboard agregó interactividad, animación y dinamismo, mejorando aún más la experiencia de usuario.",
					"En general, el proyecto demostró la capacidad de crear aplicaciones web atractivas y funcionales utilizando herramientas modernas de desarrollo front-end y técnicas avanzadas de animación.",
				],
			},
		],
		mainTech: Techs.react,
		extraTechs: [Techs.framerMotion, Techs.lottie, Techs.bootstrap],
		code: "https://github.com/daniel-ldg/hangman",
		live: "https://daniel-ldg.github.io/hangman/",
	},
	{
		name: "Blog Scriniun.com",
		mainPicture: { url: "/assets/iStock-1359613977.jpg", pointOfInterest: -150 },
		extraPictures: [{ url: "/assets/screenshot1.jpg" }],
		description: [
			{ paragraphs: ["Pin de acceso como administrador: 231100"] },
			{
				title: "Resumen del Proyecto",
				paragraphs: [
					"Desarrollé de manera individual un proyecto full-stack de un blog utilizando Next.js como base. En este proyecto, utilicé la potente API de OpenAI para generar contenido automático en los posts del blog.",
					"Como desarrollador web junior, asumí la responsabilidad de diseñar y crear todas las funcionalidades del proyecto, desde el inicio de sesión para el administrador hasta la implementación de estrategias SEO para mejorar la visibilidad del blog en los motores de búsqueda.",
					"Utilicé diversas tecnologías, como MongoDB, Prisma, SerpApi, Scale Serp, ImageKit, Mantine y Framer Motion, para garantizar un desarrollo eficiente y una experiencia de usuario excepcional.",
				],
			},
			{
				asList: true,
				title: "Detalles del Proyecto",
				paragraphs: [
					"Utilicé Next.js, un framework de React, para construir un blog completo con un enfoque full-stack.",
					"Diseñé la página de inicio para mostrar los posts más recientes en un scroll infinito, brindando a los usuarios una experiencia atractiva y permitiéndoles descubrir fácilmente contenido relevante.",
					"Desarrollé un buscador tipo spotlight que mejoró la experiencia de búsqueda de los usuarios, brindando una interfaz intuitiva y fluida.",
					"Utilicé Mantine para diseñar y desarrollar los diferentes componentes del blog, como botones, formularios, tarjetas y elementos de navegación.",
					"Implementé la librería Framer Motion para crear sutiles y elegantes animaciones en los componentes del blog.",
					"Implementé el modo oscuro para brindar a los usuarios la opción de cambiar entre una interfaz clara y oscura, mejorando la experiencia visual y personalización.",
					"Generé los posts de manera estática con Next.js para favorecer el SEO y el rendimiento del blog.",
					"Implementé estrategias SEO, como la generación de JSON-LD para cada post, para mejorar la visibilidad del blog en los motores de búsqueda.",
					"Utilicé MongoDB y Prisma para gestionar y almacenar los datos del blog de manera eficiente y segura.",
					"Implementé el inicio de sesión para el administrador utilizando next-auth, asegurando la autenticación y la protección de los recursos del blog.",
					"Integre la API de OpenAI para permitir al administrador generar contenido de manera automática en los posts, personalizando el número de secciones y párrafos por sección.",
					"Implementé la búsqueda automática de imágenes relacionadas en Google utilizando las APIs de SerpApi y Scale Serp, y guardé las imágenes en un CDN de ImageKit para un rendimiento óptimo.",
					"Utilicé server-sent events para mostrar en tiempo real el estado del proceso al crear un post, brindando retroalimentación al administrador a medida que se generaba el contenido.",
					"Realicé el despliegue del blog en Heroku, una plataforma confiable para alojar aplicaciones web.",
				],
			},
			{
				title: "Conclusión",
				paragraphs: [
					"Este proyecto full-stack, desarrollado de forma individual como desarrollador web junior, me permitió aplicar mis conocimientos y habilidades en la creación de un blog completo con funcionalidades avanzadas. Uno de los aspectos destacados fue la integración de la potente API de OpenAI, que permitió generar contenido automático en los posts del blog. Esta funcionalidad impulsó la eficiencia en la creación de contenido y enriqueció la experiencia del usuario.",
					"Además, pude demostrar mi capacidad para trabajar con diversas tecnologías modernas, como Next.js, MongoDB, Prisma, SerpApi, Scale Serp, ImageKit, Mantine y Framer Motion. Estas herramientas me permitieron desarrollar una aplicación web eficiente y atractiva, brindando una experiencia de usuario excepcional.",
					"Estoy orgulloso de haber completado este proyecto exitoso, que demuestra mi habilidad para enfrentar desafíos técnicos y cumplir con los objetivos establecidos. A través de la implementación de la API de OpenAI y la utilización de tecnologías de vanguardia, he reforzado mi experiencia en el desarrollo web full-stack y mi capacidad para crear aplicaciones innovadoras.",
				],
			},
		],
		mainTech: { name: "Full Stack", color: "red" },
		extraTechs: [
			{ name: "Next.js", color: "indigo" },
			{ name: "OpenAI", color: "green" },
			Techs.react,
			Techs.mantine,
			{ name: "Heroku", color: "violet" },
		],
		code: "https://github.com/daniel-ldg/blog/",
		live: "https://www.scriniun.com/",
	},
];

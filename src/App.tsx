import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Waves from "./components/Waves";

function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Header />
			<Waves />
			<Projects />
		</MantineProvider>
	);
}

export default App;

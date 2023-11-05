import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InfoBox } from "./components/InfoBox";

function App() {
	return (
		<>
			<Header/>
			<p>Welcome to this site.</p>

			<InfoBox title="How to log in" body="LVjorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus reprehenderit odio ratione totam quod, explicabo eaque cumque recusandae aut repellat quisquam a illo maxime dicta modi. Laboriosam, iusto quis!" stars={3} />
			<InfoBox title="How to sign out" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi, voluptatibus voluptatem autem beatae quae magnam possimus repellendus saepe! Autem illo atque optio eum inventore maiores magni accusantium error? Sed!" stars={5} />

			<Footer/>
		</>
	);
}

export default App;

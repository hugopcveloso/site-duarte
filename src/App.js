import React from 'react';
import './style/index.scss';
import Banner from './sections/banner';
import { Button } from 'react-bootstrap';
import Portfolio from './sections/portfolio';
import About from './sections/about';
import AreaSection from './sections/area';
import Team from './sections/team';
import FormSection from './sections/form';

function App() {
	return (
		<div className="App">
			<Banner>
				<Button variant="testing-this"> This a button </Button>
			</Banner>
			<div className="padded-container">
				<Portfolio />
				<Team />

				{/* <About /> */}
				<AreaSection />
				{/* <FormSection /> */}
			</div>
		</div>
	);
}

export default App;

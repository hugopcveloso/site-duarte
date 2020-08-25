import React from 'react';
import './style/index.scss';
import Banner from './sections/banner';
import { Button } from 'react-bootstrap';
import Portfolio from './sections/portfolio';
function App() {
	return (
		<div className="App">
			<Banner>
				<Button variant="testing-this"> This a button </Button>
			</Banner>
			<div className="padded-container">
				<Portfolio />
			</div>
		</div>
	);
}

export default App;

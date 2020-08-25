import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import LisbonVideo from '../video/lisbonvideo.mp4';
class Banner extends Component {
	render() {
		return (
			<div className="banner-container">
				<video autoPlay loop muted className="video-container">
					<source src={LisbonVideo} type="video/mp4" />
				</video>
				<div className="video-overlay-container">
					<div className="video-overlay" />
				</div>
				<header className="navbar-container">
					<Navbar bg="dark" variant="transparent">
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
					</Navbar>
				</header>
				<div className="banner-content">
					<div className="centering-buttons-container">
						<Button variant="cta-banner" href="">
							Avaliar Casa
						</Button>
						<Button variant="cta-banner" href="">
							{' '}
							Encontrar Casa{' '}
						</Button>
						<Button variant="cta-banner" hreaf="">
							{' '}
							Vender Casa{' '}
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;

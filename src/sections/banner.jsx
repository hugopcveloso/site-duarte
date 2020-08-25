import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import LisbonVideo from '../video/lisbonvideo.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
					<Navbar collapseOnSelect expand="lg" bg="light" variant="transparent">
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav">
							<FontAwesomeIcon icon={faBars} className="burguer-icon" />
						</Navbar.Toggle>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="#home" className="menu-link">
									Home
								</Nav.Link>
								<Nav.Link href="#features" className="menu-link">
									Features
								</Nav.Link>
								<Nav.Link href="#pricing" className="menu-link">
									Pricing
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
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

import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import portfolioData from '../data/portfolio-data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Portfolio extends Component {
	render() {
		const myHouses = portfolioData.map((house) => {
			return (
				<Carousel.Item key={house.id}>
					<p className="sold-tag">{house.sold ? 'Vendido' : 'Disponível'} </p>

					<div className="image-overlay d-flex">
						<img className="carousel-image" src={require(`../images/${house.image}`)} alt="First slide" />
						<img className=" carousel-image-alt" src={require(`../images/${house.imagealt}`)} alt="First slide" />
					</div>
					<Carousel.Caption>
						<div className="carousel-caption-container">
							<h3>{house.price}</h3>
							<p>{house.description}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			);
		});
		const prevIcon = <FontAwesomeIcon icon={faChevronLeft} className="carousel-prev" />;
		const nextIcon = <FontAwesomeIcon icon={faChevronRight} className="carousel-next" />;

		return (
			<div className="portfolio-container">
				<Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
					{myHouses}
				</Carousel>
			</div>
		);
	}
}

export default Portfolio;

import React, { Component } from 'react';
import AreaData from '../data/area-data';

class AreaInfo extends Component {
	render() {
		const { clickedId } = this.props;
		const selectedArea = AreaData[clickedId - 1];
		return (
			<div id="area-info-container">
				{/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
				<div id="area-image-header">
					<img id="area-image" src={selectedArea.image} alt={`Fotografia de ${selectedArea.name}`} />
					<h1 id="area-info-title">{selectedArea.name}</h1>
				</div>
				<br />
				<p>{selectedArea.description}</p>
				<p>
					<strong> População: </strong> {selectedArea.population}{' '}
				</p>
			</div>
		);
	}
}

export default AreaInfo;

import React, { Component } from 'react';
import AreaList from '../components/area-list';
import AreaInfo from '../components/area-info';

class AreaSection extends Component {
	state = { clickedId: 1 };
	handleClick = (areaId) => {
		this.setState({ clickedId: areaId });
	};

	render() {
		return (
			<div className="area-wrapper">
				<div id="area-container">
					{/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
					<AreaList handleClick={this.handleClick} clickedId={this.state.clickedId} />
					<AreaInfo clickedId={this.state.clickedId} />
				</div>
			</div>
		);
	}
}

export default AreaSection;

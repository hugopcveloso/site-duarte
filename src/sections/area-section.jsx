import React, { Component } from 'react';

class AreaSection extends Component {
	handleClick = (area) => {
		console.log(area);
	};
	render() {
		return (
			<div id="area-container">
				{/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
			</div>
		);
	}
}

export default AreaSection;

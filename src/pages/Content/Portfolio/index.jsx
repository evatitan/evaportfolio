import React, { Component } from 'react';
import Item from './Item';
import urTurn from './urturn.png';
import scoreGame from './ScoreGame.png';
import evaResume from './evaResume.png';
import './index.css';

export default class Portfolio extends Component {
	state = {
		projects: [
			{ id: '001', name: 'Resume', description: 'React', img: evaResume },
			{ id: '002', name: 'scoreGame', description: 'JavaScript', img: scoreGame },
			{ id: '003', name: 'urTurn', description: 'Angular', img: urTurn }
		]
	};
	render() {
		const { projects } = this.state;
		return (
			<div className="columns page-portfolio">
				{projects.map((projectObj) => {
					return <Item key={projectObj.id} {...projectObj} />;
				})}
			</div>
		);
	}
}

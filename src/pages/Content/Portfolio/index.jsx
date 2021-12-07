import React, { Component } from 'react';
import Item from './Item';
import './index.css';

export default class Portfolio extends Component {
	state = {
		projects: [
			{ id: '001', name: 'Resume', description: 'react' },
			{ id: '002', name: 'TodoList', description: 'react' },
			{ id: '003', name: 'Github User Search', description: 'react' }
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

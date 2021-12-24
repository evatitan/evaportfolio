import React, { PureComponent, Fragment } from 'react';
import Item from './Item';
import urTurn from './urturn.png';
import evaResume from './evaResume.png';
import todoList from './todoList.png';
import './index.css';

export default class Portfolio extends PureComponent {
	state = {
		projects: [
			{
				id: '001',
				name: 'Resume',
				description: 'React',
				img: evaResume,
				webSrc: 'https://evatitan.es',
				githubSrc: 'https://github.com/evatitan/perfil'
			},
			{
				id: '002',
				name: 'todoList',
				description: 'react-redux',
				img: todoList,
				webSrc: 'https://github.com/evatitan/ReactApps',
				githubSrc: 'https://github.com/evatitan/ReactApps'
			},
			{
				id: '003',
				name: 'urTurn',
				description: 'Angular',
				img: urTurn,
				webSrc: 'https://urturn.herokuapp.com/',
				githubSrc: 'https://github.com/evatitan/UrTurn'
			}
		],
		hasError: ''
	};

	static getDerivedStateFromError(error) {
		return { hasError: error };
	}

	componentDidCatch(error) {
		console.log(error);
	}

	render() {
		const { projects } = this.state;
		return (
			<Fragment>
				<div className="columns page-portfolio">
					{this.state.hasError ? (
						<h2>The internet is bad, please try it later.</h2>
					) : (
						projects.map((projectObj) => {
							return <Item key={projectObj.id} {...projectObj} />;
						})
					)}
				</div>
			</Fragment>
		);
	}
}

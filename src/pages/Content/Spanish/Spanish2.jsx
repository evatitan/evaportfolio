import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { levels, selectedLevel, sayings } from './sayings.json';
import './index.css';

export default class Spanish2 extends Component {
	constructor() {
		super();
		this.state = {
			selectedLevel,
			levels,
			sayings: sayings
				.map((saying) => ({
					...saying,
					showExample: false,
					example: saying.example || saying.title
				}))
				.sort((a, b) => {
					const aTitle = a.title.toLowerCase();
					const bTitle = b.title.toLowerCase();

					return aTitle.localeCompare(bTitle);
				})
		};
	}

	handleLevelChange = (id) => {
		const { levels } = this.state;
		// Encontramos la nueva opcion seleccionada
		const newSelectedLevel = levels.find((level) => level.id === id);

		this.setState({
			selectedLevel: newSelectedLevel
		});
	};

	handleSayingClick = (id) => {
		const { sayings } = this.state;

		const newSayings = sayings.map((saying) => {
			if (saying.id === id) {
				return { ...saying, showExample: !saying.showExample };
			} else return saying;
		});
		this.setState({ sayings: newSayings });
	};

	renderSaying = (saying) => {
		if (saying.show === false) return null;
		return (
			<div key={saying.id}>
				<a className="panel-block is-active" onClick={(e) => this.handleSayingClick(saying.id)}>
					<span className="panel-icon">
						<FontAwesomeIcon icon={faBook} />
						<i className="fas fa-book" aria-hidden="false" />
					</span>
					<b> {saying.title}</b>
				</a>
				<div className="sayingMeans">
					{saying.showExample && (
						<p>
							<i>
								<b>Significado : </b>
							</i>
							{saying.means}
							<br />
							<i>
								<b>Ejemplo : </b>
							</i>
							{saying.example}
						</p>
					)}
				</div>
			</div>
		);
	};
	renderAllSayings = () => {
		return this.state.sayings.map(this.renderSaying);
	};
	renderEasySayings = () => {
		return this.state.sayings.filter((saying) => saying.level === 1).map(this.renderSaying);
	};
	renderDifficultSayings = () => {
		return this.state.sayings.filter((saying) => saying.level === 2).map(this.renderSaying);
	};

	renderSayings = () => {
		switch (this.state.selectedLevel.id) {
			case 0:
				return this.renderAllSayings();
			case 1:
				return this.renderEasySayings();
			case 2:
				return this.renderDifficultSayings();
		}
	};

	render() {
		return (
			<div className="page-spanish">
				<article className="panel is-info">
					<p className="panel-heading">Spanish Sayings that I Know</p>
					<p className="panel-tabs">
						{this.state.levels.map((level) => {
							return (
								<a
									key={level.id}
									className={level.id === this.state.selectedLevel.id ? 'is-active' : ''}
									onClick={() => this.handleLevelChange(level.id)}
								>
									{level.name}
								</a>
							);
						})}
					</p>
					<div className="panel-block">
						<p className="control has-icons-left">
							<label htmlFor="">
								<input className="input is-info" type="text" placeholder="Search" />
							</label>
							<span className="icon is-left">
								<i className="fas fa-search" aria-hidden="true" />
							</span>
						</p>
					</div>
					{this.renderSayings()}
				</article>
			</div>
		);
	}
}

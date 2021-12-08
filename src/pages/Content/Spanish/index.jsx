import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { sayings } from './sayings.json';
import './index.css';

export default class Spanish extends Component {
	constructor() {
		super();
		this.state = {
			sayings: sayings
				.map((saying) => ({ ...saying, show: false, example: saying.example || saying.title }))
				.sort((a, b) => {
					const aTitle = a.title.toLowerCase();
					const bTitle = b.title.toLowerCase();

					return aTitle.localeCompare(bTitle);
				})
		};
	}

	handleSayingClick = (id) => {
		const { sayings } = this.state;

		const newSayings = sayings.map((saying) => {
			if (saying.id === id) {
				return { ...saying, show: !saying.show };
			} else return saying;
		});
		this.setState({ sayings: newSayings });
	};

	renderAllSaying = (saying = {}) => {
		return (
			<Fragment>
				<a key={saying.id} className="panel-block is-active" onClick={(e) => this.handleSayingClick(saying.id)}>
					<span className="panel-icon">
						<FontAwesomeIcon icon={faBook} />
						<i className="fas fa-book" aria-hidden="false" />
					</span>
					<b> {saying.title}</b>
				</a>
				<div className="sayingMeans">
					{saying.show &&
					saying.level && (
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
			</Fragment>
		);
	};

	renderEasySayings = () => {};
	renderDifficultSayings = () => {};

	render() {
		return (
			<div className="page-spanish">
				<article className="panel is-info">
					<p className="panel-heading">Spanish Sayings that I Know</p>
					<p className="panel-tabs">
						<a onClick={this.renderAllSaying} className="is-active">
							All
						</a>
						<a onClick={this.renderEasySayings}>Easy</a>
						<a onClick={this.renderDifficultSayings}>Difficult</a>
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
					{this.state.sayings.map(this.renderAllSaying)}
				</article>
			</div>
		);
	}
}

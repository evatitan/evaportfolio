import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './index.css';
library.add(fab, faArrowCircleDown);

export default class Home extends Component {
	componentDidMount() {
		let myName = document.querySelector('.my-name');
		let myNameLetters = myName.textContent.split('');
		myName.textContent = '';

		myNameLetters.forEach((letter, index) => {
			let span = document.createElement('span');
			span.textContent = letter;
			span.style.animationDelay = `${index / 6}s`;
			myName.append(span);
		});
	}
	render() {
		return (
			<div className="home-page">
				<div className="home-presentation">
					<div className="my-name">Guihua Yin</div>
					<div className="my-postion">Full Stack Web Developer</div>

					<div className="home-contact">
						<FontAwesomeIcon className="home-icon" icon={[ 'fab', 'github' ]} />
						&nbsp; &nbsp;&nbsp;
						<FontAwesomeIcon className="home-icon" icon={[ 'fab', 'linkedin' ]} />
						&nbsp; &nbsp;&nbsp;
						<FontAwesomeIcon className="home-icon" icon={[ 'fab', 'instagram-square' ]} />
					</div>
				</div>

				{/* <div className="goDown">
					<FontAwesomeIcon icon={faArrowCircleDown} />
				</div> */}
			</div>
		);
	}
}

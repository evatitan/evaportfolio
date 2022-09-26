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
			span.setAttribute('class', 'homeSpan');
			span.textContent = letter;
			span.style.animationDelay = `${index / 6}s`;
			myName.append(span);
		});

		function digitalClock() {
			let currentTime = new Date();
			let hrs = currentTime.getHours();
			let mins = currentTime.getMinutes();
			let secs = currentTime.getSeconds();
			let period = 'AM';
			if (hrs === 0) {
				return hrs === 12;
			} else if (hrs >= 12) {
				return (hrs = hrs - 12);
			}
			hrs = hrs < 10 ? '0' + hrs : hrs;
			mins = mins < 10 ? '0' + mins : mins;
			secs = secs < 10 ? '0' + secs : secs;
			let time = `${hrs}:${mins}:${secs} ${period}`;
			document.getElementById('time').innerHTML = time;
			setInterval(digitalClock, 1000);
		}
		digitalClock();
	}

	render() {
		return (
			<div className="home-page">
				<div className="home-presentation">
					<div className="my-name">Guihua Yin</div>
					<div className="my-postion">Full Stack Web Developer</div>
					<div id="clock">
						<p id="time" />
					</div>

					<div className="home-contact">
						<a href="https://github.com/evatitan">
							<FontAwesomeIcon className="home-icon" icon={[ 'fab', 'github' ]} />{' '}
						</a>
						&nbsp; &nbsp;&nbsp;
						<a href="https://www.linkedin.com/in/guihua-yin-a04191b7/">
							<FontAwesomeIcon className="home-icon" icon={[ 'fab', 'linkedin' ]} />
						</a>
						&nbsp; &nbsp;&nbsp;
						<a href="https://www.instagram.com/yin.guihua/">
							<FontAwesomeIcon className="home-icon" icon={[ 'fab', 'instagram-square' ]} />
						</a>
					</div>
				</div>

				{/* <div className="goDown">
					<FontAwesomeIcon icon={faArrowCircleDown} />
				</div> */}
			</div>
		);
	}
}

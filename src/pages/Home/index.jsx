import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './index.css';
library.add(fab, faArrowCircleDown);

export default class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<div className="presentation">
					<p>
						Hi, Hola, 你好！<br /> I'm Guihua Yin (Eva)<br />Full Stack Web Developer
					</p>
					<div className="contanct">
						<span>
							<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
						</span>&nbsp; &nbsp;&nbsp;
						<span>
							<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
						</span>&nbsp; &nbsp;&nbsp;
						<span>
							<FontAwesomeIcon icon={[ 'fab', 'instagram-square' ]} />
						</span>
					</div>
				</div>

				<div className="goDown">
					<FontAwesomeIcon icon={faArrowCircleDown} />
				</div>
			</div>
		);
	}
}

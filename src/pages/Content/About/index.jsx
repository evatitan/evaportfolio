import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faGlobeAsia, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import eva from './eva.jpeg';

export default class About extends Component {
	render() {
		return (
			<div className="columns">
				<div className="column">
					<h2>About Me</h2>
					<p>Hi :) I'm a Full Stack Web Developer.</p>
				</div>

				<div className="column">
					<img className="column-img" src={eva} alt="eva" />
				</div>

				<div className="column">
					<h2>Contact Details</h2>
					<p>
						<FontAwesomeIcon icon={faAddressCard} /> Guihua Yin / Eva <br />
						<FontAwesomeIcon icon={faHome} /> Spain <br />
						<FontAwesomeIcon icon={faGlobeAsia} /> Chinese <br />
						<FontAwesomeIcon icon={faEnvelopeOpenText} /> yinguihua2014@gmail.com
					</p>
				</div>
			</div>
		);
	}
}

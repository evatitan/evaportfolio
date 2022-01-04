import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faGlobeAsia, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import eva from '../../../assets/eva.jpeg';

export default class About extends Component {
	render() {
		return (
			<div className="about-page">
				<div className="tile is-vertical is-10 titleContainer">
					<div className="tile">
						<div className="tile is-parent is-vertical">
							<article className="tile is-child notification">
								<p className="title">About Me</p>
								<p className="subtitle">
									Hi &nbsp;&nbsp;&nbsp;:) <br />
									<br />
									I'm a Full Stack Web Developer.
								</p>
							</article>
							<article className="tile is-child notification">
								<p className="title">Contact Details</p>
								<p className="subtitle">
									<FontAwesomeIcon icon={faAddressCard} /> Guihua Yin / Eva <br />
									<br />
									<FontAwesomeIcon icon={faHome} /> Spain <br />
									<br />
									<FontAwesomeIcon icon={faGlobeAsia} /> Chinese <br />
									<br />
									<FontAwesomeIcon icon={faEnvelopeOpenText} /> yinguihua2014@gmail.com
								</p>
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification">
								<figure className="image is-4by3">
									<img className="selfImage" src={eva} alt="eva" />
								</figure>
							</article>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

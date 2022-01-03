import React, { Component } from 'react';
import HTML5 from './icons/html5.png';
import CSS3 from './icons/css3.png';
import JS from './icons/js.png';
import TS from './icons/ts.png';
import REACT from './icons/react.png';
import ANGULAR from './icons/angular.png';
import BOOTSTRAP from './icons/bootstrap.png';
import BULMA from './icons/bulma.png';
import LINUX from './icons/linux.png';
import NODE from './icons/nodejs.png';
import MONGODB from './icons/mongodb.png';
import MYSQL from './icons/mysql.png';
import './index.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer-page">
				<img className="footIcon" src={HTML5} alt="icons" />
				<img className="footIcon" src={CSS3} alt="icons" />
				<img className="footIcon" src={JS} alt="icons" />
				<img className="footIcon" src={TS} alt="icons" />
				<img className="footIcon" src={BOOTSTRAP} alt="icons" />
				<img className="footIcon" src={BULMA} alt="icons" />
				<img className="footIcon" src={REACT} alt="icons" />
				<img className="footIcon" src={ANGULAR} alt="icons" />
				<img className="footIcon" src={LINUX} alt="icons" />
				<img className="footIcon" src={NODE} alt="icons" />
				<img className="footIcon" src={MONGODB} alt="icons" />
				<img className="footIcon" src={MYSQL} alt="icons" />
			</div>
		);
	}
}

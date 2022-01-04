import React, { Component } from 'react';
import HTML5 from '../../assets/icons/html5.png';
import CSS3 from '../../assets/icons/css3.png';
import JS from '../../assets/icons/js.png';
import TS from '../../assets/icons/ts.png';
import REACT from '../../assets/icons/react.png';
import ANGULAR from '../../assets/icons/angular.png';
import BOOTSTRAP from '../../assets/icons/bootstrap.png';
import BULMA from '../../assets/icons/bulma.png';
import LINUX from '../../assets/icons/linux.png';
import NODE from '../../assets/icons/nodejs.png';
import MONGODB from '../../assets/icons/mongodb.png';
import MYSQL from '../../assets/icons/mysql.png';
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

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './index.css';
library.add(fab, faLaptop);

export default class Item extends Component {
	render() {
		const { name, description } = this.props;
		return (
			<div>
				<div className="column page-item">
					<div className="card">
						<div className="card-image">
							<figure className="image">
								<img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
							</figure>
						</div>

						<div className="card-content">
							<p>
								{name} <br /> {description}
							</p>
						</div>

						<footer className="card-footer">
							<p className="card-footer-item">
								<a href="#">
									<FontAwesomeIcon icon={faLaptop} />
								</a>
							</p>
							<p className="card-footer-item">
								<a href="https://github.com/evatitan/perfil">
									<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
								</a>
							</p>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

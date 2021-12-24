import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './index.css';
library.add(fab, faLaptop);

export default class Item extends PureComponent {
	render() {
		const { name, description, img, webSrc, githubSrc } = this.props;
		return (
			<div>
				<div className="column page-item">
					<div className="card">
						<div className="card-image">
							<figure className="image">
								<img className="projectImg" src={img} alt="" />
							</figure>
						</div>

						<div className="card-content">
							<p>
								<strong>{name}</strong>
								<br /> <i>{description}</i>
							</p>
						</div>

						<footer className="card-footer">
							<p className="card-footer-item">
								<a href={webSrc}>
									<FontAwesomeIcon icon={faLaptop} />
								</a>
							</p>
							<p className="card-footer-item">
								<a href={githubSrc}>
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

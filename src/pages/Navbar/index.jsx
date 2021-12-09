import React from 'react';
import { Link } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default class index extends React.Component {
	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link
						to=""
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</Link>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<MyNavLink to="/home" className="navbar-item" style={{ fontSize: '20px' }}>
							Home
						</MyNavLink>
						<MyNavLink to="/about" className="navbar-item" style={{ fontSize: '20px' }}>
							About
						</MyNavLink>
						<MyNavLink to="/travel" className="navbar-item" style={{ fontSize: '20px' }}>
							Travel
						</MyNavLink>
						<MyNavLink to="/portfolio" className="navbar-item" style={{ fontSize: '20px' }}>
							Portfolio
						</MyNavLink>

						<div className="navbar-item has-dropdown is-hoverable">
							<MyNavLink to="/language/spanish" className="navbar-link" style={{ fontSize: '20px' }}>
								Language
							</MyNavLink>
							<div className="navbar-dropdown">
								<MyNavLink to="/language/spanish" className="navbar-item" style={{ fontSize: '15px' }}>
									Spanish
								</MyNavLink>
							</div>
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttonfield is-groupeds">
								<Link className="button is-info" to="">
									<FontAwesomeIcon icon={faDownload} />&nbsp; Download
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

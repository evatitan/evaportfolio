import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CV from './CV.pdf';
import './index.css';

export default class index extends Component {
	// state = { isActive: '' };

	handleBurger = () => {
		// const { isActive } = this.state;
		// this.setState({ isActive: 'is-active' });

		const burgerIcon = document.querySelector('.navbar-burger');
		const navbarMenu = document.querySelector('.navbar-menu');
		burgerIcon.addEventListener('click', () => {
			navbarMenu.classList.toggle('is-active');
		});
	};

	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand" onClick={this.handleBurger}>
					<a
						href="#"
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<div className="navbar-item">
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
							{/* <MyNavLink to="/todoList" className="navbar-item" style={{ fontSize: '20px' }}>
								todoList
							</MyNavLink> */}

							<div className="navbar-item has-dropdown is-hoverable">
								<MyNavLink to="/language/spanish" className="navbar-link" style={{ fontSize: '20px' }}>
									Language
								</MyNavLink>
								<div className="navbar-dropdown">
									<MyNavLink
										to="/language/spanish"
										className="navbar-item"
										style={{ fontSize: '15px' }}
									>
										Spanish
									</MyNavLink>
								</div>
							</div>
							<MyNavLink to="/contact" className="navbar-item" style={{ fontSize: '20px' }}>
								Contact
							</MyNavLink>
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttonfield is-groupeds">
								<a className="button is-info" href={CV}>
									<FontAwesomeIcon icon={faDownload} />&nbsp; Download CV
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

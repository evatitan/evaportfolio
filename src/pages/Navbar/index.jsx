import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CV from './CV.pdf';
import './index.css';

export default class index extends Component {
	state = { isActive: false };

	handleBurger = () => {
		this.setState({ isActive: !this.state.isActive });

		// const burgerIcon = document.querySelector('.navbar-burger');
		// const navbarMenu = document.querySelector('.navbar-menu');
		// navbarMenu.classList.toggle('is-active');
	};

	handleLinkClicked = () => {
		this.setState({ isActive: false });
	};

	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<button
						role="button"
						onClick={this.handleBurger}
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</button>
				</div>
				<div className={'navbar-menu ' + (this.state.isActive === true ? 'is-active' : '')}>
					<div className="navbar-start">
						<div className="navbar-item">
							<MyNavLink onClick={this.handleLinkClicked} to="/home" className="navbar-item">
								Home
							</MyNavLink>
							<MyNavLink onClick={this.handleLinkClicked} to="/about" className="navbar-item">
								About
							</MyNavLink>
							<MyNavLink onClick={this.handleLinkClicked} to="/travel" className="navbar-item">
								Travel
							</MyNavLink>
							<MyNavLink onClick={this.handleLinkClicked} to="/portfolio" className="navbar-item">
								Portfolio
							</MyNavLink>
							{/* <MyNavLink to="/todoList" className="navbar-item" style={{ fontSize: '20px' }}>
								todoList
							</MyNavLink> */}

							<div className="navbar-item has-dropdown is-hoverable">
								<MyNavLink
									onClick={this.handleLinkClicked}
									to="/language/spanish"
									className="navbar-link"
								>
									Language
								</MyNavLink>
								<div className="navbar-dropdown">
									<MyNavLink
										onClick={this.handleLinkClicked}
										to="/language/spanish"
										className="navbar-item"
									>
										Spanish
									</MyNavLink>
								</div>
							</div>
							<MyNavLink onClick={this.handleLinkClicked} to="/contact" className="navbar-item">
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

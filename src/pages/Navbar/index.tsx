import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CV from '../../assets/CV.pdf';
import './index.css';

interface NavbarState {
  isActive: boolean;
}

export default class Navbar extends Component<{}, NavbarState> {
  state = { isActive: false };

  handleBurger = (): void => {
    this.setState({ isActive: !this.state.isActive });
  };

  handleLinkClicked = (): void => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button
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
              <MyNavLink onClick={this.handleLinkClicked} to="/tech-stack" className="navbar-item">
                Tech-stack
              </MyNavLink>
              <MyNavLink onClick={this.handleLinkClicked} to="/portfolio" className="navbar-item">
                Portfolio
              </MyNavLink>
              <MyNavLink onClick={this.handleLinkClicked} to="/travel" className="navbar-item">
                Travel
              </MyNavLink>
              <MyNavLink onClick={this.handleLinkClicked} to="/contact" className="navbar-item">
                Contact
              </MyNavLink>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttonfield is-groupeds">
                <a className="button is-info" href={CV}>
                  <FontAwesomeIcon icon={faDownload} />
                  &nbsp; Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

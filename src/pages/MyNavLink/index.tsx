import React, { Component } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export default class MyNavLink extends Component<NavLinkProps> {
  render() {
    return (
      <div>
        <NavLink {...this.props} to={this.props.to} />
      </div>
    );
  }
}

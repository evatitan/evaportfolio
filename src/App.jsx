import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Content/Portfolio';
import Travel from './pages/Content/Travel';
import Spanish from './pages/Content/Spanish';
import Footer from './pages/Footer';
import About from './pages/Content/About';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Home />

				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/travel">
						<Travel />
					</Route>
					<Route path="/language/spanish">
						<Spanish />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Redirect to="/home" />
				</Switch>

				<Footer />
			</div>
		);
	}
}

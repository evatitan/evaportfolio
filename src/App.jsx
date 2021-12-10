import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/Content/About';
import Travel from './pages/Content/Travel';
import Portfolio from './pages/Content/Portfolio';
import Spanish from './pages/Content/Spanish';
import Contact from './pages/Content/Contact';
import Footer from './pages/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />

				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/travel">
						<Travel />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/language/spanish">
						<Spanish />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Redirect to="/home" />
				</Switch>

				<Footer />
			</div>
		);
	}
}

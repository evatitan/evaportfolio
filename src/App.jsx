import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loading from './components/Loading';
const Navbar = lazy(() => import('./pages/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/Content/About'));
const Travel = lazy(() => import('./pages/Content/Travel'));
const Portfolio = lazy(() => import('./pages/Content/Portfolio'));
const TodoList = lazy(() => import('./pages/Content/TodoList'));
const Spanish = lazy(() => import('./pages/Content/Spanish'));
const Contact = lazy(() => import('./pages/Content/Contact'));
const Footer = lazy(() => import('./pages/Footer'));

export default class App extends Component {
	render() {
		return (
			<div>
				<Suspense fallback={<Loading />}>
					<Navbar />
					<Switch>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/travel">
							<Travel />
						</Route>
						<Route exact path="/portfolio">
							<Portfolio />
						</Route>
						<Route exact path="/portfolio/todoList">
							<TodoList />
						</Route>
						<Route exact path="/language/spanish">
							<Spanish />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Redirect to="/" />
					</Switch>
					<Footer />
				</Suspense>
			</div>
		);
	}
}

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
						<Route path="/portfolio/todoList">
							<TodoList />
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
				</Suspense>
			</div>
		);
	}
}

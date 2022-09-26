import React from 'react';
import Header from './Header';
import List from './List';
import Foot from './Foot';
import './index.css';

export default class index extends React.Component {
	render() {
		return (
			<div className="todo_page">
				<div className="todo_wrap">
					<Header />
					<List />
					<Foot />
				</div>
			</div>
		);
	}
}

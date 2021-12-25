import React from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { addTodo } from '../../../../redux/actions/header';
import './index.css';

class Header extends React.Component {
	handleKeyUp = (event) => {
		const { keyCode, target } = event;
		//console.log(keyCode, target);
		if (keyCode !== 13) return;
		if (target.value.trim() === '') {
			alert('Todo can not be empty');
		} else {
			const todoObj = { id: nanoid(), name: target.value, done: false };
			this.props.addTodo(todoObj);
			//console.log(todoObj);
		}

		target.value = '';
	};

	render() {
		//console.log(this.props.todos);
		return (
			<div className="todo_header">
				<h2>Todo List</h2>
				<input
					onKeyUp={this.handleKeyUp}
					type="text"
					id="newTodo"
					placeholder="Please write a new todo and push ENTER"
				/>
			</div>
		);
	}
}

export default connect((state) => ({ todos: state.todos }), { addTodo })(Header);

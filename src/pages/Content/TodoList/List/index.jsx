import React from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../../../../redux/actions/header';
import './index.css';

class List extends React.Component {
	handleUpdate = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked);
		};
	};

	handleDelete = (id) => {
		return this.props.deleteTodo(id);
	};

	render() {
		return (
			<ul className="todo_list">
				{this.props.todos.map((todo) => {
					return (
						<li key={todo.id} className="todo_item">
							<label className="todo_label">
								<input type="checkbox" checked={todo.done} onChange={this.handleUpdate(todo.id)} />
								<span className="todo_name">{todo.name}</span>
							</label>
							<button
								onClick={() => this.handleDelete(todo.id)}
								className="todo_btn"
								style={{ display: 'block' }}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default connect(
	(state) => ({
		todos: state.todos
	}),
	{
		updateTodo,
		deleteTodo
	}
)(List);

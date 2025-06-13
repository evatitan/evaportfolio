import React from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../../../../redux/actions/header';
import './index.css';

interface Todo {
  id: string;
  name: string;
  done: boolean;
}

interface ListProps {
  todos: Todo[];
  updateTodo: (id: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
}

interface RootState {
  todos: Todo[];
}

class List extends React.Component<ListProps> {
  handleUpdate = (id: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete = (id: string): void => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <ul className="todo_list">
        {this.props.todos.map(todo => {
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

export default connect<
  { todos: Todo[] },
  { updateTodo: (id: string, checked: boolean) => void; deleteTodo: (id: string) => void },
  {},
  RootState
>(
  (state: RootState) => ({
    todos: state.todos,
  }),
  {
    updateTodo,
    deleteTodo,
  }
)(List);

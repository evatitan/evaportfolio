import React from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { addTodo } from '../../../../redux/actions/header';
import './index.css';

interface Todo {
  id: string;
  name: string;
  done: boolean;
}

interface HeaderProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

interface RootState {
  todos: Todo[];
}

class Header extends React.Component<HeaderProps> {
  handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if ((target as HTMLInputElement).value.trim() === '') {
      alert('Todo can not be empty');
    } else {
      const todoObj: Todo = {
        id: nanoid(),
        name: (target as HTMLInputElement).value,
        done: false,
      };
      this.props.addTodo(todoObj);
    }
    (target as HTMLInputElement).value = '';
  };

  render() {
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

export default connect<{ todos: Todo[] }, { addTodo: (todo: Todo) => void }, {}, RootState>(
  (state: RootState) => ({ todos: state.todos }),
  { addTodo }
)(Header);

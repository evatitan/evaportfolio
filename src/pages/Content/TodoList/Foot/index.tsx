import React from 'react';
import { connect } from 'react-redux';
import { clearAllDoneTodo, checkAllTodo } from '../../../../redux/actions/header';
import './index.css';

interface Todo {
  id: string;
  name: string;
  done: boolean;
}

interface FootProps {
  todos: Todo[];
  clearAllDoneTodo: () => void;
  checkAllTodo: (checked: boolean) => void;
}

interface RootState {
  todos: Todo[];
}

class Foot extends React.Component<FootProps> {
  handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.checkAllTodo(event.target.checked);
  };

  deleteAllDone = (): void => {
    this.props.clearAllDoneTodo();
  };

  render() {
    const { todos } = this.props;
    let allTodos = todos.length;
    let doneTodos = todos.reduce((pre, todo) => {
      if (todo.done === true) {
        return pre + 1;
      } else {
        return pre + 0;
      }
    }, 0);

    return (
      <div className="todo_footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneTodos === allTodos && allTodos !== 0 ? true : false}
          />
        </label>
        <span>
          <span className="footer_info">
            Done {doneTodos} / All {allTodos}{' '}
          </span>
        </span>
        <button onClick={this.deleteAllDone} className="todo_btn">
          Clear All Done
        </button>
      </div>
    );
  }
}

export default connect<
  { todos: Todo[] },
  { clearAllDoneTodo: () => void; checkAllTodo: (checked: boolean) => void },
  {},
  RootState
>(
  (state: RootState) => ({
    todos: state.todos,
  }),
  {
    clearAllDoneTodo,
    checkAllTodo,
  }
)(Foot);

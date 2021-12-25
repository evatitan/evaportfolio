export const addTodo = (todoObj) => ({ type: 'addTodo', todo: todoObj });
export const updateTodo = (id, done) => ({ type: 'updateTodo', id, done });
export const deleteTodo = (id) => ({ type: 'deleteTodo', id });
export const checkAllTodo = (done) => ({ type: 'checkAllTodo', done });
export const clearAllDoneTodo = () => ({ type: 'clearAllDoneTodo' });

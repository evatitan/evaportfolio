const initState = [];
export default function headerReducer(preState = initState, action) {
	const { type, todo, id, done } = action;
	switch (type) {
		
		case 'addTodo':
			return [ todo, ...preState ];

		case 'updateTodo':
			return preState.map((todoObj) => {
				if (todoObj.id === id) {
					return { ...todoObj, done: done };
				} else {
					return todoObj;
				}
			});

		case 'deleteTodo':
			return preState.filter((todoObj) => {
				return todoObj.id !== id;
			});

		case 'checkAllTodo':
			return preState.map((todoObj) => {
				return { ...todoObj, done: done };
			});

		case 'clearAllDoneTodo':
			return preState.filter((todoObj) => {
				return todoObj.done === false;
			});

		default:
			return preState;
	}
}

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

let nextTodoId = 1;

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: todo,
    status: false
  };
}

export function completeTodo(todo) {
  return {
    type: COMPLETE_TODO,
    todo
  };
}

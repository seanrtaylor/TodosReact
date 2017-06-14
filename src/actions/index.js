export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FILTER_TODO = 'FILTER_TODO';

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

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    todo
  };
}

export function editTodo(text, todo) {
  return {
    type: EDIT_TODO,
    todo,
    text
  };
}


export function filterTodo(filter) {
  return {
    type: FILTER_TODO
  };
}

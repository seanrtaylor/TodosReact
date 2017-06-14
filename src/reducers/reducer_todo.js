import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case ADD_TODO:
      return [{ id: action.id, text: action.text, status: action.status}, ...state ];

    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.todo.id){
          return Object.assign({}, todo, {
            text: action.text
          });
        }
        return todo;
      });


    case DELETE_TODO:
      return state.filter((todo) => todo.id != action.todo.id);

    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.todo.id){
          return Object.assign({}, todo, {
            status: !todo.status
          });
        }
        return todo;
      });
    }

    return state;
}

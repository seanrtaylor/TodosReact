import { ADD_TODO, COMPLETE_TODO } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case ADD_TODO:
      return [ { id: action.id, text: action.text, status: action.status}, ...state ];

    case COMPLETE_TODO:
      state = state.map( (todo) => {
        if (todo.id === action.todo.id){
          return Object.assign({}, todo, {
            status: !todo.status
          });
        }
        return todo;
      });
      break;

    }
    return state;
}

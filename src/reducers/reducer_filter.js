import { FILTER_TODO } from '../actions/index';

export default function(state = true, action) {

  switch(action.type) {
    case FILTER_TODO:
      return !state;
    }
    return state;
}

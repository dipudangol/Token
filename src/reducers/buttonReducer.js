import * as types from '../actions/actionTypes';


export default function buttonReducer(state = [], action) {
  switch (action.type) {
    // case 'SEARCH_STATION':
    //   return Object.assign({}, state, {
    //     searchText:action.text
    //   });
    case types.LOAD_BUTTONS_SUCCESS:
      // debugger;
      return action.buttons;
    default:
      return state;
  }
}

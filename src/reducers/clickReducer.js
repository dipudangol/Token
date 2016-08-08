import * as types from '../actions/actionTypes';


export default function clickReducer(state = [], action) {
  switch (action.type) {
    
    case types.CLICK_BUTTONS_SUCCESS:
      return action.buttons;
    default:
      return state;
  }
}

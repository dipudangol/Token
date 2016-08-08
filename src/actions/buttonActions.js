import * as types from './actionTypes';
import buttonApi from '../api/serviceButtonApi';
import onclickApi from '../api/onclickApi';


export function loadButtonSuccsess(buttons) {
  return {type: types.LOAD_BUTTONS_SUCCESS, buttons};
}

export function loadButtons() {
  return function(dispatch) {
    return buttonApi.getAllButtons().then(buttons => {
      dispatch(loadButtonSuccsess(buttons));
    }).catch(error => {
      throw(error);
    });
  };
}

export function clickButtonSuccsess(buttons) {
  return {type: types.CLICK_BUTTONS_SUCCESS, buttons};
}

export function clickButtons() {
  return function(dispatch) {
    return onclickApi.getAllButtons().then(buttons => {
      dispatch(clickButtonSuccsess(buttons));
    }).catch(error => {
      throw(error);
    });
  };
}


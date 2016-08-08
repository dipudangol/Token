import * as types from './actionTypes';
import onclickApi from '../api/onclickApi';

export function clickButtonSuccsess(buttons) {
  return {type: types.CLICK_BUTTONS_SUCCESS, buttons};
}

export function clickButtons() {
  return function(dispatch) {
    return onclickApi.clickButtons().then(buttons => {
      dispatch(clickButtonSuccsess(buttons));
    }).catch(error => {
      throw(error);
    });
  };
}

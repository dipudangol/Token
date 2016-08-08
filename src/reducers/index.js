import {combineReducers} from 'redux';
import buttons from './buttonReducer';
import clicks from './clickReducer';

const rootReducer = combineReducers({
  buttons, 
  clicks
});

export default rootReducer;

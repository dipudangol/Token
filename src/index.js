import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadButtons} from './actions/buttonActions';

const store = configureStore();
store.dispatch(loadButtons());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,  document.getElementById('app'));

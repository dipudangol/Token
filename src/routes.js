import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ElementPage from './components/common/ElementPage';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={ElementPage}/>
    </Route>
);


import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from '../containers/App/App';
import Planets from '../containers/Planets/Planets';


export const Routes = () => // you cannot export default a const here. only a class.
  (<Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="planets" component={Planets} />
</Router>);

// Need to user browserHistory in order to get Routes to work.
// github pages needs {hashHistory}. not using server at all.
// browserhistory uses server.

// *but you can export default a const down here. 
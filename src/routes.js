import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main'
import Mobile from './pages/Mobile'
function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path='/mobile' component={Mobile} />
        </Switch>
    );
}
export default Routes;
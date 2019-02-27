import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Calender from './components/Calender';


const Routes = () => {
return (

<Router>
<Switch>
<Route exact path = "/" component={Calender} />
</Switch>
</Router>

)
}

export default Routes;



import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import Home from './Home';
import Resource from './Resource';
import RequireAuthentication from '../helpers/require-authentication';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Resources" exact component={RequireAuthentication(Resource)} />
                </Switch>
            </div>
            
        );
    }
}

export default App;
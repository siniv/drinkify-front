import React, {Component} from 'react';
import './App.css';
import Navigation from "./modules/Navigation";
import ItemBox from "./modules/ItemBox";
import ItemSort from "./modules/ItemSort";

import Login from "./modules/Login";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./modules/Home";

class App extends Component {

    render() {

        return (
            <div className="App">
                <Router>
                    <div>
                        <Navigation />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/selaa" component={ItemSort} />
                            <Route path="/lainaamuille" component={ItemBox} />
                            <Route path="/login" exact component={Login} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Navigation from "./modules/Navigation";
import ItemBox from "./modules/ItemBox";
import ItemSort from "./modules/ItemSort";


import Login from "./modules/Login";

import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Home from "./modules/Home";



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            id:""
        };
    }

    loggedInUser() {
        this.setState()
    }

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

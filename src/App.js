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

    // constructor(props) {
    //     super(props);

        state = {
            email: "",
            password: "",
            id: ""
        };
    // }

    // componentDidMount() {
    //     // this.loggedInUser()
    //     var email = JSON.stringify(sessionStorage.getItem("email"));
    //     console.log(email)
    //     console.log(sessionStorage.getItem("email"))
    //     this.setState({email: email})
    //     console.log(this.state)
    //     this.setState({email: sessionStorage.getItem("email"), password: sessionStorage.getItem("password"), id: sessionStorage.getItem("id")})
    //     console.log(this.state);
    // }

    loggedInUser() {
        this.setState({email: sessionStorage.getItem("email"), password: sessionStorage.getItem("password"), id: sessionStorage.getItem("id")})
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

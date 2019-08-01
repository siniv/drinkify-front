import React, {Component} from 'react';
import './App.css';
import Navigation from "./modules/Navigation";
import ItemBox from "./modules/ItemBox";
import ItemSort from "./modules/ItemSort";
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Home from "./modules/Home";
{/*<div className="App">*/}
{/*    <Navigation/>*/}

{/*  <ItemBox/>*/}
{/*  <ItemSort/>*/}
{/*</div>*/}


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
                        </Switch>
                    </div>
                </Router>


            </div>
        );
    }
}

export default App;

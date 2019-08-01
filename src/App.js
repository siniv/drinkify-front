import React, {Component} from 'react';
import './App.css';
import Navigation from "./modules/Navigation";
import ItemBox from "./modules/ItemBox";
import ItemSort from "./modules/ItemSort";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from "./modules/Login";
{/*<div className="App">*/}
{/*    <Navigation/>*/}

{/*  <ItemBox/>*/}
{/*  <ItemSort/>*/}
{/*</div>*/}


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            id:""
        };
    }

    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                        <Navigation />
                        <Switch>
                            <Route exact path="/" component={ItemSort} />
                            {/*<Route path="/quotes" component={QuoteList} />*/}
                            <Route path="/lainaamuille" component={ItemBox} />
                            {/*<Route path="/details" component={QuoteDetails} />*/}
                            <Route path="/login" exact component={Login} />
                        </Switch>
                    </div>
                </Router>


            </div>
        );
    }
}

export default App;

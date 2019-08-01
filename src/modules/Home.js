import React, {Component} from 'react';
import {createItem, getItems} from "./serviceAxios";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

// Kotisivu, joka palauttaa listan kaikista palvelussa olevista tuotteista.

class Home extends Component {
    state = {items: []};
    componentDidMount() {
        this.getListAndUpdate()
    }
    getListAndUpdate = () => {
        getItems(list=>{
            this.setState({items: list});
        });
    };

    render() {

        return (
            <div className="home">
                <Jumbotron fluid>
                <Container>
                <h1>Tervetuloa Lainaksi - sivuille!</h1>
                <p>Lainaa ja anna lainaksi. Yhteisöllisyyttää, jakamistaloutta ja hiilijalanjälki.</p>
                </Container>
                </Jumbotron>

                <ItemList items={this.state.items}/>
            </div>
        );
    }

}

export default Home;
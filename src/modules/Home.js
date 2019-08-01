import React, {Component} from 'react';
import {createItem, getItems, updateItemAvailability} from "./serviceAxios";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

// Kotisivu, jossa Jumbotron tekstille, ja johon tulostuu ItemList kaikista palvelussa olevista tuotteista.

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

    updateItem = (itemId) => {
        updateItemAvailability(itemId)
            .then((response)=> {
                this.getListAndUpdate();
                console.log(response);
            })
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

                <ItemList items={this.state.items} updateItem={this.updateItem}/>

            </div>
        );
    }

}

export default Home;
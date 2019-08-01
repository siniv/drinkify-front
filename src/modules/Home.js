import React, {Component} from 'react';
import {createItem, getItems} from "./serviceAxios";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

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
                <h2>Tervetuloa Lainaksi - sivuille!</h2>
                <p> testi...</p>
                <p>Lainaa ja anna lainaksi. Yhteisöllisyyttää, jakamistaloutta ja hiilijalanjälki.</p>
                <ItemList items={this.state.items}/>
            </div>
        );
    }

}

export default Home;
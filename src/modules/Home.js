import React, {Component} from 'react';
import {createItem, getItems, updateItemAvailability} from "./serviceAxios";
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

    updateItem = (itemId) => {
        updateItemAvailability(itemId)
            .then((response)=> {
                this.getListAndUpdate();
                console.log(response);
            })
    }

    render() {

        return (
            <div className="home">
                <h2>Tervetuloa Lainaksi - sivuille!</h2>
                <p>Lainaa ja anna lainaksi. Yhteisöllisyyttää, jakamistaloutta ja hiilijalanjälki.</p>
                <h2>Tervetuloa Lainaksi - sivuille, osa kaksi!</h2>
                <ItemList items={this.state.items} updateItem={this.updateItem}/>
            </div>
        );
    }

}

export default Home;
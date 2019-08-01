import React, {Component} from 'react';
import {getSortedItems, updateItemAvailability} from "./serviceAxios";
import ItemSortList from "./ItemSortList";
import ItemSortForm from "./ItemSortForm";


// Hae tuotteita kategorian mukaan. ItemSortForm antaa dropdown-valikon, josta kategoria valitaan.
// ItemSortList palauttaa CardDeckin, jossa hakuehdon täyttävät tuotteet (ItemCard).

class ItemSort extends Component {
    state = {
        sorteditems: []
    };

    componentDidMount() {
        this.getSortedListAndUpdate();
    }

    //Ei näin, koska tämä kutsuu koko ajan uutta hakua ja hakutulokset katoavat näkyvistä heti.
    /*componentDidUpdate() {
        console.log("update")
        this.getSortedListAndUpdate();
    }*/

    getSortedListAndUpdate = (category) => {
        getSortedItems(list=>{
            this.setState({ sorteditems: list});
        }, category);
    };

    updateItem = (itemId) => {
        updateItemAvailability(itemId)
            .then((response)=> {
                this.getSortedListAndUpdate();
                console.log(response);
            })
    }

    render() {

        return (
            <div>
                <div className="itemsort">
                    <ItemSortForm getSortedListAndUpdate={this.getSortedListAndUpdate}/>
                    <ItemSortList sorteditems={this.state.sorteditems} updateItem={this.updateItem}/>
                </div>
            </div>);
    }
}

export default ItemSort;
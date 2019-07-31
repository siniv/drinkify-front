import React, {Component} from 'react';
import {getSortedItems} from "./serviceAxios";
import ItemSortList from "./ItemSortList";
import ItemSortForm from "./ItemSortForm";

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

    render() {

        return (
            <div>
                <div className="itemsort">
                    <ItemSortForm getSortedListAndUpdate={this.getSortedListAndUpdate}/>
                    <ItemSortList sorteditems={this.state.sorteditems}/>
                </div>
            </div>);
    }
}

export default ItemSort;
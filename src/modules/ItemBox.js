import React, {Component} from 'react';
import {createItem, getItems} from "./serviceAxios";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

class ItemBox extends Component {
    state = {items: []}
    componentDidMount() {
        this.getListAndUpdate();
    }
    getListAndUpdate = () => {
        getItems(list=>{
            this.setState({items: list});
        });
    };
    newItem = (newitem) => {
        createItem(newitem, ()=>{
            this.getListAndUpdate();
        })
    }
    // poistaQuote = (poistettavanId) => {
    //     poistaSanonta(poistettavanId)
    //         .then((response)=> {
    //             this.haeListaJaPaivita();
    //         });
    // }

    render() {
        return (
            <div>

                <div className="itembox">
                    <ItemForm lisaaSanonta={this.newItem}/>
                    {/*<HenkiloList sanonnat={this.state.quotet} poisto={this.poistaQuote}/>*/}
                    <ItemList items={this.state.items}/>
                </div>
            </div>);
    }
}

export default ItemBox;
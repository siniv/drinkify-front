import React, {Component} from 'react';

import {createItem, getItems, updateItemAvailability} from "./serviceAxios";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

class ItemBox extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        this.getListAndUpdate()
    };

    //haetaan lista ja päivitetään sivu
    getListAndUpdate = () => {
        getItems(list=>{
            this.setState({items: list});
        });
    };

    //lisätään uusi item tietokantaan, mukana myös käyttäjän id
    newItem = (newitem, id) => {
        const obj = {
            ...newitem,
            owner: {
                id: id
            }
        }
        createItem(obj, ()=>{
            this.getListAndUpdate();
        })
    };

    //päivitetään onko item vapaana
    updateItem = (itemId) => {
        updateItemAvailability(itemId)
            .then((response)=> {
                this.getListAndUpdate();
                console.log(response);
        })
    };

    // tulee mahd. myöhemmin
    // poistaQuote = (poistettavanId) => {
    //     poistaSanonta(poistettavanId)
    //         .then((response)=> {
    //             this.haeListaJaPaivita();
    //         });
    // }

    render() {
        const email = sessionStorage.getItem("email")
        const items = this.state.items.filter(item => item.owner.email === email)
        return (
            <div>
                {sessionStorage.getItem("email") !== undefined ? <div className="itembox">
                    <ItemForm addItem={this.newItem} />
                    <ItemList items={items} updateItem={this.updateItem}/>
                </div> : <div></div>}
            </div>);
    }
}

export default ItemBox;
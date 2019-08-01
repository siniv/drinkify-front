import React, {Component} from 'react';
import {createItem, getItems} from "./serviceAxios";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import Button from "react-bootstrap/Button";

class ItemBox extends Component {
    state = {
        items: [],
        email: "",
        password: "",
        id:""}

    componentDidMount() {
        this.getListAndUpdate()
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
    loggedInUser() {
        this.setState({email: sessionStorage.getItem("email"), password: sessionStorage.getItem("password"), id: sessionStorage.getItem("id")})
        console.log(this.state);
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
                {sessionStorage.getItem("email") != undefined ? <div className="itembox">
                    <ItemForm addItem={this.newItem}/>
                    <ItemList items={this.state.items}/>
                </div> : <div></div>}
            </div>);
    }
}

export default ItemBox;
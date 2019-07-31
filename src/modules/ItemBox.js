import React, {Component} from 'react';
import {createItem, getItems, getKuva, createKuva} from "./serviceAxios";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

class ItemBox extends Component {
    state = {items: [], imageid: ''}
    componentDidMount() {
        this.getListAndUpdate();
        this.haeKuva();
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

    newImage = (newimage) => {
        createKuva(newimage, ()=>{
            this.setState({})
        })
    }
    // poistaQuote = (poistettavanId) => {
    //     poistaSanonta(poistettavanId)
    //         .then((response)=> {
    //             this.haeListaJaPaivita();
    //         });
    // }

    haeKuva = () => {
        var img = document.getElementById("image");
        getKuva(kuva=>{

            img.setAttribute("src", "data:image/png;base64," + kuva);
            console.log(kuva)
            console.log(img)
        });
        return img
    };

    render() {

        return (
            <div>

                <div className="itembox">
                    <ItemForm addItem={this.newItem}/>
                    <img id="image" tämän pitäisi tulla kuva/>
                    {/*<HenkiloList sanonnat={this.state.quotet} poisto={this.poistaQuote}/>*/}
                    <ItemList items={this.state.items}/>
                </div>
            </div>);
    }
}

export default ItemBox;
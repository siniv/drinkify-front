import React, {Component} from 'react';
import {getItems} from "./serviceAxios";
import ItemCard from "./ItemCard";

class ItemBox extends Component {
    state = {items: []}
    componentDidMount() {
        this.haeListaJaPaivita();
    }
    haeListaJaPaivita = () => {

        getItems(lista=>{
            this.setState({items: lista});
        });
    };
    // uusiQuote = (uusisanonta) => {
    //     /*  luosanonta(uusisanonta, function () {
    //           this.haeListaJaPaivita();
    //       }.bind(this));*/
    //     luosanonta(uusisanonta, ()=>{
    //         this.haeListaJaPaivita();
    //     })
    // }
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
                    {/*<HenkiloForm lisaaSanonta={this.uusiQuote}/>*/}
                    {/*<HenkiloList sanonnat={this.state.quotet} poisto={this.poistaQuote}/>*/}
                    <ItemCard items={this.state.items}/>
                </div>
            </div>);
    }
}

export default ItemBox;
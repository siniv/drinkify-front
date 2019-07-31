import React, {Component} from 'react';
import ItemCard from "./ItemCard";
import CardDeck from 'react-bootstrap/CardDeck';
import Col from "react-bootstrap/Col";

class ItemList extends Component {
    render() {
        var all = this.props.items.reverse()
            .map(function(item) {
                return (<ItemCard item={item} key={item.id}/>);
                //poisto puuttuu
                // return (<ItemCard item={item} poista={this.props.poisto} key={item.id}/>);
            });
    // }.bind(this));
        return(
            <div>
                <CardDeck className="itemlist">
                    {all}
                </CardDeck>
            </div>
        );
    }
}

export default ItemList;
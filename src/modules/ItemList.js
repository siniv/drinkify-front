import React, {Component} from 'react';
import ItemCard from "./ItemCard";
import CardDeck from 'react-bootstrap/CardDeck';
import Container from "react-bootstrap/Container";

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
                <Container>
                <CardDeck className="itemlist">
                    {all}
                </CardDeck>
                </Container>
            </div>
        );
    }
}

export default ItemList;
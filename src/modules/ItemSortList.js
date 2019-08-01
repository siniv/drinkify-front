import React, {Component} from 'react';
import ItemCard from "./ItemCard";
import CardDeck from 'react-bootstrap/CardDeck';
import Container from "react-bootstrap/Container";

// Rakentaa listan valitun kategorian tavaroista ja esittää sen CardDeckinä.
class ItemSortList extends Component {
    render() {
        const self = this;
        var sorted = this.props.sorteditems.reverse()
            .map(function(sortedItem) {
                return (<ItemCard item={sortedItem} updateItem={self.props.updateItem} key={sortedItem.id}/>);
            });
        return(
            <div id="SortedDeck">
                <Container>
                    <CardDeck className="itemsortlist">
                        {sorted}
                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default ItemSortList;
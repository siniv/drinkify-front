import React, {Component} from 'react';
import ItemCard from "./ItemCard";

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
                <ul className="itemlist">
                    {all}
                </ul>
            </div>
        );
    }
}

export default ItemList;
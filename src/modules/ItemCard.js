import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ItemCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.items.name}</Card.Title>
                        <Card.Text>
                            {this.props.items.description}
                        </Card.Text>
                        <Button variant="primary">Haluan lainata</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ItemCard;
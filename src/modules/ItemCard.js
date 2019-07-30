import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ItemCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/drill.jpg" />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>

                        <Card.Text>
                            {this.props.item.description}
                        </Card.Text>
                        <Card.Text>{this.props.item.category}</Card.Text>
                        <Button variant="primary">Haluan lainata</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ItemCard;
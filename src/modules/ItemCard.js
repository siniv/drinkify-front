import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ItemCard extends Component {
    renderAvailability = (available) => {
        if (available) return <Card.Text className="available">Vapaa</Card.Text>
        else return <Card.Text className="notavailable">Varattu</Card.Text>
    };
    chooseImage = () => {
        if(this.props.item.category === "Tyokalu"){
            return <Card.Img variant="top" src="/images/drill.jpg" />
        }else if(this.props.item.category === "Astia"){
            return <Card.Img variant="top" src="/images/champagnebowl.jpg" />
        }else if(this.props.item.category === "Muu"){
            return <Card.Img variant="top" src="/images/car.jpg" />
        }else if(this.props.item.category === "Kodinkone"){
            return <Card.Img variant="top" src="/images/coffeemaker.jpg" />
        }
    }
    render() {
        console.log(this.props.item);
        return (
            <div>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        {this.renderAvailability(this.props.item.available)}
                        {this.chooseImage()}
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
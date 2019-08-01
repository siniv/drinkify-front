import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Täällä rakentuu ItemCard, joka näytetään CardDeckin sisällä (React Bootstrap).
// Käyttäjinä sekä ItemList että ItemCardList.

class ItemCard extends Component {

    update = () => {
        console.log(this.props.item.id);
        console.log(this.props.updateItem)
        this.props.updateItem(this.props.item.id);
    }

    // Onko tavara vapaana vai ei:
    renderAvailability = (available) => {
        if (available) return <Card.Text className="available">Vapaa</Card.Text>
        else return <Card.Text className="notavailable">Varattu</Card.Text>
    };

    // Jos vapaana, niin "Haluan lainata" -nappi tekee lainauksen.
    // Jos varattuna, niin "Peru laina"-nappi vapauttaa varauksen.
    renderButton = (available) => {
        if (available) return <Button variant="primary" onClick={this.update}>Haluan lainata</Button>
        else return <Button variant="primary" onClick={this.update}>Peru laina</Button>
    }

    // Kortti näyttää teemakuvan sen mukaan, minkä kategorian käyttäjä on valinnut tavaralleen:
    chooseImage = () => {
        if(this.props.item.category === "Tyokalu"){
            return <Card.Img variant="top" src="/images/drill.jpg"/>

        }else if(this.props.item.category === "Astia"){
            return <Card.Img variant="top" src="/images/champagnebowl.jpg" />
        }else if(this.props.item.category === "Muu"){
            return <Card.Img variant="top" src="/images/car_square.jpg" />
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

                        {this.renderButton(this.props.item.available)}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ItemCard;
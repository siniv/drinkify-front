import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class ItemForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Col sm="6">
                    <h2>Lainaa muille!</h2>
                    <br/>
                    <Form.Group  controlId="formDrinkName">
                        <Form.Label>Tavaran nimi</Form.Label>
                        <Form.Control type="text" placeholder="Syötä nimi" />
                    </Form.Group>

                    <Form.Group controlId="formDrinkRecipe">
                        <Form.Label>Tavaran kuvaus</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    {/*<Form.Group controlId="formBasicChecbox">*/}
                    {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                    {/*</Form.Group>*/}
                    <Form.Group controlId="formGridState">
                        <Form.Label>Kategoria</Form.Label>
                        <Form.Control as="select">
                            <option>Valitse...</option>
                            <option>Työkalu</option>
                            <option>Kodinkone</option>
                            <option>Astia</option>
                            <option>Muu</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Lisää
                    </Button>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default ItemForm;
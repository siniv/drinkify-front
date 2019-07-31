import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class ItemSortForm extends Component {
    state = {category: ''};

    categoryChanged = (e) => {
        this.setState({category: e.target.value});
        console.log(e.target.value)
    };
    send = (e) => {
        e.preventDefault();
        this.props.getSortedListAndUpdate(this.state.category);
        this.setState({category: ''});
    };

    render() {

        return (
            <div>
                <Form onSubmit={this.send}>
                    <Col sm="6">
                        <h2>Sorttaa lista!</h2>
                        <br/>
                        <Form.Group controlId="formGridState">
                            <Form.Label>Kategoria</Form.Label>
                            <Form.Control as="select" value={this.state.category}onChange={this.categoryChanged}>
                                <option>Valitse...</option>
                                <option>Tyokalu</option>
                                <option>Kodinkone</option>
                                <option>Astia</option>
                                <option>Muu</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Hae
                        </Button>
                    </Col>
                </Form>
            </div>
        );
    }

}

export default ItemSortForm;
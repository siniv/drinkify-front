import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ItemList from "./ItemList";
import {getItems} from "./serviceAxios";

// Tämä hoitaa kategorian mukaan haun.
// HUOM! Kategorioiden täytyy olla samat, kuin tuotteen lisäyksessä.
// HUOM! Ei ääkkösiä, koska kategorian nimi menee osaksi URL:ia / ServiceAxios. (Voisi kiertää esim category ID:llä.)

class ItemSortForm extends Component {
    state = {
        category: '',
        //items: []
    };
    // componentDidMount() {
    //     this.getListAndUpdate()
    // }
    // getListAndUpdate = () => {
    //     getItems(list=>{
    //         this.setState({items: list});
    //     });
    // };
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
                        <h2>Selaa lainattavia tuotteita</h2>
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
                {/*<div>*/}
                {/*    <ItemList items={this.state.items}/>*/}
                {/*</div>*/}
            </div>
        );
    }

}

export default ItemSortForm;
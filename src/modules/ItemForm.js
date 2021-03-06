import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

// Lomake, jolla uusi tavara syötetään sisään järjestelmään.
// 2 x avoin tekstikenttä, jonne tekstimuotoiset nimi ja kuvaus.
// Drop down menu, josta valitaan tuotekategoria.
// HUOM! Kategorioiden nimien täytyy olla samat, kuin kategorian mukaan sorttauksessa (ItemSortForm).
// HUOM! Ei ääkkösiä, koska kategorian nimi menee osaksi URL:ia / ServiceAxios. (Voisi kiertää esim category ID:llä.)

class ItemForm extends Component {
    state = {name: '', description: '', category: ''}
    nameChanged = (e) => {
        this.setState({name: e.target.value});
    }

    descriptionChanged = (e) => {
        this.setState({description: e.target.value});
    }
    categoryChanged = (e) => {
        this.setState({category: e.target.value});
    }
    send = (e) => {
        e.preventDefault();
        const id = sessionStorage.getItem("id")
        this.props.addItem(this.state, id);
        this.setState({name: '',  description: '', category: ''});
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.send}>
                    <Col sm="6">
                    <h2>Lainaa muille!</h2>
                    {/*<br/>*/}
                    <Form.Group  controlId="formItemkName">
                        <Form.Label>Tavaran nimi</Form.Label>
                        <Form.Control type="text" placeholder="Syötä nimi" value={this.state.name} onChange={this.nameChanged} />
                    </Form.Group>
                        <Form.Group controlId="formItenDescription">
                            <Form.Label>Tavaran kuvaus</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.descriptionChanged}/>
                        </Form.Group>
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
                    <Button variant="secondary" type="submit">
                        Lisää
                    </Button>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default ItemForm;
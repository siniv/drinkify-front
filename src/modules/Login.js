import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {getSortedItems, getUser} from "./serviceAxios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            id: ""
        };
        // this.handlePageChange = this.handlePageChange.bind(this);
    }

    getUserByEmail = (email) => {
        getUser(user=>{
            this.setState({ email: user.data.email, password: user.data.password, id: user.data.id});
            console.log(this.state);
            sessionStorage.setItem("email", this.state.email);
            sessionStorage.setItem("password", this.state.password);
            sessionStorage.setItem("id", this.state.id);
        }, email);
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.getUserByEmail(this.state.email)
        this.handlePageChange()

    }
    handlePageChange() {
        window.location = "http://localhost:3000/lainaamuille";
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email" bsSize="large">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" bsSize="large">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}
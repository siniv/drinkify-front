import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"; //saatetaan tarvita vielä
import {Link} from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
            <div className="navi" id="navi">
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/"><img alt="lainaksi.fi" src="/images/logoblack.png" height="51" width="200"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link tag={Link} href="/">Kotisivu</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link tag={Link} href="/selaa">Selaa listaa</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link tag={Link} href="/lainaamuille">Lainaa muille</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link tag={Link} href="/login">Kirjaudu sisään</Nav.Link></Nav.Item>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
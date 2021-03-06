import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// Täällä syntyy sivujen navigaatio.

class Navigation extends Component {

    render() {
        return (
            <div className="navi" id="navi">
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/"><img alt="lainaksi.fi" src="/images/logoblack.png" height="51" width="200"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link href="/">Kotisivu</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/selaa">Selaa listaa</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/lainaamuille">Lainaa muille</Nav.Link></Nav.Item>
                            <NavDropdown title="Kirjaudu" id="basic-nav-dropdown">
                                <Nav.Item><Nav.Link href="/login">Kirjaudu sisään</Nav.Link></Nav.Item>
                                <NavDropdown.Divider />
                                <Nav.Item><Nav.Link href="/">Kirjaudu ulos</Nav.Link></Nav.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
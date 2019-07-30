import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><img alt="lainaksi.fi" src="/images/logoblack.png" height="51" width="200"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/*routing harjoituksesta pohja: */}
                {/*<Navbar className="omanav">*/}
                {/*    <Navbar.Brand href="/">Quotes</Navbar.Brand>*/}
                {/*    <Nav className="mr-auto">*/}
                {/*        <NavItem>*/}
                {/*            <Nav.Link tag={Link} href="/">Home</Nav.Link>*/}
                {/*        </NavItem>*/}
                {/*        <NavItem>*/}
                {/*            <Nav.Link tag={Link} href="/create">Form</Nav.Link>*/}
                {/*        </NavItem>*/}
                {/*    </Nav>*/}
                {/*</Navbar>*/}
            </div>
        );
    }
}

export default Navigation;
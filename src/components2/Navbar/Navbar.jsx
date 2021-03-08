import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

// Styles 
import './Navbar.scss';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="custom-nav">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/">Inicio</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/marketing">Marketing</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/development">Desarrollo</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/systems">Sistemas</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/home-automation">Domótica</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;

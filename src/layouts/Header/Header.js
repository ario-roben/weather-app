import React, { Component } from 'react';
import './Header.css'

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
 
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        

    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }
   
    render(){
        return (
            <Navbar dark expand="md" className='row'>
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                  
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}
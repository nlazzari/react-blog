import React from 'react';
// import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    NavbarMenu,
    NavbarBurger,
    NavbarItem,
    NavbarEnd,
} from 'bloomer';
import { Link } from 'react-router-dom';
import './style.css';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
        this.handleOnClickNav = this.handleOnClickNav.bind(this);
    }

    handleOnClickNav() {
        this.setState({
            isActive: !this.state.isActive,
        });
    }

    render() {
        return (
    <Navbar isTransparent >
        <NavbarBrand>
            <NavbarItem>
                <Link to='/'>
                    React-Blog
                </Link>
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.handleOnClickNav} />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.handleOnClickNav}>
        <NavbarEnd>
            <NavbarItem>
                <Link to="/category/homes">
                    Homes
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link to="/category/interiors">
                    Interiors
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link to="/category/travel">
                    Travel
                </Link>
            </NavbarItem>
        </NavbarEnd>
        </NavbarMenu>
    </Navbar>);
    }
}
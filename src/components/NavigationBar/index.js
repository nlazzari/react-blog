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
        this.onClickNav = this.onClickNav.bind(this);
    }

    onClickNav() {
        this.setState({
            isActive: !this.state.isActive,
        });
    }

    render() {
        return (
    <Navbar isTransparent>
        <NavbarBrand>
            <NavbarItem>
                React Blog
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
                <NavbarItem>
                    <Link to="/">
                        Page
                    </Link>
                </NavbarItem>
            </NavbarEnd>
        </NavbarMenu>
    </Navbar>);
    }
}
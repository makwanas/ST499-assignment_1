import '../styling/Header.css';
import logo from '../images/logo.JPG';
import React, { Component } from 'react'

//Header
export class Header extends Component {
    render() {
        return (
            <div className="HeaderBody">
                <img className="ImageBody" src={logo} />
                <h1 className="HeaderText">Simple Photo Gallery Application</h1>
            </div>
        )
    }
}

export default Header;

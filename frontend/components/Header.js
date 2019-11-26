import React, {Component} from 'react';
import logo from '../image/logo.svg';
import {NavLink, Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="h-flex">
                    <Link to='/' className="logo">
                        <img src={logo} alt="logo"></img>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <NavLink exact to="/" className="menu__links" activeClassName="active">Лента</NavLink>
                            </li>
                            <li>
                                <NavLink to="profile" className="menu__links" activeClassName="active">Профиль</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const AppHeader = ({totalPrice}) => {
    return (
        <header className="header">
            <Link to = '/' className="header__link" href="#">
                Menu
            </Link>
            <Link to = '/cart' className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

const MapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(MapStateToProps)(AppHeader);
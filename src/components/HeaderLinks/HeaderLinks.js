import React from 'react';
import './HeaderLinks.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const HeaderLinks = () => {
    return (
        <div className="links position-absolute d-flex justify-content-center align-items-center">
            <ul className="list-unstyled">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/destination">Destination</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>
                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
            </ul>
        </div>
    );
};

export default HeaderLinks;
import React from 'react';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import './Header.css';
import HeaderLinks from '../HeaderLinks/HeaderLinks';

const Header = () => {
    const handleMenu = () => {
        const container = document.getElementById('container');
        container.classList.toggle('active');
    }
    return (
        <div id="container" className="container-style w-100">
            <div className="navbar position-fixed top-0 start-0 w-100 ">
                <div className="menu w-100 d-flex align-items-center text-white justify-content-between">
                    <h3 className="logo text-uppercase">Fashion <span>Shop</span></h3>
                    <div onClick={handleMenu} className="hamburger-menu d-flex align-items-center justify-content-end">
                        <div className="bar position-relative"></div>
                    </div>
                </div>
            </div>
            <ProductsContainer />
            <HeaderLinks />
        </div>
    );
};

export default Header;
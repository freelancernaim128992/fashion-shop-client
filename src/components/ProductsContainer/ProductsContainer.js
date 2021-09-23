import React from 'react';
import './ProductsContainer.css';
import bgImage from '../../images/home-banner.jpg'

const ProductsContainer = () => {
    const headerStyle = {
        minHeight: '100vh',
        background: `url('${bgImage}') no-repeat top center / cover`
    }
    return (
        <div>
            <div className="main-container">
                <div className="main position-relative w-100 left-0 bg-white overflow-hidden">
                    <header className="w-100 position-relative" style={headerStyle}>
                        <div className="overlay position-absolute w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center">
                            <div className="inner text-center text-white">
                                <h2 className="title">Future is here</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum beatae, quos eius sint exercitationem quis expedita quia dolor incidunt vero.</p>
                                <a href="#" className="btn btn-primary" style={{borderRadius: '20px'}}>Read more</a>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="shadow-style one position-absolute w-100"></div>
                <div className="shadow-style two position-absolute w-100"></div>
            </div>
        </div>
    );
};

export default ProductsContainer;
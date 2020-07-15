import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navigation.css';




export const Navigation = () => {

    // Saznaje url i sprema ga u varijablu pathname
    let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);



    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <h1 className="navbar-brand">React-App</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        {/*Klasa ovisi o url-u*/}
                        <a className={`${pathname.match('/home') ? 'nav-link active' : 'nav-link'}`}
                            href="/home">
                            <FontAwesomeIcon icon="home" /> Home 
                      </a>
                    </li>
                    <li className="nav-item">
                        <a className={`${pathname.match('/contactus') ? 'nav-link active' : 'nav-link'}`}
                            href="/contactus">
                            <FontAwesomeIcon icon="address-card" /> Contact us</a>
                    </li>

                </ul>
            </div>
        </nav>
    )

}

export default Navigation;
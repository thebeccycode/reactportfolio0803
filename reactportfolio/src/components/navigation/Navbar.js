import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">REACT PORTFOLIO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/"> Home </Link>
                        <Link to="/About"> About </Link>
                        <Link to="/Projects"> Projects </Link>
                        <Link to="/Contact"> Contact </Link>
                    </div>
                </div>
            </nav>


        </div>
    )
};

export default Navbar;



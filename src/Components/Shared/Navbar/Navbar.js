import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/"><h1>GymnasticsBD</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/"><h6>Home</h6></a>
                            <a className="nav-link" href="/services"><h6>Services</h6></a>
                            <a className="nav-link" href="/ourClass"><h6>Our Class</h6></a>
                            <a className="nav-link" href="/pricing"><h6>Pricing</h6></a>
                            <a className="nav-link" href="/aboutUs"><h6>About US</h6></a>
                            <a className="nav-link" href="/contactUs"><h6>Contact US</h6></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section d-flex align-items-center">
           <div className="container">
                <h2>The Best Fitness <br /> Studio in Town</h2>
                <p className="w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laborum cum nesciunt nulla facere dolores a. Laboriosam dignissimos quos exercitationem nostrum illo aliquam, dolorum fugit.</p>
                <button className=" primary-button">JOIN NOW</button>
           </div>
        </div>
    );
};

export default Banner;
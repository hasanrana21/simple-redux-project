import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className="container">
                <Service></Service>
            </div>
        </>
    );
};

export default Home;
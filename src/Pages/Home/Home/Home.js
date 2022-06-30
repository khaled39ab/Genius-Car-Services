import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Example from './Example/Example';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Example></Example>
        </>
    );
};

export default Home;
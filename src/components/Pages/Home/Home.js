import React from 'react';
import EndBanner from '../EndBanner/EndBanner';
import Services from '../Services/Services';
import Suppot from '../Suppot/Suppot';
import TopBanner from './../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div className='text-center mt-5'>
                <h2>Travily is a World Leading <span>online</span> Tour Booking Platform</h2>
            </div>
            <div className='w-75 m-auto mt-5'>
                <Services></Services>
            </div>
            <Suppot></Suppot>
            
            <EndBanner></EndBanner>
        </div>
    );
};

export default Home;
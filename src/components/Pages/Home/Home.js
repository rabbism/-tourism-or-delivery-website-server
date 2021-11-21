import React from 'react';
import EndBanner from '../EndBanner/EndBanner';
import Suppot from '../Suppot/Suppot';
import TopBanner from './../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Suppot></Suppot>
            <EndBanner></EndBanner>
        </div>
    );
};

export default Home;
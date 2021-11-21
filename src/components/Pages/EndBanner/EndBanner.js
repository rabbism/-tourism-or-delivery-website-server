import React from 'react';
import banner from '../../../Tevily/about-banner.png'
import './EndBanner.css'

const EndBanner = () => {
    return (
        <div>
            <div className='fw-bolder text-center m-4'>
                <h2>Go <span className='all'>Exotic</span>
                 Places</h2>
                 <h4>Please Your Trip with Travely</h4>
            </div>
            <div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                    <div class="p-3 ">
                        <img src={banner} alt="" />
                    </div>
                    </div>
                    <div class="col">
                    <div class="p-3 ">
                        <h5>Get to know us</h5>
                        <h2>Plan Your Trip with Trevily</h2>
                        <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                        <div>
                            <ul className='fw-bolder'>
                                <li>Invest in your simply neighborhood</li>
                                <li>Support people in free text extreme need</li>
                                <li>Largest global industrial business community</li>
                            </ul>
                        </div>
                        <button className='btn btn-dark p-3 m-3'>Book With US NOW</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EndBanner;
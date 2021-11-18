import React from 'react';
import doctor from '../../../Tevily/banner-3.jpg'

import doctor2 from '../../../Tevily/about-banner.png'

const About = () => {
    return (
        <div className="mt-5 container">
            <div className='d-flex m-5'> 
                <div className='w-50 p-4'>
                <img className='img-fluid rounded' src={doctor2} alt="" />
                </div>
                <div className='w-50 p-4'>
                    <h5 className='text-primary'>About Us</h5>
                    <h2>Short Story About Fovia Clinic Since 1999</h2>
                    <p>Good health is central to handling stress and living a longer, more active life. In this article, we explain the meaning of good health, the types of health a person needs to consider, and how to preserve good health.</p>
                    <br></br>
                    <p>They base this definition on the idea that the past few decades have seen modern science take significant strides in the awareness of diseases by understanding how they work, discovering new ways to slow or stop them, and acknowledging that an absence of pathology may not be possible.</p>
                    <br></br>
                    <ul>
                        <li>Scientific Skills For getting a better result</li>
                        <li>Communication Skills to getting in touch</li>
                        <li>A Career Overview opportunity Available</li>
                    </ul>
                </div>

                <div>
                    
                </div>
            </div>
            <div>
            </div>
            <div className='mt-5'>
            <div className='d-flex m-5'> 
                <div className='w-50 p-4'>
                <h3 className='text-primary'>Our Mission & Vision</h3>
                    <h2>Better Information, Better Health</h2>
                    <p>Physical well-being involves pursuing a healthful lifestyle to decrease the risk of disease. Maintaining physical fitness, for example, can protect and develop the endurance of a person’s breathing and heart function, muscular strength, flexibility, and body composition.</p>
                    <br></br>
                    <button className='btn btn-primary'>Learn More Health</button>
                </div>
                <div className='w-50 p-4'>
                   <img className='img-fluid rounded' src={doctor} alt="" />
                </div>

                <div>
                    
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default About;
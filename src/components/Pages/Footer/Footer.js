import React from 'react';



const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <div className='d-flex  mt-5 p-3 pt-4 '>
            <div className='w-50 p-2'>
               <h2>About Us</h2>
               <p>The word health refers to a state of complete emotional and physical well-being. Healthcare exists to help people maintain this optimal state of health.</p> 
            </div>
            <div className='w-50 p-2'>
                <h2>Quick Links</h2>
                <h6>Home</h6>
                <h6>About</h6>
                <h6>Contact</h6>
                <h6>Service</h6>
            </div>
            <div className='w-50 p-2'>
                <h2>Open Hours</h2>
                <p>Medically reviewed by Stacy Sampson, D.O. — Written by Adam Felman — Updated on April 19, 2020</p><br></br>
                <p>According to the Centers for Disease Control and Prevention (CDC), healthcare costs in the United States were $3.5 trillionTrusted Source in 2017.</p>

            </div>
            <div className='w-50 p-2'>
                <h2>Newsletter</h2>
                <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
            </div>
        </div>
        <footer className='text-center p-2 '>© All Rights Reserved || S M Al Rabbi || 2021</footer>
        </div>
    );
};

export default Footer;
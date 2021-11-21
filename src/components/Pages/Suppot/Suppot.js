import React from 'react';
import brand1 from '../../../Tevily/brand-one-3.png'
import brand2 from '../../../Tevily/brand-one-5.png'
import brand3 from '../../../Tevily/brand-one-4.png'
import brand4 from '../../../Tevily/brand-one-1.png'


const Suppot = () => {
    return (
        <div>
            <div className='d-flex bg-primary justify-content-evenly mt-5 p-4'>
                <div>
                <img src={brand1} alt="" />
                </div>
                <div>
                <img src={brand2} alt="" />
                </div>
                <div>
                <img src={brand3} alt="" />
                </div>
                <div>
                <img src={brand4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Suppot;
import React from 'react';
import add1 from '../../asset/banner-1.jpg'
import add2 from '../../asset/banner-2.jpg'

const Add = () => {
    return (
        <section className='flex -mt-36 mb-56'>
            <div>
                <img src={add1} alt="" />
                
            </div>
            <div>
                <img src={add2} alt="" />
                
            </div>
        </section>
    );
};

export default Add;
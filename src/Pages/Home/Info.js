import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../asset/about-images.jpg';

const Info = () => {
    return (
        <div class="hero min-h-screen bg-white lg:px-12 -mt-36 mb-16">
            <div class="hero-content flex-col lg:flex-row">
                <img src={image} class="max-w-sm " alt='' />
                <div className='lg:px-20'>
                <h1 class="text-4xl font-bold">Best Adventure Tourer Bikes</h1>
                <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
               <Link to="/login"><button class="btn btn-primary bg-emerald-600 border-0">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Info;
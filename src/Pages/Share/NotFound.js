import React from 'react';
import { Link } from 'react-router-dom';
import not from '../../asset/404.jpg';



const NotFound = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <figure class="px-10 pt-10">
                <img src={not} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-3xl font-bold mb-5">Opps!</h2>
               
                <div class="card-actions">
                    <Link to='/'><button class="btn btn-primary">Go to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {


    const { _id, name, image, price, order, quantity, description } = tool;
    const navigate = useNavigate();
    const manageParts = id => {
        navigate(`/partDetails/${id}`)
    }


    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Available Parts: {quantity}</p>
                <p>Minimum Order: {order}</p>
                <p>Price: {price}</p>
                <div class="card-actions">
                    <button onClick={() => manageParts(_id)} class="btn btn-primary bg-emerald-600 border-0">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
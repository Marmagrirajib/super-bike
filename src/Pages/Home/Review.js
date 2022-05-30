import React from 'react';

const Review = ({ review }) => {


    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-16">
            <div class="card-body">

                <p>{review.review}</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl fond-bold'>{review.name}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;
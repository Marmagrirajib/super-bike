import React from 'react';
import man from '../../asset/people1.png'
import man2 from '../../asset/people2.png'
import man3 from '../../asset/people3.png'
import Review from './Review';

const Test = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Kabir Ahmed',
            review: 'I bought a parts from this company. Still that pasrts working amazing. I recomment to buy from this online or offline.',
            img: man
        },
        {
            _id: 2,
            name: 'Humaira Kabir',
            review: 'Awesome all products of this company. I have take many parts from there for my cycle. Really excellent all parts.',
            img: man2
        },
        {
            _id: 3,
            name: 'Zara Fara',
            review: 'Sometimes ago I lost my cycle so feel very upset. And finally found this company by online and order new cycle. Ph my od it was very smart.',
            img: man3
        },
    ];


    return (
        <section className='lg:-mt-36 sm:mt-14 px-12'>
            <div>
                <div className='text-center'>
                    <h4 className='text-xl fond-bold'>Testimonials</h4>
                    <h2 className='text-3xl fond-bold text-emerald-600'>Our Customers Reviews</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Test;
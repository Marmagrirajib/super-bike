import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Home/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const PartDetails = ({ tool, setBuys }) => {
    const { toolId } = useParams();
    const [parts, setParts] = useState({})
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const [user] = useAuthState(auth);
    const [plusError, setPlusError] = useState('');

    const [minusError, setMinusError] = useState('');


    const { order, price, quantity, name } = parts;


    useEffect(() => {
        const url = `https://murmuring-springs-55842.herokuapp.com/part/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setParts(data)
                console.log(data);
            })
    }, [])

    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState;



    const onSubmit = async userData => {

        console.log(userData);


        const url = 'https://murmuring-springs-55842.herokuapp.com/orders';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);


            })

    }



    const increase = () => {
        setMinusError('');
        if (counter < quantity) {
            setCounter(count => parseInt(count) + 1);

        }
        else {
            setPlusError('You can not select more then available');
            return;
        }
    };
    const decrease = () => {
        setPlusError('')

        if (counter > order) {
            setCounter(count => count - 1);
        }
        else {
            setMinusError('Follow the minimum order')
            return;
        }
    };
    const changeValue = (e) => {
        setCounter(e.target.value);
    }

    return (
        <div>
            {/* <div>
                <h2 className='mt-12 mb-2 text-4xl text-center fond-bold text-emerald-600'>Welcome to Purchase Page</h2>
            </div> */}
            <div class="card card-side bg-base-100 shadow-xl h-screen flex justify-center items-center px-12">
                <figure><img src={parts.image} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">{parts.name}</h2>
                    <p>{parts.description}</p>
                    <p className='text-emerald-600'>Available Parts: {parts.quantity}</p>
                    <p className='text-emerald-600'>Minimum Order: {parts.order}</p>
                    <p className='text-emerald-600'>Price: {parts.price}</p>

                    <div className="mt-6 input-group number-spinner">
                        <button disabled={minusError} onClick={decrease} className="text-2xl rounded btn btn-warning">-</button>
                        <input onChange={changeValue} value={counter} className="text-center form-control" />
                        <button disabled={plusError} onClick={increase} className="text-2xl rounded btn btn-warning">+</button>
                        <p>{plusError}</p>
                        <p>{minusError}</p>
                    </div>
                    
                </div>

                <div className='p-12 mt-48'>
                    {/* <h1 className="my-10 text-2xl font-bold">Provide information to confirm Your Order</h1> */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 shadow-2xl card bg-base-100">
                        <div className="mt-6 form-control">
                            <button className="btn btn-warning">Purchase</button>
                        </div>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input {...register("itemName")} value={name} required type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customer Name</span>
                                </label>
                                <input {...register("customerName", { required: true })} type="text" value={user.displayName} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} value={user.email} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input  {...register("phone", { required: true })} type="text" placeholder="Phone" className="w-full input input-bordered input-accent" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input  {...register("price", { required: true })} type="text" placeholder="Price" className="w-full input input-bordered input-accent" />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" className="input input-bordered" />

                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Cart</span>
                                </label>
                                <input value={counter} {...register("cart")} type="text" placeholder="address" className="input input-bordered" />

                            </div>
                            {counter > quantity && <p>Item you selected is Avialable</p>}
                            {counter < order && <p>Follow the minimum quantity</p>}

                        </div>

                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PartDetails;
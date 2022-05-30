import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {

        const getMyOrders = async () => {
            const email = user.email;
            fetch(`http://localhost:5000/orders?email=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {

                    }

                    return res.json()
                })
                .then(data => setOrders(data))
        }
        getMyOrders()
    }, [user])
    const CancelItem = id => {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remain = orders.filter(items => items._id !== id);
                setOrders(remain)

            })
    }





return (
    <div className='px-12 mt-10'>
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((o, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{o.name}</td>
                            <td>{o.email}</td>
                            <td>{o.quantity}</td>
                            <td>{o.price}</td>
                            <button onClick={() => CancelItem(o._id)} className='btn btn-warning'>Delete</button>
                        </tr>)

                    }


                </tbody>
            </table>
        </div>
    </div>
);
};

export default Orders;
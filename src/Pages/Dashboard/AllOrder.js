
import React from 'react';
import { useQuery } from 'react-query';

import OrderRow from './OrderRow';

const AllOrder = () => {
    const { data: orders, isLoading,refetch } = useQuery('order', () => fetch('http://localhost:5000/order')
        .then(res => res.json()))
    if (isLoading) {
        return;
    }
    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index) => <OrderRow index={index} order={order} key={order._id}></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;
import React from 'react';
import { useQuery } from 'react-query';
import RowUser from './RowUser';



const UserCollection = () => {
    const { data: users, isLoading ,refetch} = useQuery('order', () => fetch('https://murmuring-springs-55842.herokuapp.com/user',{
        method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
    })
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
                        <th>Name</th>
                        <th>Job</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=><RowUser user={user} index={index} refetch={refetch}></RowUser>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserCollection;
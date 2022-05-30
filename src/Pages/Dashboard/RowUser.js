import React from 'react';


const RowUser = ({user,refetch,index}) => {
    
    const {email,role}=user;
    console.log(email);
    const makeAdmin =()=>{
        fetch(`https://murmuring-springs-55842.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 403){
                
            }
            return res.json()})
        .then(data=>{
            console.log(data);
            refetch()
        })
    }
    return (
        
            <tr>
                <th>{index + 1}</th>
                <th>{email}</th>
                <td>{role!=='admin' &&  <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
                <button  className="ml-3 btn btn-xs">Remove User</button></td>
                <td></td>
                
            </tr>
      
    );
};

export default RowUser;
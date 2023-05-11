import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData()
const [users, setUsers]= useState(loadedUsers);

    const handleDelete = (_id) => {
        console.log("delete", _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert('Delete successfully')
            }
            const remainingUsers= users.filter(user=> user._id !== _id);
            setUsers(remainingUsers);
        })

    }

    return (
        <div>
            <h2>Number of user: {users.length}</h2>
            <div>
                {
                    users.map(u => <p key={u._id}>{u.name}: ------ {u.email} {u._id}

                    <Link to={`/update/${u._id}`}><button>Update</button></Link>
                    
                     <button
                        onClick={() => handleDelete(u._id)}
                    >X</button> </p>)
                }
            </div>
            <button><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default Users;
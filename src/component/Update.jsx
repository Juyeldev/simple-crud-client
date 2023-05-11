import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('Updated successfully');
            }
        })
    }




    return (
        <div>
            <h2>please Update</h2>
            <h3>Update Information of  {loadedUsers.name} </h3>
            <form onSubmit={handleUpdate} >
                <input type="text" name="name" defaultValue={loadedUsers.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
            <br />
            <button> <Link to="/users">Go to user</Link></button>
            <br />
            <button> <Link to="/">Home</Link></button>
        </div>
    );
};

export default Update;
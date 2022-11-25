import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const View = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/user')
            .then(res => res.json())
            .then(data => setUsers(data));



    }, [users]);



    const deleteUser = (id) => {


        const url = `http://localhost:8000/user/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },



        }
        )
    }

    const updateUser = () => {

    }




    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>product</th>
                        <th>Quantity</th>
                        <th>date</th>
                        <th>Modify</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user) => {

                            return <tr>
                                <th>{user.name}</th>
                                <td>{user.product}</td>
                                <td>{user.quantity}</td>
                                <td>{user.date}</td>
                                <td>

                                    <td>

                                        <Link className='btn btn-error' to={`/user/${user._id}`}><button>Edit</button></Link>




                                    </td>



                                </td>
                                <td><button className='btn btn-error' onClick={() => deleteUser(user._id)}>Remove</button></td>
                            </tr>

                        })
                    }





                </tbody>
            </table>
        </div>
    );
};

export default View;
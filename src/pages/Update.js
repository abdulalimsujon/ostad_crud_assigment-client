import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { id } = useParams();

    const [user, setUser] = useState({});


    useEffect(() => {
        const url = `http://localhost:8000/user/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))

    }, [id])
    console.log(user)


    const update_manager = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const product = e.target.product.value;
        const quantity = e.target.quantity.value;
        const date = e.target.date.value;

        const updateduser = {

            name: name,
            product: product,
            quantity: quantity,
            date: date
        }

        const url = `http://localhost:8000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },


            body: JSON.stringify(updateduser)
        }
        )



    }


    return (
        <div>

            <h1 className='text-center'>Work for {id} update</h1>



            <div className='bg-slate-400' >


                <form onSubmit={update_manager} className='grid grid-cols-1 gap-3 justify-items-center pb-5'>

                    <input type="text" placeholder="name" name='name' class="input input-bordered input-md w-full max-w-xs" />


                    <input type="text" placeholder="product" name='product' class="input input-bordered input-md w-full max-w-xs" />

                    <input type="text" placeholder="quantity" name='quantity' class="input input-bordered input-md w-full max-w-xs" />

                    <input type="text" placeholder name='date' class="input input-bordered input-md w-full max-w-xs" />

                    <input className='btn btn-active btn-accent' type="submit" value='submit' />
                </form>

            </div>

        </div >
    );
};

export default Update;
import React from 'react';

//QNvqdlL0GI65Qb56

const From = () => {

    const date = new Date();

    const manageUser = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const product = e.target.product.value;
        const quantity = e.target.quantity.value;
        const date = e.target.date.value;

        const user = {

            name: name,
            product: product,
            quantity: quantity,
            date: date
        }
        fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },


            body: JSON.stringify(user)
        }
        )

        e.target.reset();

    }
    return (
        <div className='bg-slate-400' >

            <h1 className='text-center p-6 text-indigo-900'>The user Form</h1>
            <form onSubmit={manageUser} className='grid grid-cols-1 gap-3 justify-items-center pb-5 '>

                <input type="text" placeholder="name" name='name' class="input input-bordered input-md w-full max-w-xs" />


                <input type="text" placeholder="product" name='product' class="input input-bordered input-md w-full max-w-xs" />

                <input type="text" placeholder="quantity" name='quantity' class="input input-bordered input-md w-full max-w-xs" />

                <input type="text" placeholder={date} name='date' class="input input-bordered input-md w-full max-w-xs" />

                <input className='btn btn-active btn-accent' type="submit" value='submit' />
            </form>

        </div>
    );
};

export default From;
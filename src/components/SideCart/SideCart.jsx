import React from 'react';

const SideCart = ({ cart, readTime }) => {
    return (
        <div className='mt-6 md:mt-0 md:sticky top-40'>
            <div className='border border-info p-4  bg-info bg-opacity-10 rounded-md text-center'>
                <h1 className='text-lg font-semibold text-sky-700'>Spent time on read : {readTime} min</h1>
            </div>
            <div className='mt-6 bg-primary bg-opacity-5 rounded-md p-4 text-lg '>
                <h1 className='font-bold mb-2'>Bookmarked Blogs : {cart.length} </h1>
                {
                    cart.map(singleCart => <h1 className='bg-white text-base p-3 rounded-md font-semibold mb-3' key={singleCart._id}>{singleCart.title}</h1>)
                }
            </div>
        </div>
    );
};

export default SideCart;
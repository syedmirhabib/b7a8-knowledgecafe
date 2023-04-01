import React from 'react';






const SingleCard = ({ cards, handelSideCart, handleReadTime }) => {
    const { picture, name, profile_image, read_time, title } = cards
    return (
        <>
            <div className="card card-compact w-auto hover:bg-info hover:bg-opacity-5 border border-neutral">
                <figure className='md:h-96 '>
                    <img className='h-auto w-auto' src={picture} />
                </figure>
                <div className="card-body space-y-4">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img className=' w-[50px] h-[50px] rounded-full' src={profile_image} />
                            <div>
                                <h1 className='text-lg font-bold'>{name}</h1>
                                <p className='text-xs font-semibold text-gray-700'>March 31 (1 Day ago)</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <h1 className='md:text-base text-xs'>{read_time} min read</h1>
                            <button >
                                <svg onClick={() => handelSideCart(cards)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </button>

                        </div>

                    </div>
                    <h2 className="card-title md:mr-44 md:text-3xl font-bold">{title}</h2>
                    <p className='font-semibold text-gray-500 text-xs'>#programming  #coding  #newBlog</p>
                    <button className='text-blue-600 font-semibold underline text-left' onClick={() => handleReadTime(read_time)}>Mark as read</button>
                </div>
            </div>
        </>
    );
};

export default SingleCard;
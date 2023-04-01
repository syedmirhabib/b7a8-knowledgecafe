import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto text-3xl font-bold mt-10 flex items-center justify-between px-4 md:px-9'>
            <h1><span className='text-'>Knowledge</span> <span className='text-primary'>Cafe</span></h1>
            <div>
                <img className='w-16 rounded-full' src="https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg?w=900&t=st=1680366025~exp=1680366625~hmac=ea653eac08e0da941f08bd3aa673552de20ba6df06e8f8bdb8f27f20c2736806" />
            </div>

        </div>
    );
};

export default Header;

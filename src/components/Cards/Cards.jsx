import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = ({ handelSideCart, handleReadTime }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='space-y-8'>
            {
                data.map(data => <SingleCard cards={data} key={data._id} handelSideCart={handelSideCart} handleReadTime={handleReadTime}></SingleCard>)
            }
        </div>
    );
};

export default Cards;
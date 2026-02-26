import React from 'react';
import Cardinfo from './Cardinfo';

function Card(props) {
    console.log(props)  
    return (
        <div className='w-1/3 mt-10 ml-4 relative overflow-hidden rounded-2xl shrink-0'>
            <img className='h-100 object-cover w-full' src={props.actor.img} alt="" />
            <div className='absolute top-0 h-full w-full p-3 flex flex-col justify-between ' >
                <h3 className='bg-white w-6 h-6 font-semibold rounded-full flex items-center justify-center '>{props.id+1}</h3>
                <Cardinfo actor={props.actor} />
            </div>
        </div>
    );
}

export default Card;
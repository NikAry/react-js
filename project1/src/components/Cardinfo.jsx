import React from 'react';
import {Ellipsis} from 'lucide-react'
function Cardinfo(props) {
    return (
        <div className='text-white  flex justify-between items-center gap-4'>
            <div>
                <h1 className='font-semibold text-2xl'>{props.actor.name}</h1>
                <p className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, beatae.</p>
            </div>
            <button className='bg-white text-black rounded-full '><Ellipsis /></button>
        </div>
    );
}

export default Cardinfo;
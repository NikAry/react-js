import React from 'react';
import Card from './Card';

function Rightcontent(props) {
    return (
        <div className='  h-max w-2/3 '>
            <div className='flex flex-nowrap object-cover overflow-scroll'>
                {props.actor.map(function(ele,idx) {
                    
                    return <Card id={idx} actor={ele} />
                })}
            </div>
        </div>
    );
}

export default Rightcontent;
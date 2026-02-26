import React from 'react';
import Rightcontent from './Rightcontent';
import Leftcontent from './Leftcontent';

function Content(props) {
    
    return (
        <div className=' bg-gray-300 h-screen w-screen flex mt-10'>
            <Leftcontent />
            <Rightcontent actor={props.actor} />
        </div>
    );
}

export default Content;
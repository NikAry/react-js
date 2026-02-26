import React from 'react';
import 'remixicon/fonts/remixicon.css'
function Leftcontent() {
    return (
        <div className=' w-1/3 ml-1 h-max mt-14 flex flex-col gap-2 justify-between px-2 border rounded-2xl shadow-2xl'>
           <div>
                <h1 className='font-bold text-5xl '>Absolute <br />Cinema</h1>
                <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum, perspiciatis voluptatibus officiis nobis sequi sint animi temporibus! Totam, architecto?</p>
           </div>
            <button className='text-5xl w-max'><i class="ri-arrow-right-up-line"></i></button>
        </div>
    );
}

export default Leftcontent;
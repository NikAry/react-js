import React from 'react';

function NavBar() {
    return (
        <div className='flex justify-between px-4 py-2'>
            <div className='text-amber-200 rounded-full px-2  bg-fuchsia-700 w-max pb-1'>Enthuziastic Aryan</div>
            <button className='text-white bg-black rounded-full px-4 pb-1'>Log In</button>
        </div>
    );
}

export default NavBar;
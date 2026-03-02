import React from 'react';
import {Link} from 'react-router-dom'
function Navbar(props) {
    return (
        <div className='nav'> 
            <h1>Enthuziastic Aryan</h1>
            <div className='nav2'>
                <Link className='linkTag' to='/'>Home</Link>
                <Link className='linkTag' to='/about'>About</Link>
                <Link className='linkTag' to='/login'>Login/Signup</Link>
            </div>
        </div>
    );
}

export default Navbar; 
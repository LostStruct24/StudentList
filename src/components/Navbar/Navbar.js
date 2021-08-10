import React from 'react';
import './Navbar.css';
import { IoMdPersonAdd } from 'react-icons/io';

export const Navbar = () => {

    return (
        <div className='navbar'>
            <h1 className='navbarTitle'>Student List</h1>
            <div className='person'><IoMdPersonAdd /></div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='m-5 p-5'>
            <Link to='/admin'> <h2>All Order</h2></Link>
            <Link to='/addproduct'><h2>Add Order</h2></Link>
        </div>
    );
};

export default Sidebar;
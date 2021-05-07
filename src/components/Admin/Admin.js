import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrder from '../SingleOrder/Singleorder';

const Admin = () => {
    const [allorder,setallorder] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/orders')
        .then(res => res.json())
        .then(data => setallorder(data))
    },[])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 bg-light '>
                    <Sidebar></Sidebar>                  
                </div>
                <div className='col-md-8'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product Name </th>
                                <th>Price  </th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allorder.map(order => <SingleOrder order={order}></SingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
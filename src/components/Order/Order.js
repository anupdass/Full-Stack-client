import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SinglePersonOrder from '../SinglePersonOrder/SinglePersonOrder';

const Order = () => {

    const [personorder,setpersonorder] = useState([])
    const [login,setlogin] = useContext(UserContext)

    console.log(login.email)    
    useEffect(()=>{
        fetch(`https://cryptic-waters-27310.herokuapp.com/order/${login.email}`)
        .then(res => res.json())
        .then(data => setpersonorder(data))
    })

    return (
        <div className='row container m-auto mt-5'>
          {
              personorder.map(order => <SinglePersonOrder order={order}></SinglePersonOrder>)
          }
        </div>
    );
};

export default Order   ;<h1></h1>
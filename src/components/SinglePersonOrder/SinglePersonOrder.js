import React from 'react';
import { useHistory } from 'react-router';

const SinglePersonOrder = (props) => {
    const{_id,name,price,discription} = props.order;
    const history = useHistory();

    const handlecnacel = ()=>{
        fetch(`https://cryptic-waters-27310.herokuapp.com/delete/${_id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data =>{
            alert('Delete Successfully');
            history.replace('/');
        });
    }
    
    return (
        <div className='col-md-5 m-3 bg-primary p-5 text-white shadow rounded'>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Discription: {discription}</p>
            <button onClick={handlecnacel} className='btn btn-danger'>cancel</button>
        </div>
    );
};

export default SinglePersonOrder;
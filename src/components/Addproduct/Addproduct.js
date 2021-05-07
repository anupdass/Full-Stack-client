import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const Addproduct = () => {

    const [product,setproduct] = useState({});
    const history = useHistory();

    const handelonblur =(e)=>{
        const newProduct = product;
        newProduct[e.target.name] = e.target.value;
        setproduct(newProduct);
    }

    const handlesumit =(e)=>{
        e.preventDefault();
        
        fetch('https://cryptic-waters-27310.herokuapp.com/addproduct', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Sucess your order")
                history.replace('/')
            });
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 bg-light '>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-8'>
                    <form className="form-control m-3 " onSubmit={handlesumit}>
                        <input type="text" name="name" onBlur={handelonblur} placeholder="enter product name" required/> <br /> <br />
                        <input type="text" name="discription" onBlur={handelonblur} placeholder="Enter Discription" required /> <br /> <br />
                        <input type="text" name="immg" onBlur={handelonblur} placeholder="Image url"  required/> <br /> <br />
                        <button className="btn btn-primary"> Add Product </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addproduct;
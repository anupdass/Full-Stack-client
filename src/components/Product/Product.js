import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, discription,_id, price } = props.data;
    return (
        <div className="col-md-4 mb-5">
            <div className=" mt-5 shadow rounded m-1  p-3 h-100">
                <img className="w-100 img-fluid rounded" src={img} alt="" />
                <h1 className="text-center">{name}</h1>
                <div className="d-flex mt-3 ">
                    <h4 className="ms-3 text-primary">price : {price}</h4>
                    <Link to={`/checkout/${_id}`}> <button className="btn btn-primary ms-auto me-3">BUY NOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [productdata,setproductdata] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-waters-27310.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setproductdata(data))
    },[])



    // const handlerproduct = () => {
    //     fetch('http://localhost:8000/addproducts', {
    //         method: 'POST',
    //         body: JSON.stringify(fakedata),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));
    // }

    return (
        <div className="row container m-auto mt-5">
            {/* <button onClick={handlerproduct} className='btn btn-primary'>add all product</button> */}
            {
                productdata.map(data => <Product data={data}></Product>)
            }
        </div>
    );
};

export default Products;
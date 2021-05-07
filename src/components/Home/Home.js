import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-center container mt-5">
                <input className="form-control" type="text" name="" id="" placeholder="Search....."/>
                <button className="btn btn-primary">Search</button>
            </div>

            <Products></Products>
        </div>
    );
};

export default Home;
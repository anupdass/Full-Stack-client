import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const OrderDetails = () => {

    const { id } = useParams();

    const history = useHistory();
    
    const [login, setlogin] = useContext(UserContext)

    const [singleproduct, setsingleProduct] = useState({});


    const [order, setorder] = useState({
        userName: login.displayName,
        email:login.email,
    })

    const handlesumit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/order', {
            method: 'POST',
            body: JSON.stringify(order),
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


    useEffect(() => {
        fetch(`http://localhost:8000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setsingleProduct(data);
                let newOrderdetails = { ...order };
                newOrderdetails.price = data.price;
                newOrderdetails.discription = data.discription;
                newOrderdetails.name = data.name;
                setorder(newOrderdetails)

            })
    })



    return (
        <div className="container  m-5">
            <h1 className="text-center">Set Your Address Here</h1> <br />
            <div className="d-flex justify-content-center">
                <form className="form-control m-3 " onSubmit={handlesumit}>
                    <input type="text" name="user name" defaultValue={login.displayName} /> <br /> <br />
                    <input type="text" name="productname" defaultValue={singleproduct.name} /> <br /> <br />
                    <input type="text" name="productname" defaultValue={singleproduct.price} /> <br /> <br />
                    <textarea name="discription" rows="10" cols="50" defaultValue={singleproduct.discription} placeholder='Your Address' ></textarea> <br />
                    <button className="btn btn-primary"> PlaceOrder Now</button>
                </form>
            </div>
        </div>
    );
};

export default OrderDetails;
import React, { useEffect, useState } from 'react'
import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import './Cart.css'


const Cart = () => {


    const { id } = useParams("");
    // console.log(id);

    const [individualData, setIndividualData] = useState([]);
    console.log(individualData);

    const getIndividualData = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });


        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            console.log("No data available");
        } else {
            console.log("Get data");
            setIndividualData(data);
        }

    };



    


    useEffect(() => {
        getIndividualData();
    }, [id]);



    const addtocart = async (id) => {
        const checkres = await fetch(`/addcart/${id}`, {
            method: "POST",

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                individualData
            }),

            credentials: "include"
        });

        const data1 = await checkres.json();
        console.log(data1 + "frontend data");

        if (checkres.status === 401 || !data1) {
            console.log("user invalid");
            alert("user invalid")

        }
        else {
            alert("Data added in cart")
        }

    }


    return (
        <div className="cart_section">
            {individualData && Object.keys(individualData).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={individualData.url} alt="cart-img" />
                        <div className="cart_btn">
                            <button className="cart_btn1" onClick={() => addtocart(individualData.id)}>Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>
                    </div>

                    <div className="right_cart">
                        <h3>{individualData.title.shortTitle}</h3>
                        <h4>{individualData.title.longTitle}</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : ${individualData.price.mrp}</p>
                        <p>Deal of the Day: <span style={{ color: '#B12704' }}>${individualData.price.cost}</span></p>
                        <p>You Save: <span style={{ color: '#B12704' }}>${individualData.price.mrp - individualData.price.cost} ({individualData.price.discount})</span></p>

                        <div className="discount_box">
                            <h5>Discount: <span style={{ color: '#111' }}>${individualData.discount}</span></h5>
                            <h4>Free Delivery <span style={{ color: '#111', fontWeight: 600 }}>Aug 25 - 29</span> Details</h4>
                            <p>Fastest Delivery: <span style={{ color: '#111', fontWeight: 600 }}>Tomorrow 11:00 am 🕚</span> </p>
                            <p className="description">About the Item: <span style={{ color: '#565959', fontSize: 14, fontWeight: 500, letterSpacing: '0.4px' }}>{individualData.description}</span></p>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Cart;
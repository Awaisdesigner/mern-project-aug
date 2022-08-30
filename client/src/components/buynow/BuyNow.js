import { Divider } from '@mui/material';
import React from 'react'
import Option from './Option';
import SubTotal from './SubTotal';
import Right from './Right';
import './BuyNow.css'


const BuyNow = () => {
    return (
        <div className="buynow_section">

            <div className="buynow_container">

                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>

                    <Divider />

                    <div className="item_containert">
                        <img src="https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="watch" />
                        <div className="item_details">
                            <h3>Mobile Sense 500 SmartWatch (Black, Strap, Freesize)</h3>
                            <h3>Smart Watches</h3>
                            <h3 className="diffrentprice">$300.00</h3>
                            <p className="unusuall">Usually dispatched in 8 days</p>
                            <p>Eligible for free shipping</p>
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="watch-tag" />
                            <Option />
                        </div>
                        <h3 className="item_price">$340.03</h3>
                    </div>

                    <Divider />
                    <SubTotal />
                </div>

                <Right />
            </div>

        </div>
    )
}

export default BuyNow;
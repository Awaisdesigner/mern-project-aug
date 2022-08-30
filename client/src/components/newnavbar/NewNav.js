import React from 'react'
import './NewNav.css'
import image from '../../assets/nav.jpg'

const NewNav = () => {
    return (
        <div className='new_nav'>
            <div className="nav_data">
                <div className="left_data">
                    <p>All</p>
                    <p>Mobile </p>
                    <p>Best Seller</p>
                    <p>Fashion</p>
                    <p>Customer Services</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Today's Deal</p>
                    <p>Amazon Pay</p>
                </div>
                

                <div className="right_data">
                     <img src={image} alt="img..." />
                </div>
            </div>

        </div>
    )
}

export default NewNav;
import React from 'react'
// import amzn from '../../assets/amazon_PNG25.png' 
import './Footer.css'

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Get to know us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Careers</p>
                </div>

                <div className="footr_details_one">
                    <h3>Connect with us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                </div>

                <div className="footr_details_one forres">
                    <h3>Knowing Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                </div>

                <div className="footr_details_one forres">
                    <h3>Make $ with us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                </div>
            </div>
            
            {/* <div className="last_details">  */}
                {/* <img src={amzn} alt="amazon" />  */}
                {/* <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>  */}
            {/* </div>  */}

        </footer>
    )
}

export default Footer;
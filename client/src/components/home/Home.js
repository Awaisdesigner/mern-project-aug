import React, { useEffect } from 'react';
import Slider from './Slider';
import { getProducts } from '../redux/actions/Action';
import { useSelector, useDispatch } from "react-redux";
import './Home.css';


const Home = () => {


    const { products } = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);



    return (
        <div className="home_section">
            <div className="banner_part" style={{textAlign: 'center'}}>
                {/* <div className='color'> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqguznmFobK0_MLU-BSoZuxdcyeLxsLFDoEQ&usqp=CAU" alt="" style={{ padding: 30 }} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqguznmFobK0_MLU-BSoZuxdcyeLxsLFDoEQ&usqp=CAU" alt="" style={{ padding: 30 }} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqguznmFobK0_MLU-BSoZuxdcyeLxsLFDoEQ&usqp=CAU" alt="" style={{ padding: 30 }} />
                {/* </div> */}
            </div>

            <div className="slide_part">
                <div className="left_slide">
                    <Slider title="Deal of the Day" products={products} />
                </div>

                <div className="right_slide">
                    <h4>Festive Latest Launches</h4>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                    <a href="#">See More</a>
                </div>
            </div>

            <Slider title="Today's Deal" products={products} />
            <div className="center_img">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
            </div>
            <Slider title="Best Seller" products={products} />
            <Slider title="Up to 80% off" products={products} />


        </div>
    )
}

export default Home
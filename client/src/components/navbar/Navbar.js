import React from 'react'
import './Navbar.css'
import img1 from '../../assets/amazon_PNG25.png'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <NavLink to="/">
                            {/* <img src={img1} alt="logo" /> */}
                            <AddHomeWorkIcon color= "danger" sx={{ fontSize: 24 }}/> &nbsp; &nbsp;
                            <span style={{color: 'white',textDecoration: 'none'}}>Real Estate</span>
                        </NavLink>
                    </div>

                    <div className="nav_searchbaar">
                        <input type="text" name="" placeholder='Searching data' />
                        <div className="search_icon">
                            <SearchIcon />
                        </div>
                    </div>
                </div>


                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login" style={{backgroundColor: 'orange', border:'none'}}>login</NavLink>
                    </div>
                    <div className="nav_btn">
                        <NavLink to="/register" style={{backgroundColor: 'orange', border:'none'}}>signup</NavLink>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avatar' />
                </div>

            </nav>
        </header>
    )
}

export default Navbar;
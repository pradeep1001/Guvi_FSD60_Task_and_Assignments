import React, { useState } from 'react'
import './navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {
    // All item present in cart
    const items = useSelector(state => state.cart.items);

    const [shopMenu, setShopMenu] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const handleShopMenu = () => {
        setShopMenu(prev => !prev)
    }
    const handleMobileMenu = () => {
        setMobileMenu(prev => !prev)
    }


    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className='navbar'>
                    <div className='navbar-left'>
                        <h3>Start Bootstrap</h3>
                        <div className="navbar-links">
                            <ul className='navbar-links-ul'>
                                <li><a href="#" style={{ color: '#181819' }}>Home</a></li>
                                <li><a href="#">About</a></li>
                                <li onClick={handleShopMenu}><a href="#">Shop <FaCaretDown size={16} /> </a></li>
                            </ul>
                            {
                                shopMenu && (
                                    <div className="shop-items lg">
                                        <p><span>All Products</span></p>
                                        <p>Popular Items</p>
                                        <p>New Arrivals</p>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div className='navbar-right'>
                        <button onClick={handleMobileMenu} className="right-menu-container">
                            <IoReorderThreeOutline size={30} />
                        </button>
                        <div className="cart-container">
                            <FaCartShopping size={20} />
                            <p>Cart</p>
                            <span>{items.length}</span>
                        </div>
                    </div>
                </div>

                <div className={`smaller-device-menu ${mobileMenu ? "visible" : ""}`}>
                    <ul className='navbar-links-ul'>
                        <li><a href="#" style={{ color: '#181819' }}>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li onClick={handleShopMenu}><a href="#">Shop <FaCaretDown size={16} /> </a></li>
                        {
                            shopMenu && (
                                <div className="shop-items">
                                    <p><span>All Products</span></p>
                                    <p>Popular Items</p>
                                    <p>New Arrivals</p>
                                </div>
                            )
                        }

                        <div className="cart-container mobile">
                            <FaCartShopping size={20} />
                            <p>Cart</p>
                            <span>{items.length}</span>
                        </div>
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default Navbar
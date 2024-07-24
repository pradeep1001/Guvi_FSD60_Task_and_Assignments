import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/cartSlice'
import './card.css'

const Card = ({ id, title, price, strikeText, stars = 5, sale }) => {
    const dispatch = useDispatch(); // Helps to update cart state

    // Check if item present in cart or not
    const isInCart = useSelector(state => state.cart.items.some(item => item.id === id));

    // Add to cart
    const handleAddToCart = () => {
        dispatch(addItem({ id, title, price }));
    };

    // Remove from cart
    const handleRemoveFromCart = () => {
        dispatch(removeItem(id));
    };

    return (
        <div className="card-container" key={id}>
            <div className="image-container">
                <p>450 x 300</p>
            </div>
            <div className="content-container">
                <h3 className="title">{title}</h3>
                <div className="stars-container">
                    {
                        [...Array(stars)].map((_, index) => (
                            <LiaStarSolid key={index} size={20} />
                        ))
                    }
                </div>
                <div className="price-text">
                    <p><s style={{ color: '#6c757d' }}>{strikeText}</s> {price} </p>
                </div>
                <div className="btn" onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>{isInCart ? 'Remove from Cart' : 'Add to Cart'}</div>
            </div>
            {
                sale && (
                    <h4 className='sale'>Sale</h4>
                )
            }
        </div>
    )
}

export default Card
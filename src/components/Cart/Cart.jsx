import { useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import StyledCart from "./StyledCart";

import construction from '../../images/construction.png';

const Cart = ({userCart, setUserCart, priceQty, pricePkg}) => {

    const [control, setControl] = useState(false);

    const toCheckout = () => {
        setControl(true)
    }

    return (
        
        <StyledCart>
            {!control?
            <>
            {userCart.length !==0?
            <div className="product-list">
                {userCart.map(product => <CartProduct key={Math.random()} product = {product} setUserCart = {setUserCart}/>)}
            </div>
            :
            <div className="empty-message">
                <p>No items in cart</p>
            </div>
            }
            <div className="informations">
                <h3>Total:</h3>
                <div className="info-wrapper">
                    <p>Total price for cookies:</p><p>${priceQty}</p>
                </div>
                <div className="info-wrapper">
                    <p>Total price for packagings:</p><p>${pricePkg}</p>
                </div>
                <div className="info-wrapper">
                    <p>Total:</p><p>${priceQty + pricePkg}</p>
                </div>
                

                <button className="to-checkout" disabled={priceQty?false:true} onClick={() => toCheckout()}>{priceQty?'Proceed to checkout':'No items in cart'}</button>
            </div>
            </>
            :
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
                <img src={construction} alt="Error 404 under construction" />
                <p style={{fontSize: '5rem', fontWeight: 'bold', color: '#333'}}>Currently under construction</p>
            </div>}
            
        </StyledCart>

    );
}
 
export default Cart;
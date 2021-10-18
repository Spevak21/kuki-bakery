import { useState } from "react/cjs/react.development";
import { v4 as uuidv4 } from 'uuid';
import StyledOrderCard from "./StyledOrderCard";

const OrderCard = ({product, user, setUserCart, counter}) => {

    // console.log(product)
    let bgClass = "card__bg card__bg--" + (1 + counter);

    const [chocoQty, setChocoQty] = useState(0);
    const [berryQty, setBerryQty] = useState(0);
    const [raisinQty, setRaisinQty] = useState(0);

    const [flip, setFlip] = useState(false);
    const [ordered, setOrdered] = useState(false);

    const incrementQty = () => {
        if(product.type === "Chocolate") {
            setChocoQty(prev => prev + 250);
        }else if(product.type === "Blueberry") {
            setBerryQty(prev => prev + 250);
        }else if(product.type === "Raisin") {
            setRaisinQty(prev => prev + 250);
        }
    }

    const decrementQty = () => {
        if(product.type === "Chocolate" && chocoQty > 0) {
            setChocoQty(prev => prev - 250);
        }else if(product.type === "Blueberry" && berryQty > 0) {
            setBerryQty(prev => prev - 250);
        }else if(product.type === "Raisin" && raisinQty > 0) {
            setRaisinQty(prev => prev - 250);
        }
    }

    const checkQty = () => {
        if(product.type === "Chocolate" && chocoQty === 0) {
            return
        }else if(product.type === "Blueberry" && berryQty === 0) {
            return
        }else if(product.type === "Raisin" && raisinQty === 0) {
            return
        }

        setFlip(true);
    }

    const cancelOrder = () => {
        setFlip(false);
        resetQty();
    }

    const resetQty = () => {
        if(product.type === "Chocolate") {
            setChocoQty(0);
        }else if(product.type === "Blueberry") {
            setBerryQty(0);
        }else if(product.type === "Raisin") {
            setRaisinQty(0);
        }
    }

    const addToCart = () => {
        
        setOrdered(true);

        setTimeout(() => {
            setFlip(false)
            setTimeout(() => {
                setOrdered(false);
            }, 500);
        }, 1000);

        if(product.type === "Chocolate") {
            let newOrder = {
                id: uuidv4(),
                type: product.type,
                quantity: chocoQty/1000,
                price: chocoQty/1000 * product.price,
                package: 'Paper',
                packagePrice: 0
            };
            setUserCart(prev => [...prev, newOrder]);
            setTimeout(() => {
                setChocoQty(0);
            }, 500);

        }else if(product.type === "Blueberry") {
            let newOrder = {
                id: uuidv4(),
                type: product.type,
                quantity: berryQty/1000,
                price: berryQty/1000 * product.price,
                package: 'Paper',
                packagePrice: 0
            };
            setUserCart(prev => [...prev, newOrder]);
            setTimeout(() => {
                setBerryQty(0);
            }, 500);
            
        }else if(product.type === "Raisin") {

            let newOrder = {
                id: uuidv4(),
                type: product.type,
                quantity: raisinQty/1000,
                price: raisinQty/1000 * product.price,
                package: 'Paper',
                packagePrice: 0
            };
            setUserCart(prev => [...prev, newOrder]);
            setTimeout(() => {
                setRaisinQty(0);
            }, 500);
        }
    }

    return (

        <StyledOrderCard product = {product} flip = {flip} ordered = {ordered}>
            <div className="card__side card__side--front">
                <div className={bgClass}>
                    <div className="card__icon ">
                        <img src={product.icons[0]} alt={product.type + ' cookie'} />
                    </div>
                </div>
                
                <h3>{product.type + ' cookie'}</h3>

                <div className="card__info">
                    {product.features.map(feature => <p key ={Math.random()}>{feature}</p>)}
                </div> 
                
                <div className="card__btns">
                    <p>1 cookie ~ 15 grams | price (1kg) = ${product.price}</p>
                    <button className="btn btn-sub" onClick={() => decrementQty()}>&#8211;</button>

                    <div className="card__input">
                        {product.type === "Chocolate"?<input value={chocoQty} type="number" className="card__input-value" readOnly/>:''}
                        {product.type === "Blueberry"?<input value={berryQty} type="number" className="card__input-value" readOnly/>:''}
                        {product.type === "Raisin"?<input value={raisinQty} type="number" className="card__input-value" readOnly/>:''}
                        <label htmlFor="quantity-1" className="card__input-label">grams</label>
                    </div>

                    <button className="btn btn-add" onClick={() => incrementQty()}>+</button>
                    
                    <div>
                        <button className="btn btn-check" onClick={() => checkQty()}>&#10003;</button>
                    </div>
                </div>
            </div>

            <div className="card__side card__side--back">
                <img src={product.icons[1]} alt={'3 ' + product.type + ' cookies'} className={ordered?'cookie__back hide':"cookie__back"}/>
                <div className="card__summary">
                    <div className={ordered?'card__summary-order dis-to-right':"card__summary-order"}>
                        <p>Batch order :</p>
                        <p><span className="order__weight">{product.type === 'Chocolate'?chocoQty/1000:''}{product.type === 'Blueberry'?berryQty/1000:''}{product.type === 'Raisin'?raisinQty/1000:''}</span> kg</p>
                        <p>(~ <span className="order__number">{product.type === 'Chocolate'?Math.floor(chocoQty/15):''}{product.type === 'Blueberry'?Math.floor(berryQty/15):''}{product.type === 'Raisin'?Math.floor(raisinQty/15):''}</span> cookies)</p>
                        <p><span className="order__price">{product.type === 'Chocolate'?chocoQty/1000*product.price:''}{product.type === 'Blueberry'?berryQty/1000*product.price:''}{product.type === 'Raisin'?raisinQty/1000*product.price:''}</span> $</p>
                        
                        <button className="btn btn-white addtc" onClick={() => addToCart()}>Add to cart</button>
                    </div>
                    <div className={ordered?"card__summary-message show":"card__summary-message"}>
                        <p>Added to cart</p>
                    </div>
                    <div className="card__summary-done">
                        <p className="checked">&#10003;</p>
                        <button className="btn btn-cancel" onClick={() => cancelOrder()}>&times;</button>
                    </div>
                </div>
            </div>
        </StyledOrderCard>

    );
}
 
export default OrderCard;
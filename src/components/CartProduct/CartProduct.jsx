import StyledCartProduct from "./StyledCartProduct";
import { useEffect, useState } from "react";

import ChocolatePaper from '../../images/cart/choco-paper.png';
import BlueberryPaper from '../../images/cart/blueberry-paper.png';
import RaisinPaper from '../../images/cart/raisin-paper.png';
import ChocolateGlass from '../../images/cart/choco-glass.png';
import BlueberryGlass from '../../images/cart/blueberry-glass.png';
import RaisinGlass from '../../images/cart/raisin-glass.png';
import ChocolateAluminum from '../../images/cart/choco-alu.png';
import BlueberryAluminum from '../../images/cart/blueberry-alu.png';
import RaisinAluminum from '../../images/cart/raisin-alu.png';

const CartProduct = ({product, setUserCart}) => {

    const [change, setChange] = useState(false);
    const [productImage, setProductImage] = useState('');
    const [newPackage, setNewPackage] = useState(product.package);
    const [newQuantity, setNewQuantity] = useState(product.quantity);
    const [packagePrice, setPackagePrice] = useState(product.packagePrice);
    const [quantityPrice, setQuantityPrice] = useState(product.price);

    let totalPrice = quantityPrice + packagePrice;

    const changeQuantity = (val) => {
        if(val === 'add') {
            setNewQuantity(prev => prev + 0.25);
        }else if(val === 'sub' && newQuantity > 0){
            setNewQuantity(prev => prev - 0.25);
        }
    }

    const updateUserCart = () => {
        let changedOrder = {
            id: product.id,
            type: product.type,
            quantity: newQuantity,
            price: quantityPrice,
            package: newPackage,
            packagePrice: packagePrice,
            total: totalPrice
        }

        setChange(false);

        setUserCart(prev => {
            let tmp = [...prev];
            console.log(tmp)
            let index = tmp.findIndex(order => order.id === product.id);
            console.log(index)
            tmp.splice(index, 1, changedOrder);
            console.log(tmp)
            return tmp;
        });
    }

    const deleteProduct = () => {
        setUserCart(prev => {
            let tmp = [...prev];
            let index = tmp.findIndex(order => order.id === product.id);
            tmp.splice(index, 1);
            return tmp;
        });
    }

    useEffect(() => {
        if(product.type === "Chocolate") {
            if(newPackage === 'Paper'){
                setProductImage(ChocolatePaper);
            }else if(newPackage === 'Glass'){
                setProductImage(ChocolateGlass);
            }else if(newPackage === 'Aluminum'){
                setProductImage(ChocolateAluminum);
            }
            setQuantityPrice(newQuantity * 6);
        }else if(product.type === "Blueberry") {
            if(newPackage === 'Paper'){
                setProductImage(BlueberryPaper);
            }else if(newPackage === 'Glass'){
                setProductImage(BlueberryGlass);
            }else if(newPackage === 'Aluminum'){
                setProductImage(BlueberryAluminum);
            }
            setQuantityPrice(newQuantity * 8);
        }else if(product.type === "Raisin") {
            if(newPackage === 'Paper'){
                setProductImage(RaisinPaper);
            }else if(newPackage === 'Glass'){
                setProductImage(RaisinGlass);
            }else if(newPackage === 'Aluminum'){
                setProductImage(RaisinAluminum);
            }
            setQuantityPrice(newQuantity * 7);
        }
    }, [product.type, newQuantity, newPackage]);

    useEffect(() => {
        if(product.package !== newPackage || product.quantity !== newQuantity) {
            setChange(true);
        }
    }, [newPackage, newQuantity, product.package, product.quantity]);

    useEffect(() => {
        if(change === true){
            updateUserCart();
        }
    }, [change])

    return (

        <StyledCartProduct>
            <div className="image-container">
                <img src={productImage} alt={product.type + 'packaging'} />
            </div>
            <div className="info-container">
                <div className="packaging">
                    <h3>Packaging</h3>

                    <div>
                        <input value='Paper' type="radio" name={"packaging" + product.id} id={"paper" + product.id} onChange={event => {setNewPackage('Paper'); setPackagePrice(0)}} checked={newPackage === 'Paper'} />
                        <label htmlFor={"paper" + product.id}>Paper</label>
                    </div>
                    <div>
                        <input value='Glass' type="radio" name={"packaging" + product.id} id={"glass" + product.id} onChange={event => {setNewPackage('Glass'); setPackagePrice(2)}} checked={newPackage === 'Glass'} />
                        <label htmlFor={"glass" + product.id}>Glass</label>
                    </div>
                    <div>
                        <input value='Aluminum' type="radio" name={"packaging" + product.id} id={"aluminum" + product.id} onChange={event => {setNewPackage('Aluminum'); setPackagePrice(5)}} checked={newPackage === 'Aluminum'} />
                        <label htmlFor={"aluminum" + product.id}>Aluminum</label>
                    </div>
                </div>
                <div className="quantity">
                    <h3>Quantity</h3>
                    <p>Quantity: {newQuantity} kg</p>
                    <div>
                        <button value="sub" onClick={event => changeQuantity(event.target.value)}>&#8211;</button>
                        <button value="add" onClick={event => changeQuantity(event.target.value)}>+</button>
                    </div>
                </div>
                <div className="price">
                    <h3>Price</h3>              
                    <p>Price for cookies: ${quantityPrice}</p>
                    <p>Price for packaging: ${packagePrice} </p>
                    <p>Total price for this order: ${totalPrice}</p>
                </div>
                <div className="decide">
                    <button className="passive" onClick={() => deleteProduct()}>Delete order</button>
                </div>
            </div>
        </StyledCartProduct>

    );
}
 
export default CartProduct;
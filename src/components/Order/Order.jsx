import OrderCard from "../OrderCard/OrderCard";
import StyledOrder from "./StyledOrder";

const Order = ({allProducts, user, setUserCart, setNotify}) => {
    
    // if(allProducts.length !==0){
    //     console.log(allProducts)
    // }

    return (

        <StyledOrder>
            <h2>Order yours cookies</h2>
            <div className="container">
                {allProducts.length !==0? allProducts.map((product, i) => <OrderCard key={product.id} product = {product} user = {user} setUserCart = {setUserCart} setNotify = {setNotify} counter = {i} />):''}
            </div>
        </StyledOrder>

    );
}
 
export default Order;
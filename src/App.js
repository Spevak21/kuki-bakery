import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllPackagings, getAllProducts, getAllUsers, updateUser } from './service';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Packaging from './components/Packaging/Packaging';
import Contacts from './components/Contacts/Contacts';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

import image404 from '../../kuki/src/images/404.png'

function App() {

  const [user, setUser] = useState(null);                                     // 1
  const [userCart, setUserCart] = useState([]);                               // 2
  const [loggingOut, setLoggingOut] = useState(false);                        // 3
  const [cartLength, setCartLength] = useState(0);                            // 4
  const [notify, setNotify] = useState(false);                                // 5
  const [allUsers, setAllUsers] = useState([]);                               // 6
  const [allPackagings, setAllPackagings] = useState([]);                     // 7
  const [allProducts, setAllProducts] = useState([]);                         // 8
  const [priceQty, setPriceQty] = useState(0);                                // 9
  const [pricePkg, setPricePkg] = useState(0);                                // 10

  useEffect(() => {
    getAllUsers().then(res => {
      setAllUsers(res.data);
    });
    getAllPackagings().then(res => {
      setAllPackagings(res.data);
    });
    getAllProducts().then(res => {
      setAllProducts(res.data);
    });
  }, []);

  useEffect(() =>{
    if(loggingOut === true && user !== null) {

      let tmp = {...user};
      tmp.cart = userCart;

      updateUser(user.id, tmp).then(res => {
        setUser(null);
        setUserCart([]);
        setCartLength(0);
        setLoggingOut(false);

        getAllUsers().then(res => {
          setAllUsers(res.data);
        });
      });
    }
  }, [loggingOut, user, userCart]);

  useEffect(() => {
    if(userCart.length > 0) {

      let totalQtyPrice = 0;
      let totalPkgPrice = 0;
      
      userCart.forEach(article => {
        totalQtyPrice += article.price;
        totalPkgPrice += article.packagePrice;
      });

      setPriceQty(totalQtyPrice);
      setPricePkg(totalPkgPrice);
    }else {
      setPriceQty(0);
      setPricePkg(0);
    }
  }, [userCart])

  useEffect(() => {
    if(user) {
      let tmp = [...{...user}.cart]
      setUserCart(tmp);
    }else if (user === null) {
      setUserCart([]);
    }
  }, [user])

  useEffect(() => {
    if(userCart.length > cartLength) {
      setCartLength(userCart.length);
      setNotify(true);
    }
  }, [cartLength, userCart.length]);

  return (
    <div className="App">
      <BrowserRouter basename="/kuki-bakery">
        <Navigation user = {user} notify = {notify} setNotify = {setNotify} userCart = {userCart} setLoggingOut = {setLoggingOut}/>
          
        <Switch>
          <Route exact path="/">
            <Home user = {user}/>
          </Route>
          <Route path="/packaging">
            <Packaging allPackagings = {allPackagings}/>
          </Route>
          <Route path="/contacts">
            <Contacts user = {user}/>
          </Route>
          <Route path="/order">
            <Order allProducts = {allProducts} user = {user} setUserCart = {setUserCart}/>
          </Route>
          <Route path="/login">
            <Login user = {user} setUser = {setUser} allUsers = {allUsers}/>
          </Route>
          {user?
          <Route path="/cart">
            <Cart userCart = {userCart} setUserCart = {setUserCart} priceQty = {priceQty} pricePkg = {pricePkg}/>
          </Route>
          :
          <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
            <img src={image404} alt="Error 404 cookies" />
            <p style={{fontSize: '5rem', fontWeight: 'bold', color: '#333'}}>Page not found</p>
          </div>}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

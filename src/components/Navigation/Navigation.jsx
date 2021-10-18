import StyledNavigation from "./StyledNavigation";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import iconMenu from '../../images/icon-menu.png';
import iconCart from '../../images/icon-cart.png';
import iconArrow from '../../images/icon-arrow.png'
import logoNav from '../../images/logo-nav.png';

const Navigation = ({user, notify, setNotify, userCart, setLoggingOut}) => {

    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset < 200) {
                setRotate(false);
            }else if(window.pageYOffset > 200) {
                setRotate(true);
            }

            if(window.pageYOffset > 1000) {
                document.querySelector('.arrow-icon').classList.add('pop-icon');
                document.querySelector('.arrow-icon').classList.remove('to-bottom');
            }
            if(window.pageYOffset < 1000) {
                document.querySelector('.arrow-icon').classList.remove('pop-icon');
                document.querySelector('.arrow-icon').classList.add('to-bottom');
            }
        });
    }, [])

    return (

        <StyledNavigation user = {user} notify = {notify} rotate = {rotate?'yes':''} isTop = {window.pageYOffset < 200?'yes':'no'}>
            <img src={logoNav} alt="Navigation logo Kuki"/>

            <nav>
                <div>
                    <img src={iconMenu} alt="Burget menu icon" className={rotate?'rotate':''} onClick={() => {setRotate(prev => !prev)}}/>
                </div>
                <div className={rotate?'collapse':''}>
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/packaging">Packaging</Link></span>
                    <span><Link to="/contacts">Contacts</Link></span>
                    {user?<span><Link to="/order">Order</Link></span>:<span><Link to="/login">Login</Link></span>}
                    {user?<span><Link to="/" onClick={() => setLoggingOut(true)}>Logout</Link></span>:''}
                </div>
            </nav>

            <div className={userCart.length!==0?"cart-icon pop-icon":"cart-icon"} onClick={() => setNotify(false)}>
                <Link to="/cart"><img src={iconCart} alt="Cart icon"/></Link>
            </div>

            <div className="arrow-icon" onClick={() => {}}>
                <img src={iconArrow} alt="Arrow icon" onClick={() => window.scrollTo(0,0)}/>
            </div>

        </StyledNavigation>
        
    );
}
 
export default Navigation;
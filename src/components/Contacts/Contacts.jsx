import StyledContacts from "./StyledContacts";
import React, { useState } from "react";
import { postMessage } from "../../service";

import phoneCookie from '../../images/contacts/phone-icon.png';
import addressCookie from '../../images/contacts/address-icon.png';
import emailCookie from '../../images/contacts/email-icon.png';

import usernameIcon from '../../images/flat/username-icon.png';
import emailIcon from '../../images/flat/email-icon.png';

import facebook from '../../images/contacts/facebook-icon.png';
import twitter from '../../images/contacts/twitter-icon.png';
import linkedIn from '../../images/contacts/linkedIn-icon.png';
import instagram from '../../images/contacts/instagram-icon.png';

const Contacts = ({user}) => {

    // Message form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [valid, setValid] = useState('neutral');
    const [nameValid, setNameValid] = useState('neutral')
    const [emailValid, setEmailValid] = useState('neutral')
    const [messageValid, setMessageValid] = useState('neutral')

    // Icon interaction
    const [phoneControl, setPhoneControl] = useState(false);
    const [addressControl, setAddressControl] = useState(false);
    const [emailControl, setEmailControl] = useState(false);

    const phoneHover = () => {
        if(!phoneControl) {
            setPhoneControl(true);
            setTimeout(() => {
                setPhoneControl(false);
            }, 1000);
        }
    }
    const addressHover = () => {
        if(!addressControl) {
            setAddressControl(true);
            setTimeout(() => {
                setAddressControl(false);
            }, 1000);
        }
    }
    const emailHover = () => {
        if(!emailControl) {
            setEmailControl(true);
            setTimeout(() => {
                setEmailControl(false);
            }, 1000);
        }
    }

    const validation = () => {
        let control = true;
        if(!user){
            if(name.trim() === '') {
                setNameValid('negative');
                setTimeout(() => {
                    setNameValid('neutral');
                }, 1000);
                control = false;
            }else {
                setNameValid('positive');
                setTimeout(() => {
                    setNameValid('neutral');
                }, 1000);
            }

            if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()))) {
                setEmailValid('negative');
                setTimeout(() => {
                    setEmailValid('neutral');
                }, 1000);
                control = false;
            }else {
                setEmailValid('positive');
                setTimeout(() => {
                    setEmailValid('neutral');
                }, 1000);
            }
        }

        if(message.trim() === '') {
            setMessageValid('negative');
            setTimeout(() => {
                setMessageValid('neutral');
            }, 1000);
            control = false;
        }else {
            setMessageValid('positive');
            setTimeout(() => {
                setMessageValid('neutral');
            }, 1000);
        }

        return control;
    }

    const messageVisitorHandler = () => {
        if(validation()){
            postMessage(name, email, message).then(res => {
                resetInputs();
                setValid('positive');
                
                setTimeout(() => {
                    setValid('neutral');
                }, 1000);
            })
        }else {
            setValid('negative');
            setTimeout(() => {
                setValid('neutral');
            }, 1000);
        }
    }

    const messageUserHandler = () => {
        if(validation()){
            postMessage(user.username, user.email, message).then(res => {
                resetInputs();
                setValid('positive');
                
                setTimeout(() => {
                    setValid('neutral');
                }, 1000);
            })
        }else {
            setValid('negative');
            setTimeout(() => {
                setValid('neutral');
            }, 1000);
        }
    }

    const resetInputs = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (

        <StyledContacts valid = {valid} nameValid = {nameValid} emailValid = {emailValid} messageValid = {messageValid}>
            <div className="container-info">
                <div className="info">
                    <div className="img-container">
                        <img src={phoneCookie} alt="Phone icon" className={phoneControl?'shake-icon':''} onMouseOver={() => phoneHover()} />
                    </div>
                    <p>(+381) 64 123 12 34</p>
                </div>

                <div className="info">
                    <div className="img-container">
                        <img src={addressCookie} alt="Address icon" className={addressControl?'shake-icon':''} onMouseOver={() => addressHover()}/>
                    </div>
                    <p>21 Folks cookie Street, 21000 Novi Sad, Serbia</p>
                </div>

                <div className="info">
                    <div className="img-container">
                        <img src={emailCookie} alt="Letter icon" className={emailControl?'shake-icon':''} onMouseOver={() => emailHover()}/>
                    </div>
                    <p>kuki_bakery@kuki.com</p>
                </div>
            </div>

            <div className="container-form">
                <form>
                    <div className="credentials">
                        {!user?
                        <>
                        <div className="div-user">
                            <img src={usernameIcon} alt="Username icon" />
                            <input value={name} type="text" placeholder="Name" onChange={event => {setName(event.target.value)}}/>
                        </div>
                        
                        <div className="div-email">
                            <img src={emailIcon} alt="Username icon" />
                            <input value={email} type="email" placeholder="Email" onChange={event => {setEmail(event.target.value)}}/>
                        </div>
                        
                        <button onClick={event => {event.preventDefault(); messageVisitorHandler();}}>Send Message</button>
                        </>
                        :
                        <button onClick={event => {event.preventDefault(); messageUserHandler();}}>Send Message</button>
                        }
                    </div>
                    
                    <div className="message">
                        <textarea value={message} placeholder="Your message..." onChange={event => {setMessage(event.target.value)}}/>
                    </div>
                </form>
            </div>

            <div className="container-socials">
                <div className="icon-container">
                    <a href="http://facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook icon" /></a>
                </div>
                <div className="icon-container">
                    <a href="http://twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter icon" /></a>
                </div>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/danijel-spevak-38190521b/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn icon" /></a>
                </div>
                <div className="icon-container">
                    <a href="http://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram icon" /></a>
                </div>
            </div>
        </StyledContacts>

    );
}
 
export default Contacts;
import StyledLogin from "./StyledLogin";

import usernameIcon from '../../images/flat/username-icon.png';
import passwordIcon from '../../images/flat/password-icon.png';
import emailIcon from '../../images/flat/email-icon.png';
import { useState } from "react";
import { useHistory } from "react-router";
import { postUser } from "../../service";

const Login = ({user, setUser, allUsers}) => {

    const [register, setRegister] = useState(false);
    const [swap, setSwap] = useState(false);
    const [valid, setValid] = useState('neutral');
    const [usernameValid, setUsernameValid] = useState('neutral');
    const [emailValid, setEmailValid] = useState('neutral');
    const [passwordValid, setPasswordValid] = useState('neutral');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const registerHandler = () => {
        if(!allUsers.some(user => user.username === username || user.email === email)){
            if(registrationValidation()){
                postUser({username,email,password,cart:[]}).then(res => {
                    setUser(res.data);
                    resetInputs();
                    setValid('positive');
                    
                    setTimeout(() => {
                        setValid('neutral');
                        history.push('/');
                    }, 1000);
                })
            }else {
                setValid('negative');
                setTimeout(() => {
                    setValid('neutral');
                }, 1000);
            }
        }
    }

    const loginHandler = () => {
        let user = allUsers.find(el => (el.username === username || el.email === username) && el.password === password);
        if (user) {
            setUser(user);
            resetInputs();
            setValid('positive');
            
            setTimeout(() => {
                setValid('neutral');
                history.push('/');
            }, 1000);
        }else {
            setValid('negative');
            setTimeout(() => {
                setValid('neutral');
            }, 1000);
        }
    }

    const resetInputs = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    }

    const registrationValidation = () => {
        let control = true;

        if(username.trim().length < 6) {
            setUsernameValid('negative');
            setTimeout(() => {
                setUsernameValid('neutral');
            }, 1000);
            control = false;
        }else {
            setUsernameValid('positive');
            setTimeout(() => {
                setUsernameValid('neutral');
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

        if(password.length < 8 || !password.split('').some(char => (char >= 'A' && char <='Z') || (char >= 'a' && char <='z')) || !password.split('').some(char => !isNaN(Number(char)))) {
            setPasswordValid('negative');
            setTimeout(() => {
                setPasswordValid('neutral');
            }, 1000);
            control = false;
        }else {
            setPasswordValid('positive');
            setTimeout(() => {
                setPasswordValid('neutral');
            }, 1000);
        }

        return control;
    }

    return (

        <StyledLogin valid = {valid} usernameValid = {usernameValid} emailValid = {emailValid} passwordValid = {passwordValid}>
            <div className={swap?'slide-out':''}>
                <h2>{register?'Welcome!': user?`Welcome ${user.username}!`:'Welcome back!'}</h2>
                <form>
                    <div className="div-user">
                        <img src={usernameIcon} alt="Username icon" />
                        <input value={username} type="text" placeholder={register?"Username (Min: 6 characters)":"Username"} onChange={event => {setUsername(event.target.value)}}/>
                    </div>

                    {register?
                    <div className="div-email">
                        <img src={emailIcon} alt="Username icon" />
                        <input value={email} type="email" placeholder="Email" onChange={event => {setEmail(event.target.value)}}/>
                    </div>
                    :''}

                    <div className="div-pass">
                        <img src={passwordIcon} alt="Password icon" />
                        <input value={password} type="password" placeholder={register?"Password (Must include a-z 0-9)":"Password"} onChange={event => {setPassword(event.target.value)}}/>
                    </div>
                    
                    {register?
                    <button onClick={event => {event.preventDefault(); registerHandler();}}>Register</button>
                    :
                    <button onClick={event => {event.preventDefault(); loginHandler();}}>Login</button>}
                    
                </form>

                <p>
                {register?'Have an account?':'Don\'t have an account?'} <span onClick={() => {
                    setSwap(prev => !prev);
                    
                    setTimeout(() => {
                        resetInputs();
                        setSwap(prev => !prev);
                        setRegister(prev => !prev);
                    }, 1000);
                }}>{register?'Login instead!':'Register instead!'}</span>
                </p>
            </div>
            
        </StyledLogin>
    );
}
 
export default Login;
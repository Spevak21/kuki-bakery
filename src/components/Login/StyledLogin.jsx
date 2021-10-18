import styled from 'styled-components';

import background from '../../images/background/login-bg.png'

const StyledLogin = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    background-image: linear-gradient(to bottom right, rgba(255, 198, 106, 0.9), rgba(197, 151, 76, 0.9)), url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        width: fit-content;
        transition: all .8s cubic-bezier(.50,-0.55,.50,1.55);

        &.slide-out {
            transform: translateY(75vh);
        }

        h2 {
            font-size: 5rem;
            color: #333;
        }

        p {
            font-size: 2rem;
            color: #333;

            span {
                color: white;
                text-decoration: underline;
                text-shadow: .1rem .1rem .5rem rgba(0, 0, 0, 0.35);
                cursor: pointer;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 1rem;
            height: fit-content;
            width: auto;
            padding: 4rem;

            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                column-gap: 2rem;
                position: relative;
                height: 6rem;
                width: 36rem;
                padding: 0 3rem;
                border-radius: 10rem;
                background-color: #fff;
                box-shadow: .1rem .1rem .6rem rgba(0, 0, 0, 0.35);
                transform-style: preserve-3d;

                &.div-user::after {
                    border: ${props => {
                        if(props.usernameValid === 'neutral') {
                            return '1px solid #969696';
                        }else if(props.usernameValid === 'positive') {
                            return '1px solid green';
                        }else if(props.usernameValid === 'negative') {
                            return '1px solid red';
                        }
                    }};
                }

                &.div-email::after {
                    border: ${props => {
                        if(props.emailValid === 'neutral') {
                            return '1px solid #969696';
                        }else if(props.emailValid === 'positive') {
                            return '1px solid green';
                        }else if(props.emailValid === 'negative') {
                            return '1px solid red';
                        }
                    }};
                }

                &.div-pass::after {
                    border: ${props => {
                        if(props.passwordValid === 'neutral') {
                            return '1px solid #969696';
                        }else if(props.passwordValid === 'positive') {
                            return '1px solid green';
                        }else if(props.passwordValid === 'negative') {
                            return '1px solid red';
                        }
                    }};
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: .4rem;
                    left: .4rem;
                    height: 5rem;
                    width: 35rem;
                    border-radius: 10rem;
                    background-color: transparent;
                    transform: translateZ(1px);
                    transition: border .5s;
                }

                input {
                    width: 90%;
                    border: none;
                    padding: .5rem 0 .4rem 0;
                    font-size: 1.6rem;
                    font-weight: 600;
                    color: #555;
                    border-bottom: 1px solid transparent;
                    transform: translateZ(2px);
                    transition: border .5s;

                    &::placeholder {
                        color: #969696;
                    }

                    &:focus {
                        outline: none;
                        border-bottom: 1px solid #969696;
                    }
                }
            }

            button {
                position: relative;
                height: 6rem;
                width: 36rem;
                padding: 0 3rem;
                border: none;
                border-radius: 5rem;
                font-size: 1.6rem;
                font-weight: 600;
                letter-spacing: .5rem;
                color: white;

                background-color: ${props => {
                    if(props.valid === 'neutral') {
                        return '#333';
                    }else if(props.valid === 'positive') {
                        return 'green';
                    }else if(props.valid === 'negative') {
                        return 'red';
                    }
                }};

                cursor: pointer;
                transform-style: preserve-3d;
                transition: background-color .5s, transform .2s ease-out;
                
                &:focus {
                    outline: none;
                    
                    &::after{
                        transform: translateZ(-1px) scale(1.1, 1.3);
                        opacity: 0;
                    }
                }
                &:active {
                    transform: translateY(.5rem);
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border-radius: 5rem;
                    background-color: #333;
                    opacity: .7;
                    transform: translateZ(-1px) scale(1, 1);
                    transition: all .5s ease-out;
                }

                &:hover {
                    &::after{
                        transform: translateZ(-1px) scale(1.1, 1.3);
                        opacity: 0;
                    }
                }
            }
        }
    }
`

export default StyledLogin;
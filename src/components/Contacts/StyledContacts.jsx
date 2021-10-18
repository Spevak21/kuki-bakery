import styled, { keyframes } from 'styled-components';

import background from '../../images/contacts/chocolate-bg.jpg'


const shakeIcon = keyframes`
    0% {transform: rotate(0)}
    40% {transform: rotate(-15deg)}
    60% {transform: rotate(10deg)}
    80% {transform: rotate(-5deg)}
    100% {transform: rotate(0deg)}
`

const StyledContacts = styled.div`
    
    min-height: 100vh;
    width: 100vw;
    padding: 15rem 10rem 5rem 10rem;
    background-image: linear-gradient(to bottom, rgba(61, 42, 31, .9), rgba(54, 34, 23, .9)), url(${background});
    background-repeat: no-repeat;
    background-size: cover;

    .container-info {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding-bottom: 5rem;
        border-bottom: 1px solid #dda265;

        .info {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 30%;
            padding: 1rem;

            .img-container {
                position: relative;
                height: 10rem;
                width: 10rem;
                margin-bottom: 2rem;

                &::after {
                    display:block;
                    content: '';
                    position: absolute;
                    top: .7rem;
                    left: .7rem;
                    height: 8.6rem;
                    width: 8.6rem;
                    border-radius: 5rem;
                    box-shadow: 1rem 1rem 2rem rgba(0,0,0, .4);
                }

                img {
                    position: relative;
                    z-index: 1002;

                    &.shake-icon {
                        animation: ${shakeIcon} 1s;
                        animation-fill-mode: forwards;
                    }
                }
            }

            p {
                font-size: 2rem;
                text-align: center;
                color: #f9cc85;
            }
        }
    }

    .container-form {

        display: flex;
        justify-content: center;
        width: 100%;
        padding: 5rem 0;
        border-top: 2px solid #160b06;
        border-bottom: 1px solid #dda265;

        form {
            display: flex;
            flex-direction: row;
            align-items: center;
            column-gap: 4rem;
            height: fit-content;
            width: 60%;
            padding: 0 4rem;

            .credentials {

                div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    column-gap: 2rem;
                    position: relative;
                    height: 6rem;
                    width: 36rem;
                    padding: 0 3rem;
                    margin-bottom: 1rem;
                    border-radius: 10rem;
                    background-color: #fff;
                    box-shadow: .1rem .1rem .6rem rgba(0, 0, 0, 0.35);
                    transform-style: preserve-3d;
                    

                    &.div-user::after {
                        border: ${props => {
                            if(props.nameValid === 'neutral') {
                                return '1px solid #969696';
                            }else if(props.nameValid === 'positive') {
                                return '1px solid green';
                            }else if(props.nameValid === 'negative') {
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
                    color: #222;
                    box-shadow: .1rem .1rem .6rem rgba(0, 0, 0, 0.35);
                    
                    background-color: ${props => {
                        if(props.valid === 'neutral') {
                            return '#dda265';
                        }else if(props.valid === 'positive') {
                            return 'green';
                        }else if(props.valid === 'negative') {
                            return 'red';
                        }
                    }};

                    cursor: pointer;
                    transform-style: preserve-3d;
                    transition: background-color .5s, transform .2s ease-out;
                    
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
                        background-color: #dda265;
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

            .message {
                height: 20rem;

                textarea {
                    font-family: 'Roboto';
                    height: 100%;
                    width: 50rem;
                    border: none;
                    border-radius: 1rem;
                    padding: 2rem;
                    resize: none;
                    box-shadow: .1rem .1rem .6rem rgba(0, 0, 0, 0.35);

                    background-color: ${props => {
                        if(props.messageValid === 'neutral') {
                            return '#fff';
                        }else if(props.messageValid === 'positive') {
                            return '#9df89d';
                        }else if(props.messageValid === 'negative') {
                            return '#ffbfbf';
                        }
                    }};
                    
                    :focus {
                        outline: none;
                    }
                }
            }
        }
    }

    .container-socials {
        display: flex;
        justify-content: center;
        column-gap: 2rem;
        width: 100%;
        padding: 5rem 0;
        border-top: 2px solid #160b06;

        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 5rem;
            border-radius: 5rem;
            box-shadow: .3rem .3rem .6rem rgba(0, 0, 0, 0.35);
            transition: all .5s;
            background-position: center top;

            &:nth-of-type(1){
                background: linear-gradient(to bottom, #fff 0%,#4267B2 100%);
                background-size: 100% 400%;
            }

            &:nth-of-type(2){
                background: linear-gradient(to bottom, #fff 0%,#1DA1F2 100%);
                background-size: 100% 400%;
            }

            &:nth-of-type(3){
                background: linear-gradient(to bottom, #fff 0%,#2867b2 100%);
                background-size: 100% 400%;
            }

            &:last-of-type {
                background: linear-gradient(to top, #feda77 0%, #e51804 8%, #9510b8 16%, #515bd4 24%, #eddcc8 32%);
                background-size: 100% 400%;
            }

            &:hover {
                background-position: center bottom;
            }

            a {
                height: 85%;
                width: 85%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
`

export default StyledContacts;
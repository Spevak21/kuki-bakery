import styled, { keyframes } from 'styled-components';

const popIcon = keyframes`
    0% {opacity: 0;visibility: visible;transform: scale(.8)}
    25% {transform: scale(1.2)}
    50% {opacity: 1;transform: scale(.9)}
    75% {transform: scale(1.1)}
    100% {visibility: visible;transform: scale(1)}
`

const shakeIcon = keyframes`
    0% {transform: rotate(0)}
    40% {transform: rotate(-15deg)}
    60% {transform: rotate(10deg)}
    80% {transform: rotate(-5deg)}
    100% {transform: rotate(0deg)}
`

const toBottom = keyframes`
    0% {transform: translateY(0);visibility: visible;opacity: 1}
    100% {transform: translateY(10rem);visibility: visible;opacity: 0}
`

const StyledNavigation = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0; // -12rem
    left: 0;
    height: 10rem;
    width: 100vw;
    padding: 0 4rem;
    
    z-index: 2000;
    
    

    &::before {
        content: '';
        position: absolute;
        top: ${props => {
            if(props.rotate === 'yes' || props.isTop === 'yes') {
                return '-12rem';
            }else if(props.rotate === 'yes' || props.isTop === 'no') {
                return '0';
            }
        }};

        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(51, 51, 51, .7);
        backdrop-filter: blur(2px);
        box-shadow: 0 .3rem .6rem rgba(0,0,0, .3);
        transition: top 1s ease-in;
    }

    & > img {
        height: 7rem;
        z-index: 2001;
    }

    .cart-icon {
        position: absolute;
        top: 12rem;
        right: 3rem;
        visibility: hidden;
        /* background-color: red; */

        img {
            position: relative;
            cursor: pointer;
            z-index: 500;
        }

        &.pop-icon {
            animation: ${popIcon} .75s;
            animation-fill-mode: forwards;
        }

        &.shake-icon {
            animation: ${shakeIcon} 1s;
            animation-fill-mode: forwards;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 2rem;
            width: 2rem;
            border-radius: 2rem;
            box-shadow: ${props => props.notify?'.3rem .3rem .5rem rgba(0,0,0, .5)':''};
            background-color: ${props => props.notify?'green':'transparent'};
            z-index: 501;
        }

        &::before {
            display:block;
            content: '';

            position: absolute;
            top: .2rem;
            left: .2rem;

            height: 6.6rem;
            width: 6.6rem;
            border-radius: 5rem;
            box-shadow: .5rem .5rem 1rem rgba(0,0,0, .3);
        }
    }

    .arrow-icon {
        position: absolute;
        top: 90vh;
        right: 3rem;
        visibility: hidden;

        img {
            position: relative;
            cursor: pointer;
            z-index: 500;
        }

        &.pop-icon {
            animation: ${popIcon} .75s;
            animation-fill-mode: forwards;
        }
        
        &.to-bottom {
            animation: ${toBottom} .75s;
            animation-fill-mode: forwards;
        }

        &::before {
            display:block;
            content: '';

            position: absolute;
            top: .2rem;
            left: .2rem;

            height: 6.6rem;
            width: 6.6rem;
            border-radius: 5rem;
            box-shadow: .5rem .5rem 1rem rgba(0,0,0, .3);
        }
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        z-index: 2001;

        div:first-child {
            height: 7rem;
            width: 7rem;
            position: relative;
            overflow: visible;

            &::after {
                display:block;
                content: '';

                position: absolute;
                top: .2rem;
                left: .2rem;

                height: 6.6rem;
                width: 6.6rem;
                border-radius: 5rem;
                box-shadow: .5rem .5rem 1rem rgba(0,0,0, .3);
            }

            img {
                height: 7rem;
                cursor: pointer;
                transition: all 2s cubic-bezier(0.65, 0, 0.35, 1);
                z-index: 1002;

                &.rotate {
                    transform: rotate(2turn);
                }
            }
        }

        div {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            column-gap: 2rem;
            width: ${prop => {return prop.user?'45rem':'35rem'}};

            transition: width 2s cubic-bezier(0.65, 0, 0.35, 1);
            overflow: hidden;
    
            &.collapse {
                width: 0;
            }

            span {
                white-space: nowrap;
                padding: .5rem 0;
                
                &:first-of-type {
                    padding-left: 2rem;
                }

                &::after {
                    display:block;
                    content: '';
                    border-bottom: 1px solid white;  
                    transform: scaleX(0);  
                    transition: transform .25s ease-in-out;
                    transform-origin: 100% 50%;
                }

                &:hover::after {
                    transform: scaleX(1);
                    transform-origin: 0% 50%;
                }

                a,
                a:link,
                a:visited {
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 1.7rem;
                    color: white;
                }
            }
        }
    }

`

export default StyledNavigation;
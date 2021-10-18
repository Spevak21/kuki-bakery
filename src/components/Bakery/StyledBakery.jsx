import styled, { keyframes } from "styled-components";

const slideBasket = keyframes`
    0% {transform: translateX(-30rem)}
    100% {transform: translateX(0)}
`

const slideLeft = keyframes`
    0% {transform: translateX(0)}
    100% {transform: translateX(17rem)}
`
const slideRight = keyframes`
    0% {transform: translateX(0)}
    100% {transform: translateX(-17rem)}
`

const flipFrontSign = keyframes`
    0% {transform: rotateY(0)}
    100% {transform: rotateY(-180deg)}
`
const flipBackSign = keyframes`
    0% {transform: rotateY(180deg)}
    100% {transform: rotateY(0)}
`
const tiltSign = keyframes`
    0% {transform: rotate(0)}
    50% {transform: rotate(20deg)}
    100% {transform: rotateY(0)}
`


const StyledBakery = styled.div`
    
    position: relative;
    height: 67.6rem;
    width: 61.9rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 20%;
        left: 10%;
        height: 50%;
        width: 80%;
        transition: background-color 1s;
        background-color: ${props => props.control? '#b47240':'#242424'};
        z-index: 1;
    }

    .bakery {
        position: relative;
        height: 100%;
        z-index: 10;
    }

    .shelf {
        position: absolute;
        bottom: 20%;
        left: 11%;
        height: 16.2%;
        z-index: 2;
    }

    .baskets {
        display: flex;
        position: absolute;
        bottom: 30%;
        left: 11.7%;
        width: 43%;
        overflow: hidden;
        z-index: 3;
        img {
            transform: translateX(-30rem);

            &.slide-basket1 {
                animation: ${slideBasket} 2s 3.5s ease-out;
                animation-fill-mode: forwards;
            }
            &.slide-basket2 {
                animation: ${slideBasket} 2s 3s ease-out;
                animation-fill-mode: forwards;
            }
            &.slide-basket3 {
                animation: ${slideBasket} 2s 2.5s ease-out;
                animation-fill-mode: forwards;
            }
        }

        img:not(:last-of-type) {
            margin-right: -1.2rem;
        }
    }

    .curtains {
        position: absolute;
        bottom: 25%;
        left: 8%;
        overflow: hidden;
        z-index: 8;

        img:first-of-type {
            &.slide-right {
                animation: ${slideRight} 2s 1s ease-in-out;
                animation-fill-mode: both;
            }
        }

        img:last-of-type {
            &.slide-left {
                animation: ${slideLeft} 2s 1s ease-in-out;
                animation-fill-mode: both;
            }
        }
    }

    .sign {
        position: absolute;
        bottom: 47%;
        left: 22%;
        height: 20%;
        width: 23%;
        z-index: 9;
        perspective: 150rem;

        &#tilt-sign {
            animation: ${tiltSign} 1.5s 5.5s ease-out;
            transform-origin: top center;
        }

        &__side {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;

            &--front {
                &#flip-front {
                    animation: ${flipFrontSign} 1.5s 5.5s ease-out;
                    animation-fill-mode: both;
                }
            }

            &--back {
                transform: rotateY(180deg);

                &#flip-back {
                    animation: ${flipBackSign} 1.5s 5.5s ease-out;
                    animation-fill-mode: both;
                }
            }
        }
    }
`

export default StyledBakery;
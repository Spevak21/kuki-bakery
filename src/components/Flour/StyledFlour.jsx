import styled, { keyframes } from "styled-components";

const rotateRight = keyframes`
    0% {transform: rotate(-60deg)}
    50% {transform: rotate(7deg)}
    70% {transform: rotate(-5deg)}
    85% {transform: rotate(3deg)}
    100% {transform: rotate(0)}
`

const rotateLeft = keyframes`
    0% {transform: rotate(60deg)}
    50% {transform: rotate(-7deg)}
    70% {transform: rotate(5deg)}
    85% {transform: rotate(-3deg)}
    100% {transform: rotate(0)}
`

const StyledFlour = styled.div`

    position: relative;
    height: 50rem;
    width: 50rem;
    border-radius: 50%;
    overflow: hidden;
    /* background-color: red; */
    
    .wheat-field {
        /* position: absolute;
        top: 0;
        left:0; */
        /* height: 50rem;
        width: 50rem; */
    }

    .grain-left {
        position: absolute;
        bottom: 1rem;
        left: 9rem;

        transform-origin: bottom;
        transform: rotate(-60deg);

        &#rotate-right {
            animation: ${rotateRight} 3s ease-out;
            animation-fill-mode: forwards;
        }
    }

    .grain-right {
        position: absolute;
        bottom: 1rem;
        right: 9rem;

        transform-origin: bottom;
        transform: rotate(60deg);

        &#rotate-left {
            animation: ${rotateLeft} 3s ease-out;
            animation-fill-mode: forwards;
        }
    }
`

export default StyledFlour;
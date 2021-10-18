import styled, { keyframes } from 'styled-components';

const slidePackaging = keyframes`
    0% {transform: translateX(100vw)}
    100% {transform: translateX(0)}
`

const StyledPackageCard = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    text-align: center;
    width: 45rem;
    padding-top: 2rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 1rem 1rem 2rem rgba(141, 100, 78, 0.3);
    transform: translateX(100vw);

    &.slide-in {
        animation: ${slidePackaging} .75s ${prop => prop.counter}s ease-out;
        animation-fill-mode: forwards;
    }

    img {
        height: 35rem;
    }

    h3 {
        width: 100%;
        padding: 1rem 0;
        font-size: 3rem;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 5px #6c4634;
        background-image: linear-gradient(to right, #dda265 0%, #b47240 30%, #b47240 70%, #dda265 100%);
    }

    p {
        padding: 2rem;
        font-size: 2rem;
        line-height: 3rem;
    }

    div:first-of-type {
        width: 80%;
        /* padding: 2rem; */
        /* background-color: green; */

        
    }

    div:last-of-type {
        width: 100%;
    }
    

`

export default StyledPackageCard;
import styled from 'styled-components';

const StyledOrder = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5rem;
    width: 100vw;
    padding-top: 15rem;
    padding-bottom: 5rem;
    min-height: 100vh;
    /* max-width: 100vw; */
    background-color: #f9cc85;

    h2 {
        background-image: linear-gradient(to bottom right, #b47240, #a56b59);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 3.5rem;
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
        width: 130rem;
        /* background-color: #fff; */
    }
`

export default StyledOrder;
import styled from 'styled-components';

const StyledPackaging = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    width: 100vw;
    padding-top: 15rem;
    padding-bottom: 5rem;
    min-height: 100vh;
    /* max-width: 100vw; */
    background-color: #f9cc85;
    overflow-x: hidden;

    & > p {
        max-width: 110rem;
        font-size: 2rem;
        line-height: 3rem;
        text-align: center;
        color: #333;
    }

    & > div {
        display: flex;
        column-gap: 5rem;
        width: fit-content;
        margin-bottom: 3rem;
    }
`

export default StyledPackaging;
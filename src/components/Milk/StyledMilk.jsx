import styled from "styled-components";

const StyledMilk = styled.div`
    
    position: relative;
    height: 50rem;
    width: 50rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: linear-gradient(to bottom right, #dda265, #b47240);

    .board {
        position: absolute;
        bottom: 4%;
        left: -10%;
        z-index: 1;
    }

    .milk {
        position: absolute;
        bottom: 14%;
        left: 50%;
        height: 50%;
        width: 20%;
        background-image: linear-gradient(357deg, rgb(238, 238, 238) 50%, #444 50%);
        transition: all 3s;
        background-size: 100% 200%;
        z-index: 2;

        &#milk-fill {
            background-position: 0 84%;
        }
    }

    .churn {
        position: absolute;
        bottom: 10%;
        left: 12.5%;
        z-index: 3;
    }
`

export default StyledMilk;
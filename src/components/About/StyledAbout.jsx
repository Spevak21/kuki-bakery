import styled from 'styled-components';

const StyledAbout = styled.div`
    
    width: 100vw;
    padding: 5rem 20rem;
    background: linear-gradient(to bottom, #eabb72 0%, #fff 100%);

    & h2 {
        font-size: 4.5rem;
        text-align: center;
        color: #333;
        margin-bottom: 10rem;

        &:not(:first-of-type) {
            margin-top: 10rem;
        }
    }

    .container {
        display: flex;
        align-items: center;
        margin-bottom: 5rem;

        &-image {
        
        }

        &-text {
            h3 {
                font-size: 3.5rem;
                text-align: center;
                color: #333;
                margin-bottom: 4rem;
            }

            p {
                font-size: 2.8rem;
                line-height: 5rem;
                text-align: center;
                margin: 0 8rem;
                color: #333;
                
                span {
                    font-weight: bold;
                }
            }
        }
    }
    
    

`

export default StyledAbout;
import styled from "styled-components";


const StyledCart = styled.div`
    
    /* position: relative; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    width: 100vw;
    padding-top: 20rem;
    background-color: #f9cc85;

    .product-list {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        width: 120rem;
        margin-left: 15rem;
        margin-bottom: 11.8rem;
        /* background-color: orange; */
    }

    .informations {

        position: fixed;
        top: 20rem;
        left: 137rem;
        border-radius: 1rem;
        padding: 3rem;
        background-color: #fff;

        h3 {
            font-size: 3rem;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #333;
        }

        p {
            font-size: 2rem;
            margin-bottom: 1rem;

            &:last-of-type {
                font-weight: bold;
            }
        }

        .info-wrapper {
            display: flex;
            justify-content: space-between;
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
            background-color: #333;

            cursor: pointer;
            transform-style: preserve-3d;
            transition: background-color .5s, transform .2s ease-out;
            
            &:active {
                transform: translateY(.5rem);
            }

            &:disabled {
                background-color: #bbb;

                &::after {
                    
                }
            }

            &:enabled {
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

    .empty-message {
        width: 120rem;
        margin-left: 15rem;

        p {
            text-align: center;
            font-size: 6rem;
            color: #fff;
            text-shadow: .2rem .2rem .6rem rgba(0,0,0, .3);
        }
    }

    

`

export default StyledCart;
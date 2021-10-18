import styled from "styled-components";

const StyledCartProduct = styled.div`
    
    display: flex;
    justify-content: space-between;
    /* column-gap: 3rem; */
    height: 30rem;
    width: 100%;
    border-radius: 1rem;
    padding: 3rem;
    color: #333;
    background-color: white;

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25rem;
        /* background-color: red; */

        img {
            height: 100%;
        }
    }

    .info-container {
        display: flex;
        width: 94rem;
        position: relative;

        /* background-color: blue; */
        
        & > div:not(:last-of-type) {
            /* width: 20rem; */
            padding: 0 3rem;
            border-left: 1px solid #333;
            /* background-color: #dcdcff; */
        }

        h3 {
            font-size: 3rem;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #333;
        }
        p {
            font-size: 2rem;
        }

        .packaging {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            div:not(:last-of-type) {
                margin-bottom: 1rem;
            }

            label {
                font-size: 2rem;
                margin-left: 2rem;
            }
        }

        .quantity {
            width: 22.2rem;

            div {
                margin-top: 2rem;

                button {
                    height: 5rem;
                    width: 5rem;
                    border: none;
                    border-radius: 5rem;
                    background-color: #fff;
                    font-size: 3rem;
                    transition: all .2s;

                    &:first-of-type {
                        margin-right: 2rem;
                        box-shadow: 0 0 1rem rgba(0,0,0, .3);

                        &:active {
                            transform: scale(0.95);
                            box-shadow: 0 0 .51rem rgba(0,0,0, .5);
                        }
                    }

                    &:last-of-type {
                        background-color: #eabb72;
                        color: #fff;
                        font-weight: bold;

                        &:active {
                            transform: scale(0.95);
                            box-shadow: 0 0 .51rem rgba(0,0,0, .5) inset;
                        }
                    }
                }
            }
        }

        .price {

            p {
                margin-bottom: 2rem;

                &:last-of-type {
                    font-weight: bold;
                }
            }
        }

        .decide {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: absolute;
            bottom: 0;
            right: 0;
            height: 100%;
            /* width: 10rem; */
            padding: 0;
            /* background-color: red; */

            button {
                height: 10rem;
                width: 10rem;
                padding: 2rem;
                border: none;
                border-radius: 1rem;
                font-size: 1.6rem;
                font-weight: 500;
                transition: transform .1s, box-shadow .1s, background-color .5s, color .5s;
                cursor: pointer;

                &.passive {
                    background-color: #fff;
                    color: #333;
                    box-shadow: 0 0 1rem rgba(0,0,0, .3);

                    &:active {
                        transform: scale(0.95);
                        box-shadow: 0 0 .51rem rgba(0,0,0, .5);
                    }

                    &:hover {
                        background-color: #c95858;
                        color: #fff;
                    }
                }

                
            }
        }
    }

    

`

export default StyledCartProduct;
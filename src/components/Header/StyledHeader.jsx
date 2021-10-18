import styled, { keyframes } from "styled-components";

const glance = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

const floating = keyframes`
    0%{transform: translateY(-1rem)}
    50%{transform: translateY(1rem)}
    100%{transform: translateY(-1rem)}
`

const rotateOnce = keyframes`
    0%{transform: rotate(0)}
    0%{transform: rotate(1turn)}
`

const StyledHeader = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    height: 100vh;
    width: 100vw;

    & > div:first-of-type {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: -1;
        opacity: 1;
        overflow: hidden;
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, .3);
        }

        video {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    & > div:last-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45rem;
        /* transform: translateY(-5rem); */
        /* border: 1px solid white; */
        margin-bottom: 10rem;
        

        img {
            margin-right: 15rem;
            animation: ${floating} 5s ease-in-out infinite;

            &.rotate-once {
                animation: ${rotateOnce} 1s ease-in-out;
            }
        }

        div {
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            height: 70%;
            width: 60rem;

            /* border: 1px solid white; */
            h1 {
                font-size: 6rem;
                color: white;
                text-shadow: .5rem .5rem 1rem rgba(0,0,0, .5);
            }
            
            h2 {
                font-size: 4.5rem;
                color: white;
                margin-bottom: 3rem;
                text-shadow: .5rem .5rem 1rem rgba(0,0,0, .5);
            }
    
            p {
                font-size: 2rem;
                color: white;
            }

            button {
                position: relative;
                padding: 2rem 4rem;
                border: none;
                border-radius: 5rem;
                font-size: 2rem;
                font-weight: 600;
                letter-spacing: .2rem;
                color: #222;
                cursor: pointer;
                box-shadow: .5rem .5rem 1rem rgba(0,0,0, .3);
                background: linear-gradient(300deg, #f9cc85 30%, #ffeac7 45%, #ffeac7 55%, #f9cc85 70%);
                background-size: 400% 400%;
                animation: ${glance} 5s ease infinite;
                transform-style: preserve-3d;
                transition: background-color .5s, transform .2s ease-out;
                
                &:active {
                    transform: translateY(.5rem);
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border-radius: 5rem;
                    background-color: #ffe4b9;
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

    svg {
        position: absolute;
        bottom: 0;
        left: 0;
        /* display: block; */
        filter: drop-shadow(0 -2rem .5rem rgba(0,0,0,.2));
    }

`

export default StyledHeader;
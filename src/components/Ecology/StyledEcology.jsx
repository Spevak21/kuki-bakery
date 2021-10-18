import styled, { keyframes } from "styled-components";

import cloudsFar from '../../images/ecology/clouds-far.png';
import cloudsClose from '../../images/ecology/clouds-close.png';

const moveClouds = keyframes`
    0% {background-position: -1000% 0}
    100% {background-position: 1000% 0}
`

const treePop = keyframes`
    0% {transform: translateY(100%)}
    100% {transform: translateY(0)}
`
const treeSquish = keyframes`
    0% {transform: scale(1, 1)}
    25% {transform: scale(.8, 1.2)}
    50% {transform: scale(1.05, .9)}
    75% {transform: scale(1, 1)}
    100% {transform: scale(1, 1)}
`

const StyledEcology = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-image: linear-gradient(to bottom, #F7904F, #FEC572);
    padding: 10rem 2rem 2.5rem 2rem;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(${cloudsFar});
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: cover;
        z-index: 2;
        animation: ${moveClouds} 200s linear infinite;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(${cloudsClose});
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: cover;
        z-index: 4;
        animation: ${moveClouds} 100s linear infinite;
    }

    h2 {
        font-size: 4.5rem;
        text-align: center;
        text-shadow: .5rem .5rem 1rem rgba(0,0,0, .5);
        color: #fff;
        margin-bottom: 10rem;
    }

    .container {
        position: relative;
        /* height: fit-content; */
        width: 100vw;
        margin-bottom: 10rem;
        /* background-color: red; */

        .text {
            position: relative;
            width: 60%;
            margin: 0 auto;
            z-index: 200;

            h3 {
                font-size: 3.5rem;
                text-align: center;
                color: #fff;
                text-shadow:  0 .3rem 1rem rgba(0,0,0, .6);
                margin-bottom: 4rem;
            }
            
            p {
                font-size: 3rem;
                text-align: center;
                color: #fff;
                text-shadow:  0 .3rem 1rem rgba(0,0,0, .6);
    
                span {
                    font-size: 4rem;
                    font-weight: bold;
                    color: ${props => props.goal?'#246517':'#fff'};
                    text-shadow:  ${props => props.goal?'0 0 0 rgba(0,0,0, 0)':'0 .3rem 1rem rgba(0,0,0, .6)'};;
                    vertical-align: middle;
                }
            }
        }

        .counter {
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 14rem;
            width: 62rem;
            margin: 0 auto 5rem auto;
            z-index: 3;

            &__number {
                position: relative;
                height: 100%;
                width: 12rem;
                border-radius: 1rem;
                overflow: hidden;
                background-color: ${props => props.goal?'#9aff86':'#fff'};
                box-shadow: 0 .5rem .8rem rgba(0,0,0, .4);
                transition: all 2s;


                img {
                    position: absolute;
                    left: 0;
                    transition: top 2s;
                
                    &.roll-first {
                        top: ${props => props.arr?'-'+props.arr[0]+'00%':'0'};
                    }
                    &.roll-second {
                        top: ${props => props.arr?'-'+props.arr[1]+'00%':'0'};
                    }
                    &.roll-third {
                        top: ${props => props.arr?'-'+props.arr[2]+'00%':'0'};
                    }
                    &.roll-forth {
                        top: ${props => props.arr?'-'+props.arr[3]+'00%':'0'};
                    }
                    &.roll-fifth {
                        top: ${props => props.arr?'-'+props.arr[4]+'00%':'0'};
                    }
                }
            }
        }
    }

    .container-2 {
        
        display: flex;
        justify-content: flex-start;
        height: 35rem;
        width: 100vw;

        &::after {
            content:'';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 5rem;
            width: 100vw;
            background-color: #246517;
        }

        .tree {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 100%;
            width: 10%;
            overflow: hidden;
            z-index: 10;

            &__wrap {
                display: flex;
                justify-content: center;
                
                &#tree-squish {
                    &-1 {
                        animation: ${treeSquish} 1s 1s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-2 {
                        animation: ${treeSquish} 1s 1.2s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-3 {
                        animation: ${treeSquish} 1s 1.4s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-4 {
                        animation: ${treeSquish} 1s 1.6s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-5 {
                        animation: ${treeSquish} 1s 1.8s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-6 {
                        animation: ${treeSquish} 1s 2s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-7 {
                        animation: ${treeSquish} 1s 2.2s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-8 {
                        animation: ${treeSquish} 1s 2.4s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-9 {
                        animation: ${treeSquish} 1s 2.6s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                    &-10 {
                        animation: ${treeSquish} 1s 2.8s ease-out ;
                        animation-fill-mode: forwards;
                        transform-origin: bottom center;
                    }
                }
            
                img {
                    height: auto;
                    width: 93%;
                    transform: translateY(100%);

                    &.tree-pop {
                        
                        &-1 {
                            animation: ${treePop} 1s 0s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-2 {
                            animation: ${treePop} 1s .2s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-3 {
                            animation: ${treePop} 1s .4s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-4 {
                            animation: ${treePop} 1s .6s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-5 {
                            animation: ${treePop} 1s .8s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-6 {
                            animation: ${treePop} 1s 1s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-7 {
                            animation: ${treePop} 1s 1.2s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-8 {
                            animation: ${treePop} 1s 1.4s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-9 {
                            animation: ${treePop} 1s 1.6s ease-in;
                            animation-fill-mode: forwards;
                        }
                        &-10 {
                            animation: ${treePop} 1s 1.8s ease-in;
                            animation-fill-mode: forwards;
                        }
                    }
                }
            }
        }
    }
    
`

export default StyledEcology;
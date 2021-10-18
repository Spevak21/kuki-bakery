import styled, { keyframes } from 'styled-components';

const rotateBranch = keyframes`
    0% {transform: rotate(90deg)}
    40% {transform: rotate(-7deg)}
    60% {transform: rotate(5deg)}
    80% {transform: rotate(-2deg)}
    100% {transform: rotate(0)}
`
const shakeFruit1 = keyframes`
    0% {transform: rotate(15deg)}
    40% {transform: rotate(-20deg)}
    60% {transform: rotate(15deg)}
    80% {transform: rotate(-10deg)}
    100% {transform: rotate(0)}
`
const shakeFruit23 = keyframes`
    0% {transform: rotate(20deg)}
    40% {transform: rotate(-25deg)}
    60% {transform: rotate(20deg)}
    80% {transform: rotate(-15deg)}
    100% {transform: rotate(0)}
`
const hideCover = keyframes`
    0% {opacity: 1}
    100% {opacity: 0}
`
const shakeLeaf = keyframes`
    0% {transform: rotate(40deg)}
    40% {transform: rotate(-10deg)}
    60% {transform: rotate(15deg)}
    80% {transform: rotate(-5deg)}
    100% {transform: rotate(0deg)}
`

const StyledCocoa = styled.div`

    position: relative;
    height: 50rem;
    width: 50rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: linear-gradient(to bottom right, #dda265, #b47240);
    background-color: white;

    .cocoa-leaves {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 7;
    }

    .whole-cocoa {
        position: relative;
        top: 15%;
        left: 1.5%;
        height: 50%;
        width: 85%;
        z-index: 1;
        transform-origin: top left;
        transform: rotate(90deg);

        &#rotate-branch {
            animation: ${rotateBranch} 3s ease-out;
            animation-fill-mode: both;
        }

        .cocoa-branch {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 2;
        }

        .cocoa-fruit-1 {
            position: absolute;
            top: 35%;
            left: 17%;
            height: 53.5%;
            z-index: 3;
            transform-origin: 83% 6%;

            &#shake-fruit {
                animation: ${shakeFruit1} 3s .5s ease-out;
                animation-fill-mode: both;
            }
        }

        .cocoa-fruit-2 {
            position: relative;
            top: 42%;
            left: 30.7%;
            height: 104%;
            width: 32.5%;
            z-index: 5;
            transform-origin: 60% 0;
            transform: rotate(20deg);

            &#shake-fruit {
                animation: ${shakeFruit23} 3s .2s ease-out;
                animation-fill-mode: both;
            }

            .cocoa-fruit-open {
                position: absolute;
                top: 0;
                height:100%;
                z-index: 6;
            }

            .cocoa-fruit-cover {
                position: absolute;
                top: 0;
                height:100%;
                z-index: 7;

                &#hide-cover {
                    animation: ${hideCover} 2s 2s ease-out;
                    animation-fill-mode: both;
                }
            }
        }

        .cocoa-fruit-3 {
            position: absolute;
            top: 35%;
            left: 59%;
            height: 84.5%;
            z-index: 4;
            transform-origin: 18% 4%;

            &#shake-fruit {
                animation: ${shakeFruit23} 3s .2s ease-out;
                animation-fill-mode: both;
            }
        }

        .cocoa-leaf-1 {
            position: absolute;
            top: 24%;
            left: 20.5%;
            height: 44.8%;
            z-index: 4;
            transform-origin: 40% 0;

            &#shake-leaf {
                animation: ${shakeLeaf} 3s .5s ease-out;
                animation-fill-mode: both;
            }
        }

        .cocoa-leaf-2 {
            position: absolute;
            top: 30%;
            left: 54%;
            height: 35.4%;
            z-index: 4;
            transform-origin: left top;

            &#shake-leaf {
                animation: ${shakeLeaf} 3s .5s ease-out;
                animation-fill-mode: both;
            }
        }

        .cocoa-leaf-3 {
            position: absolute;
            top: 21%;
            left: 82%;
            height: 77%;
            z-index: 4;
            transform-origin: left top;

            &#shake-leaf {
                animation: ${shakeLeaf} 3s .5s ease-out;
                animation-fill-mode: both;
            }
        }
    }
`

export default StyledCocoa;
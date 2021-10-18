import styled from "styled-components";

const StyledOrderCard = styled.div`
    
    perspective: 150rem;
    /* -moz-perspective: 150rem; */
    position: relative;
    height: 54rem;
    width: 40rem;
    min-width: 30rem;
    /* opacity: 0; */
    transition: margin 1s;
    /* background-color: blue; */

    .card__side {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 1rem;
        text-align: center;
        overflow: hidden;
        backface-visibility: hidden;
        transition: all .8s ease;

        box-shadow: .5rem 1rem 4rem rgba(#8d644e, .8);
        border-bottom: 2px solid #8d644e;
        border-right: 2px solid #8d644e;
        
        h3 {
            font-size: 3rem;
            margin-top: 7rem;
            margin-bottom: 1rem;
            color: ${props => {
                if(props.product.type === 'Chocolate') {
                    return '#55353b';
                }else if (props.product.type === 'Blueberry') {
                    return '#064490';
                }else if (props.product.type === 'Raisin') {
                    return '#4b1f3d';
                }
            }}
        }

        &--front {
            background-color: #eddcc8;
            transform: ${props => props.flip?'rotateY(-180deg)':'rotateY(0)'};

            .card {
                &__bg {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    background-size: cover;
                    height: 15rem;
        
                    &--1 {
                        background-image: url(${props => props.product.backgrounds[0]});
                    }
        
                    &--2 {
                        background-image: url(${props => props.product.backgrounds[0]});
                    }
        
                    &--3 {
                        background-image: url(${props => props.product.backgrounds[0]});
                    }
                }

                &__icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 12rem;
                    width: 12rem;
                    margin-top: 8.5rem;
                    border-radius: 50%;
                    background-color: #fff;
                    box-shadow: 0 1rem 2rem rgba(141, 100, 78, .2);
            
                    img {
                        height: 60%;
                        width: 60%;
                    }
                }

                &__info {
                    font-size: 1.6rem;
                    color: #7f605e;
                    width: 80%;
                    /* margin: 0 auto; */
            
                    > * {
                        padding: .5rem 0;
            
                        &:not(:last-of-type) {
                            border-bottom: 1px solid rgba(127, 96, 94, .3);
                        }
                    }
                }

                &__btns {
                    position: absolute;
                    bottom: 0;
                    height: 32%;
                    width: 100%;
                    padding: 1.2rem 0;
                    background-color: #e7d0b5;
            
                    p {
                        font-size: 1.6rem;
                        line-height: 1.7;
                        margin-bottom: .5rem;
                        color: #8d644e;
                    }
                }

                &__input {
                    position: relative;
                    display: inline-block;
                    background-color: #ffffff;
                    border-radius: 1rem;
                    height: 5rem;
                    width: 50%;
                    vertical-align: middle;
                    margin: 0 1rem;
                    transition: all .5s;

                    &-value {
                        font-size: 1.5rem;
                        font-family: inherit;
                        color: #4b3022;
                        background-color: transparent;
                        margin: 1.7rem 0;
                        border: none;
                        width: 60%;
                        text-align: center;
                        vertical-align: middle;
                
                        &::-webkit-input-placeholder {
                            color: #8d644e;
                        }
                
                        &::-webkit-outer-spin-button,
                        &::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                        }
                        &[type=number] {
                            -moz-appearance: textfield;
                        }
                
                        &:focus {
                            outline: none;
                
                            &::-webkit-input-placeholder {
                                color: transparent;
                            }
                        }
                    }
            
                    &-label {
                        position: absolute;
                        top: 29%;
                        right: 0;
                        font-size: 1.5rem;
                        font-family: inherit;
                        color: #4b302261;
                        width: 40%;
                    }

                    &.highlight {
                        outline: 3px solid #c95858;
                    }
                }
            }
        }

        &--back {
            background-size: cover;
            position: relative;
            padding-top: 2rem;
            transform: ${props => props.flip?'rotateY(0)':'rotateY(180deg)'};

            background-image: ${props => {
                if(props.product.type === 'Chocolate') {
                    return `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .6) ), url(${props.product.backgrounds[1]})`;
                }else if (props.product.type === 'Blueberry') {
                    return `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .6) ), url(${props.product.backgrounds[1]})`;
                }else if (props.product.type === 'Raisin') {
                    return `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .6) ), url(${props.product.backgrounds[1]})`;
                }
            }};

            .cookie__back {
                display: inline-block;
                height: 16rem;
                width: 16rem;
                transition: all .5s;

                opacity: 1;
                visibility: visible;

                &.hide {
                    opacity: 0;
                    visibility: hidden;
                }
            }
            
            .card__summary {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 63%;
                width: 100%;
                padding-top: 2rem;
                text-align: center;
                background-color: rgba(0,0,0, .4);
                

                &-order {
                    display: inline-block;
                    position: absolute;
                    left: 3.5rem;
                    color: #fff;
                    font-size: 2.4rem;
                    width: 80%;
                    transition: all .5s cubic-bezier(0.36, 0, 0.66, -0.56);
                    
                    span {
                        font-size: 2.7rem;
                    }

                    p {
                        padding: 1rem;
            
                        &:not(:last-of-type) {
                            border-bottom: 1px solid rgba(#8d644e, .5);
                        }

                        &:first-of-type {
                            color: #d7b68e;
                        }
                    }

                    &.dis-to-right {
                        transform: translateX(31rem);
                        opacity: 0;
                    }
                }

                &-message {
                    display: inline-block;
                    color: #fff;
                    font-size: 3rem;
                    width: 80%;
                    position: absolute;
                    top: 13rem;
                    left: 3.5rem;
                    transition: all .5s .5s;

                    opacity: 0;
                    visibility: hidden;

                    &.show {
                        opacity: 1;
                        visibility: visible;
                    }
                }

                &-done {
                    position: relative;
                    text-align: center;
                    margin-top: -20rem;

                    .checked {
                        font-size: 20rem;
                        font-weight: 900;
                        line-height: 20rem;
                        
                        display: inline-block;
                        background-size: 200%;
                        background-position: ${props => props.ordered?'0%':'100%'};
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;

                        transition: all .4s;

                        background-image: ${props => {
                            if(props.product.type === 'Chocolate') {
                                return 'linear-gradient(to right, #eddcc8 50%, transparent 50%)'
                            }else if(props.product.type === 'Blueberry') {
                                return 'linear-gradient(to right, #9aceff 50%, transparent 50%)'
                            }else if(props.product.type === 'Raisin') {
                                return 'linear-gradient(to right, #ffb3c3 50%, transparent 50%)'
                            }
                        }};
                    }
                }
            }    
        }
    }

    .btn {
        
        display: inline-block;
        position: relative;
        font-size: 2.5rem;
        /* text-transform: uppercase; */
        text-decoration: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        line-height: 1;
        border: none;
        vertical-align: middle;
        transition: all .2s;
        cursor: pointer;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 .4rem .5rem rgba(107, 73, 55, .4);
        }

        &:active {
            transform: translateY(0);
            box-shadow: 0 .2rem .2rem rgba(107, 73, 55, .6);
        }

        &.btn-add {
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;

            color: #fff;
            font-weight: 700;
            height: 5rem;
            width: 5rem;
            font-size: 2.5rem;

            background-color: ${props => {
                if(props.product.type === 'Chocolate') {
                    return '#55353b';
                }else if (props.product.type === 'Blueberry') {
                    return '#064490';
                }else if (props.product.type === 'Raisin') {
                    return '#4b1f3d';
                }
            }};
        }

        &.btn-sub {
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;

            background-color: #fff;
            font-weight: 700;
            height: 5rem;
            width: 5rem;
            font-size: 2.5rem;

            color: ${props => {
                if(props.product.type === 'Chocolate') {
                    return '#55353b';
                }else if (props.product.type === 'Blueberry') {
                    return '#064490';
                }else if (props.product.type === 'Raisin') {
                    return '#4b1f3d';
                }
            }};
        }

        &-check {
            margin-top: 1.5rem;
            color: #fff;
            border-radius: 50%;
            width: 4.5rem;
            font-weight: 900;

            background-color: ${props => {
                if(props.product.type === 'Chocolate') {
                    return '#55353b';
                }else if (props.product.type === 'Blueberry') {
                    return '#064490';
                }else if (props.product.type === 'Raisin') {
                    return '#4b1f3d';
                }
            }};

            &:hover::after {
                background-color: inherit;
                transform: scale(1.6);
                opacity: 0;
            }

            &::after {
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 0;
                transition: all .6s;
            }
        }

        &.btn-cancel {
            position: absolute;
            top: -1rem;
            right: 2rem;
            color: #fff;
            background-color: transparent;
            font-size: 3.5rem;
            padding: 0;
            box-shadow: none;
            text-shadow: 0 .2rem .5rem rgba(0,0,0, .6);
        }

        &.btn-white {
            color: #4b3022;
            font-family: 'Roboto';
            font-weight: 400;
            background-color: #fff;
            padding: 1rem 2rem;
            margin-top: 2.5rem;
            border-radius: 2.9rem;

            &:hover::after {
                background-color: inherit;
                transform: scaleX(1.2) scaleY(1.4);
                opacity: 0;
            }

            &::after {
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                border-radius: inherit;
                position: absolute;
                top: 0;
                left: 0;
                transition: all .6s;
            }
        }
    }
`

export default StyledOrderCard;
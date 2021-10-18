import styled from "styled-components";

const StyledFooter = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 100vw;
    padding: 5rem 10rem;
    background-color: #3d2a1f;

    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
    
        .info {
            display: flex;
            align-items: center;
            column-gap: 10rem;
            p {
                font-size: 2rem;
                color: #ebebeb;
            }
        }

        .socials {
            display: flex;
            align-items: center;
            column-gap: 2rem;

            .icon-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 5rem;
                width: 5rem;
                border-radius: 5rem;
                transition: all .5s;
                background-position: center top;

                &:nth-of-type(1){
                    background: linear-gradient(to bottom, #fff 0%,#4267B2 100%);
                    background-size: 100% 400%;
                }

                &:nth-of-type(2){
                    background: linear-gradient(to bottom, #fff 0%,#1DA1F2 100%);
                    background-size: 100% 400%;
                }

                &:nth-of-type(3){
                    background: linear-gradient(to bottom, #fff 0%,#2867b2 100%);
                    background-size: 100% 400%;
                }

                &:last-of-type {
                    background: linear-gradient(to top, #feda77 0%, #e51804 8%, #9510b8 16%, #515bd4 24%, #eddcc8 32%);
                    background-size: 100% 400%;
                }

                &:hover {
                    background-position: center bottom;
                }

                a {
                    height: 85%;
                    width: 85%;
                }

                img {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

    .bottom {
        width: 30%;
        margin-top: 2.5rem;
        padding-top: 2.5rem;
        border-top: 1px solid white;
        font-size: 1.6rem;
        color: #ebebeb;
        text-align: center;
    }
`

export default StyledFooter;
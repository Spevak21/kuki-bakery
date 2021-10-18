import StyledHeader from "./StyledHeader";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import videoMp4 from '../../videos/bg_video-low.mp4';
import videoWebm from '../../videos/bg_video-low.webm';
import logo from '../../images/logo-header.png';
import logoBitten from '../../images/logo-header-bitten.png';

const Header = ({user}) => {

    const [isBitten, setIsBitten] = useState(false);

    const history = useHistory();

    const bite = () => {
        setIsBitten(prev => !prev);

        setTimeout(() => {
            if(user) {
                history.push('/order');
            }else {
                history.push('/login');
            }
            setIsBitten(prev => !prev);
        }, 1200);
    }

    useEffect(() => {
        let mounted = true;
        if(!mounted) {
            bite();
        }
        return () => {mounted = false};
    })

    return (

        <StyledHeader>
            <div>
                <video disablePictureInPicture autoPlay muted loop>
                    <source src={videoMp4} type="video/mp4" />
                    <source src={videoWebm} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
            
            <div>
                <img src={isBitten?logoBitten:logo} alt="Kuki logo" className={isBitten?'rotate-once':''}/>
                <div>
                    <h1>Kuki</h1>
                    <h2>The most delicious cookie you will ever taste!</h2>
                    <button onClick={() => bite()}>Grab a bite</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 219"><path fill="#eabb72" fillOpacity="1" d="M 0 200 Q 40 160 120 160 Q 200 80 360 120 Q 480 40 600 120 Q 720 40 840 120 Q 960 40 1080 120 Q 1240 80 1320 160 Q 1400 160 1440 200 L 1440 240 L 0 240 L 0 200"></path></svg>
        </StyledHeader>

    );
}
 
export default Header;
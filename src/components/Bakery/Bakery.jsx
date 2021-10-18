import StyledBakery from "./StyledBakery";

import bakery from '../../images/bakery/bakery.png';
import shelf from '../../images/bakery/shelf.png';
import basketChoco from '../../images/bakery/basket-choco.png';
import basketBerry from '../../images/bakery/basket-berry.png';
import basketRaisin from '../../images/bakery/basket-raisin.png';
import curtainLeft from '../../images/bakery/curtain-left.png';
import curtainRight from '../../images/bakery/curtain-right.png';
import signOpen from '../../images/bakery/sign-open.png';
import signClosed from '../../images/bakery/sign-closed.png';
import { useState, useEffect } from "react";

const Bakery = () => {

    const [control, setControl] = useState(false);

    useEffect(() => {
        let mounted = true;

        if(mounted === true) {
            window.addEventListener('scroll', () => inViewPort(document.querySelector('.bakery-el')));
        }
        return () => {mounted = false};
    }, []);

    const inViewPort = (element) => {
        if(control === false){
            if(element !== undefined && element !== null) {
                let rect = element.getBoundingClientRect();
                if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                    setControl(true);
                }
            }
        }
    }
    

    return (

        <StyledBakery control = {control} className="bakery-el">
            <img src={bakery} alt="Bakery" className="bakery"/>
            <img src={shelf} alt="Shelf" className="shelf"/>
            <div className="baskets">
                <img src={basketChoco} alt="Basket chocolate" className={control?'slide-basket1':''}/>
                <img src={basketBerry} alt="Basket blueberry" className={control?'slide-basket2':''}/>
                <img src={basketRaisin} alt="Basket raisin" className={control?'slide-basket3':''}/>
            </div>
            <div className="curtains">
                <img src={curtainLeft} alt="Left curtain" className={control?'slide-right':''}/>
                <img src={curtainRight} alt="Right curtain" className={control?'slide-left':''}/>
            </div>
            <div className="sign" id={control?'tilt-sign':''}>
                <div className="sign__side sign__side--front" id={control?'flip-front':''}>
                    <img src={signClosed} alt="Sign closed" />
                </div>
                <div className="sign__side sign__side--back" id={control?'flip-back':''}>
                    <img src={signOpen} alt="Sign open" />
                </div>
            </div>
        </StyledBakery>

    );
}
 
export default Bakery;
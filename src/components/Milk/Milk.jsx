import StyledMilk from "./StyledMilk";

import board from '../../images/ingredients/wood-board.png';
import churn from '../../images/ingredients/milk-churn.png';
import { useState, useEffect } from "react";

const Milk = () => {

    const [control, setControl] = useState(false);

    useEffect(() => {
        let mounted = true;

        if(mounted === true) {
            window.addEventListener('scroll', () => inViewPort(document.querySelector('.milk-el')));
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

        <StyledMilk className="milk-el">
            <img src={board} alt="Wood board" className="board"/>
            <div className="milk" id={control?'milk-fill':''}></div>
            <img src={churn} alt="Milk churn" className="churn"/>
        </StyledMilk>

    );
}
 
export default Milk;
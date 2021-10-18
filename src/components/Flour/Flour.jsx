import StyledFlour from "./StyledFlour";

import background from '../../images/ingredients/grains-bg.png';
import left from '../../images/ingredients/grain-left.png';
import right from '../../images/ingredients/grain-right.png';
import { useState, useEffect } from "react";

const Flour = () => {

    const [control, setControl] = useState(false);

    useEffect(() => {
        let mounted = true;

        if(mounted === true) {
            window.addEventListener('scroll', () => inViewPort(document.querySelector('.field-el')));
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

        <StyledFlour className="field-el">
            <img src={background} alt="Wheat field" className="wheat-field"/>
            <img src={left} alt="Grains" className="grain-left" id={control?'rotate-right':''}/>
            <img src={right} alt="Grains" className="grain-right" id={control?'rotate-left':''}/>
        </StyledFlour>

    );
}
 
export default Flour;
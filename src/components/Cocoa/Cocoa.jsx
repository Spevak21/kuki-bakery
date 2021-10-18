import StyledCocoa from "./StyledCocoa";

import leaves from '../../images/ingredients/cocoa-bg.png';
import branch from '../../images/ingredients/branch.png';
import fruit1 from '../../images/ingredients/fruit-1.png';
import fruit2 from '../../images/ingredients/fruit-2.png';
import fruit2Cover from '../../images/ingredients/fruit-2-cover.png';
import fruit3 from '../../images/ingredients/fruit-3.png';
import leaf1 from '../../images/ingredients/leaf-1.png'
import leaf2 from '../../images/ingredients/leaf-2.png'
import leaf3 from '../../images/ingredients/leaf-3.png'
import { useState, useEffect } from "react";


const Cocoa = () => {

    const [control, setControl] = useState(false);

    useEffect(() => {
        let mounted = true;

        if(mounted === true) {
            window.addEventListener('scroll', () => inViewPort(document.querySelector('.cocoa-el')));
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

        <StyledCocoa className="cocoa-el">
            <div className="whole-cocoa" id={control?'rotate-branch':''}>
                <img src={branch} alt="Cocoa branch" className="cocoa-branch" />
                <img src={fruit1} alt="Cocoa fruit" className="cocoa-fruit-1" id={control?'shake-fruit':''} />
                <div className="cocoa-fruit-2" id={control?'shake-fruit':''}>
                    <img src={fruit2} alt="Open cocoa fruit" className="cocoa-fruit-open" />
                    <img src={fruit2Cover} alt="Cover of cocoa fruit" className="cocoa-fruit-cover" id={control?'hide-cover':''} />
                </div>
                <img src={fruit3} alt="Cocoa fruit" className="cocoa-fruit-3" id={control?'shake-fruit':''} />

                <img src={leaf1} alt="Cocoa leaf" className="cocoa-leaf-1" id={control?'shake-leaf':''} />
                <img src={leaf2} alt="Cocoa leaf" className="cocoa-leaf-2" id={control?'shake-leaf':''} />
                <img src={leaf3} alt="Cocoa leaf" className="cocoa-leaf-3" id={control?'shake-leaf':''} />
            </div>
            <img src={leaves} alt="Cocoa Leaves" className="cocoa-leaves" />
        </StyledCocoa>
        
    );
}
 
export default Cocoa;
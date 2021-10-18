// import { useEffect, useState } from "react";
import PackageCard from "../PackageCard/PackageCard";
import StyledPackaging from "./StyledPackaging";

const Packaging = ({allPackagings}) => {

    // console.log(packagings.length);
    // const [control, setControl] = useState(false);

    // useEffect(() => {
    //     if(packagings.length !== 0) {
    //         setControl(prev => !prev);
    //     }
    // }, [packagings])

    return (

        <StyledPackaging>
            <div>
                {allPackagings.map((p, i) => <PackageCard key = {p.id} pack = {p} control counter = {i}/>)}
            </div>
            <p>* Packaging can be chosen in shopping cart once you add your order.</p>
            <p>* Orders with the selected packaging different from the standard will be divided into the corresponding number of packages. The remaining quantity will be packed in standard (paper) packaging.</p>
        </StyledPackaging>

    );
}
 
export default Packaging;
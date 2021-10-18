// import { useEffect, useState } from "react";
import StyledPackageCard from "./StyledPackageCard";



const PackageCard = ({pack, control, counter}) => {
    // if(pack === null){

    //     console.log(pack);
    // }
    // const [control, setControl] = useState(false);
    // console.log(control)

    // useEffect(() => {
        
    //     setControl(true);
    // }, [pack])
    // console.log(pack.image)
    return (
        <StyledPackageCard className={control?'slide-in':''} counter = {counter}> 
            {/* <img src={process.env.PUBLIC_URL + pack.image} alt={pack.type}/> */}
            <img src={pack.image} alt={pack.type}/>

            <div>
                <h3>{pack.heading}</h3>
                <p>{pack.description}</p>
            </div>
        </StyledPackageCard>
    );
}
 
export default PackageCard;
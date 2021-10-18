import StyledPackageCard from "./StyledPackageCard";

const PackageCard = ({pack, control, counter}) => {
   
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
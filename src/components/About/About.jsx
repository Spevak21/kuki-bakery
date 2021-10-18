import StyledAbout from "./StyledAbout";
import Bakery from "../Bakery/Bakery";
import Flour from "../Flour/Flour";
import Milk from "../Milk/Milk";
import Cocoa from "../Cocoa/Cocoa";

const About = () => {
    return (

        <StyledAbout>
            <h2>About our little backery</h2>

            <div className="container">
                <div className="container-image">
                    <Bakery />
                </div>
                <div className="container-text">
                    <p>Founded in 1993 as a local bakery, we have been serving satisfied customers for more than 25 years. The family recipe that has been passed down from generation to generation has been perfected to meet the highest standards. It is still only a family bakery with only seven employees, but its impact is global at the ecological level. Thanks to the global connectivity of the 21st century, we have moved from the local to the global market and are sending cookies all over the world. We are proud that our cookie has found its way to the hearts of many people around the world.</p>
                </div>
            </div>

            <h2>What makes our cookie so special </h2>

            <div className="container">
                <div className="container-image">
                    <Flour />
                </div>
                <div className="container-text">
                    <h3>Flour</h3>
                    <p>Grain from which we get our flour comes from the fields of the Pannonian plain on the north part of Serbia in Vojvodina. We work with several small independent farmers whose main goal is to produce high quality organic grain on which no pesticides have been used. We value quality above all.</p>
                </div>
            </div>

            <div className="container">
                <div className="container-text">
                    <h3>Milk</h3>
                    <p>Cows from a local farm are grazing freely on pasture on more than 500 acres. High hygiene and healthy breeding conditions of these cows result in healthy milk with a high percentage of milk fat.</p>
                </div>
                <div className="container-image">
                    <Milk />
                </div>
            </div>
            
            <div className="container">
                <div className="container-image">
                    <Cocoa />
                </div>
                <div className="container-text">
                    <h3>Cocoa</h3>
                    <p>The cocoa powder we use to make our chocolate crumbs comes from the Dominican Republic, which is a world leader in ethical cocoa production. <span>“Fairtrade-certified”</span> cocoa production ensures it's enviromental sustainability and that farmers receive adequate compensation for their crops.</p>
                </div>
            </div>
        </StyledAbout>

    );
}
 
export default About;
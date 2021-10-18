import About from "../About/About";
import Ecology from "../Ecology/Ecology";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import StyledHome from "./StyledHome";

const Home = ({user}) => {
    return (

        <StyledHome>
            <Header user = {user}/>
            <About />
            <Ecology />
            <Footer />
        </StyledHome>

    );
}
 
export default Home;
import StyledFooter from "./StyledFooter";

import facebook from '../../images/contacts/facebook-icon.png';
import twitter from '../../images/contacts/twitter-icon.png';
import linkedIn from '../../images/contacts/linkedIn-icon.png';
import instagram from '../../images/contacts/instagram-icon.png';

const Footer = () => {
    return (

        <StyledFooter>
            <div className="top">
                <div className="info">
                    <p>Phone: (+381) 64 123 12 34</p>
                    <p>Address: Ulica Narodnog Kolaca 21, 21000 Novi Sad, Serbia</p>
                    <p>Email: kuki_bakery@kuki.com</p>
                </div>
                <div className="socials">
                    <div className="icon-container">
                        <a href="http://facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook icon" /></a>
                    </div>
                    <div className="icon-container">
                        <a href="http://twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter icon" /></a>
                    </div>
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/danijel-spevak-38190521b/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn icon" /></a>
                    </div>
                    <div className="icon-container">
                        <a href="http://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram icon" /></a>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p>Illustrated, designed and developed by Danijel Spevak</p>
            </div>
            
        </StyledFooter>

    );
}
 
export default Footer;
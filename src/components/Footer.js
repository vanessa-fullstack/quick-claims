import {Link} from 'react-router-dom';

const Footer = () => {
    return (
    <div className="pageFooter" >
        <h2><Link to="/">Speedy Claims</Link></h2>
        <ul className="nav">
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/information">Information</Link></li>
        <li><Link to="/termsofuse">Terms of Use</Link></li>
        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
        </ul>
    </div>);
}

export default Footer;
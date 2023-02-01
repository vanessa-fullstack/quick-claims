import {Link} from 'react-router-dom';

const Menu = () => {
    return (
    <div className="pageHeader" >
        <h1><Link to="/">Speedy Claims</Link></h1>
        <ul className="nav">
            <li><Link to="/newclaim">New Claim</Link></li>
            <li><Link to="/openclaim">Open Claims</Link></li>
            <li><Link to="/searchclaim">Search Claims</Link></li>
            {/* <li><Link to="/displayclaim">Display a Claim</Link></li> */}
        </ul>
    </div>);
}

export default Menu;
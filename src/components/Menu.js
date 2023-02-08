import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

const Menu = () => {

    
    const currentUser = useContext(UserContext);

    const logout = () => {
        currentUser.setUser({name:"", role:""});
    }

    return (
    <div className="pageHeader" >
        <h1><Link to="/">Speedy Claims</Link></h1>
        <ul className="nav">
            <li><Link to="/newclaim">New Claim</Link></li>
            <li><Link to="/openclaim">Open Claims</Link></li>
            <li><Link to="/searchclaim">Search Claims</Link></li>
            {/* <li><Link to="/login">Login</Link></li> */}
            {currentUser.user.name === "" && <li><Link to="/login">Log in</Link></li>}
            {currentUser.user.name !== "" && <li><button onClick={logout} >Log out</button></li>}
        </ul>
        {currentUser.user.name !== "" && <p>Current user : {currentUser.user.name}</p>}

    </div>);
}

export default Menu;
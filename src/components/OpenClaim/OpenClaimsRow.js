import {Link} from 'react-router-dom';

const OpenClaimsRow = (props) => {

    const openButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
    
    } 

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.policy_num}</td>
            <td>{props.customer_name}</td>
            <td>{props.status}</td>
            <td><Link to="/displayclaim"><button onClick={openButton}>Open </button></Link></td>

        </tr>
    )
}

export default OpenClaimsRow;
import {Link} from 'react-router-dom';

const SearchClaimsRow = (props) => {

    const openButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
    
    } 

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.policy_num}</td>
            <td>{props.customer_name}</td>
            <td>{props.status}</td>
            <td>{props.claim_type}</td>
            <td>{props.claim_date}</td>
            <td><Link to="/displayclaim"><button onClick={openButton}>Open </button></Link></td>
        </tr>
    )
}

export default SearchClaimsRow;
import {Link} from 'react-router-dom';

const SearchClaimsRow = (props) => {

    const openButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
    
    } 

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.policyNumber}</td>
            <td>{props.customerName}</td>
            <td>{props.status}</td>
            <td>{props.insuranceType}</td>
            <td>{props.claimDate}</td>
            <td><Link to="/displayclaim"><button onClick={openButton}>Open </button></Link></td>
        </tr>
    )
}

export default SearchClaimsRow;
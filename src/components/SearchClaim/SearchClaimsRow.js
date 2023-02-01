import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SearchClaimsRow = (props) => {
    const navigate = useNavigate();

    const openButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
        navigate('/displayclaim');
    } 

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.customerName}</td>
            <td>{props.status}</td>
            <td>{props.insuranceType}</td>
            <td>{props.date}</td>
            {/* <td><Link to="/displayclaim"><button onClick={openButton}>Open </button></Link></td> */}
            <td><button onClick={openButton}>Open </button></td>

        </tr>
    )
}

export default SearchClaimsRow;
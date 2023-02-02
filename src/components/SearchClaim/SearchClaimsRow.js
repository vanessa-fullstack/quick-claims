import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

//This is the read only rows
const SearchClaimsRow = (props, { handleEditClick }) => {
    const navigate = useNavigate();

    // const editButton = (event) => {
    //     console.log("Button has been clicked - this will populate a table and open it in the display claims component")
    //     // navigate('/displayclaim');
    //     event.preventDefault();
    //     // setEditClaimId(claim.id);
    // } 

    // const handleEditClick = (event) => {
    //     console.log("handleEditClick")
    // }

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.customerName}</td>
            <td>{props.status}</td>
            <td>{props.insuranceType}</td>
            <td>{props.date}</td>
            <td>{props.amount}</td>
            <td>{props.reason}</td>

            <td>
                <button 
                type="button"
                // onClick={Search.handleEditClick}>
                onClick={(event)=>props.handleEditClick(event, props)}>

                Edit
                </button>
            </td>


        </tr>
    )
}

export default SearchClaimsRow;
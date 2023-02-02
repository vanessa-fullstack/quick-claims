import { useState } from 'react';
import {Link} from 'react-router-dom';
import { getAllClaimsAxiosVersion } from '../../data/DataFunctions';

const OpenClaimsRow = (props) => {

    const editButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
    
    } 
    const [message, setMessage] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("loading...");
        getAllClaimsAxiosVersion()
            .then( response => {
                if (response.status === 200) {
                    setMessage("Open Claim with Policy Number " + response.data.id);
                }
                else {
                    setMessage("Something went wrong - status code was " + response.status);
                }
        
            } )
            .catch( error => {
                setMessage("Something went wrong - " + error);
            })
    }

    return (

        <tr>
            <td>{props.id}</td>
            {/* <td>{props.policyNumber}</td> */}
            <td>{props.customerName}</td>
            <td>{props.status}</td>
            <td>{props.insuranceType}</td>
            <td>{props.date}</td>
            <td>{props.amount}</td>
            <td>{props.reason}</td>
            <td>{props.description}</td>
            {/* <td><Link to="/displayclaim"><button onClick={editButton}>Edit </button></Link></td> */}

        </tr>
    )
}

export default OpenClaimsRow;
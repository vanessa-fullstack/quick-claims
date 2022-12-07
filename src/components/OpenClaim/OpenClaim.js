import { getAllClaimsInfo } from '../../data/DataFunctions';
import OpenClaimsRow from './OpenClaimsRow';
import '../stylesheet.css';
import { useState } from "react";


const OpenClaim = () => {

    const openClaims = getAllClaimsInfo();

    const allStatus = openClaims.map( claim => claim.status);
    const statusTypes = allStatus.filter(
        (status,index) => allStatus.indexOf(status) === index
    );

    const [selectedStatus, setSelectedStatus] = useState([statusTypes[0]]);

    const changeStatus = (event) => {
        const option = event.target.options.selectedIndex;
        setSelectedStatus(statusTypes[option]);
    }

    return <div className="container">
    <h1>Open Claims</h1>
    <div className="statusTypeSelector">
    Select Claim Status<select onChange={changeStatus} defaultValue="">

        {/* <option value="" disabled={true}> ---select---</option> */}

        {statusTypes.map (status => <option key={status} value={status}>{status}</option>)}
    </select>
    </div>
    <table className="transactionsTable">
        <thead>
        <tr>
            <th>ID</th>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
            {
            openClaims.map( (claim, index) => {
                return claim.status === selectedStatus && <OpenClaimsRow key={index} id={claim.id} 
                policy_num={claim.policy_num} customer_name={claim.customer_name} status={claim.status} />
            })
            }
        </tbody>
    </table>
</div>
}

export default OpenClaim;
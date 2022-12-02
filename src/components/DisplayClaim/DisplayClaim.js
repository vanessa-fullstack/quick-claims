import '../stylesheet.css';
import DisplayClaimsRow from './DisplayClaimRow';
import '../stylesheet.css';
import { getAllClaimsInfo } from '../../data/DataFunctions';
import { useState } from 'react';


const DisplayClaim = () => {


    return <div className="container">
    <h1>Display Claims</h1>
    <h3>This will show the detail for a selected claim when button is clicked on open claims</h3>
    <table className="transactionsTable">
        <thead>
        <tr>
            <th>ID</th>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Claim Type</th>
            <th>Claim Date</th>
            <th>Estimated Value</th>
            <th>Claim Reason</th>
            <th>Make</th>
            <th>Model</th>
            <th>Manufacture Year</th>
            <th>Incicdent Date</th>
            <th>Further Details</th>
        </tr>
        </thead>
        <tbody>
            {/* {
            displayClaims.map( (claim, index) => {
                return claim.status === selectedStatus && <DisplayClaimsRow key={index} id={claim.id} 
                policy_num={claim.policy_num} customer_name={claim.customer_name} status={claim.status} />
            })
            } */}
        </tbody>
    </table>

</div>
}

export default DisplayClaim;
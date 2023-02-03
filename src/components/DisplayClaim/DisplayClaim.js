// import '../stylesheet.css';
// import DisplayClaimsRow from './DisplayClaimRow';
// import '../stylesheet.css';
// import { getAllClaimsInfo } from '../../data/DataFunctions';
// import { useState } from 'react';

//--------THIS IS NO LONGER IN USE. NOW HAPPENS AS PART OF SEARCH PAGE-----------//

// const DisplayClaim = (props) => {


//     const allStatus = displayClaims.map( claim => claim.status);
//     const statusTypes = allStatus.filter(
//         (status,index) => allStatus.indexOf(status) === index
//     );

//     const [selectedStatus, setSelectedStatus] = useState([statusTypes[0]]);

//     const changeStatus = (event) => {
//         const option = event.target.options.selectedIndex;
//         setSelectedStatus(statusTypes[option]);
//     }


//     return <div className="container">
//     <h1>Edit Claims</h1>
//     <h3>This will show the detail for a selected claim when button is clicked on open claims</h3>
//     <table className="transactionsTable">
//         <thead>
//         <tr>
//             <th>Policy Number</th>
//             <th>Customer Name</th>
//             <th>Status</th>
//             <th>Insurance Type</th>
//             <th>Claim Date</th>
//             <th>Amount</th>
//             <th>Reason</th>
//             <th>Description</th>
//             <th>Make</th>
//             <th>Model</th>
//             <th>Manufacture Year</th>
//             <th>Address</th>
//             <th>Animal</th>
//             <th>Breed</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//             displayClaims.map( (claim, index) => {
//                 return claim.status === selectedStatus && <DisplayClaimsRow key={index} id={claim.id} 
//                 customerName={claim.customerName} status={claim.status} insuranceType={claim.insuranceType}/>
//             })
//             }
//             {/* {
//             displayClaims.map( (claim, index) => {
//                 return claim.status === selectedStatus && <DisplayClaimsRow key={index} id={claim.id} 
//                 policy_num={claim.policy_num} customer_name={claim.customer_name} status={claim.status} />
//             })
//             } */}
//         </tbody>
//     </table>

// </div>
// }

// export default DisplayClaim;
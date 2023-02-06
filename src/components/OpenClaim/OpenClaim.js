import { getAllClaims, getAllClaimsInfo } from '../../data/DataFunctions';
import OpenClaimsRow from './OpenClaimsRow';
import '../stylesheet.css';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import ClaimsSelector from '../ClaimsSelector';

//--THIS IS AN OLD FILE AND IS NOT BEING USED ANYMORE. PLEASE SEE OPENCLAIMSNEW.JS--//

const OpenClaim = (props) => {

//     useEffect( () => {
//         loadAllClaims();
//     } , []);

//     const [uniqueClaims, setUniqueClaims] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     const claimsInRedux = useSelector( state => state.claims);
//     const timeOfLastFetch = useSelector( state => state.lastFetch);
//     const dispatch = useDispatch();

//     const loadAllClaims = () => {

//         //do we have any claims in redux?
//         if(claimsInRedux.length > 0 && new Date().getTime() - timeOfLastFetch < 60000) {
//             console.log("using claims from redux");
//             setUniqueClaims(claimsInRedux);
//             setIsLoading(false);
//         }
        
//         //if we do, use them, if not, get them from rest + save them in redux
//         else {
//             console.log("getting claims via rest");
//             getAllClaims()
//             .then ( response => {
//                 if (response.status === 200) {
//                     setUniqueClaims(response.data);
//                     dispatch({type:"updateClaims", value : response.data});
//                     setIsLoading(false);
//                 }
//                 else {
//                     console.log("something went wrong");
//                 }
//             })
//             .catch ( error => {
//                 console.log("something went wrong", error)
//             })
//         }

//         if (props.value != null) {
//             setSelectedClaims(props.value);
//         }
//     }

//     const [selectedClaims, setSelectedClaims] = useState("");

//     const changeClaims = (event) => {
//         const claims = event.target.value;
//         props.changeClaims(claims);
//     }

//     return (<div className="transactionsClaimsSelector">
//             <ClaimsSelector changeClaims={changeClaims}  />
//     Select claims: <select onChange={changeClaims} defaultValue={selectedClaims}>
//         <option value="" disabled={true}> ---select---</option>
//         {uniqueClaims.map (claims => <option key={claims} value={claims}>{claims}</option>)}
//     </select>
// </div>)
// }



    const openClaims = getAllClaimsInfo();//change to database call

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
    <h2>Use the drop down menu available to select the status of the claims</h2>
    <div className="statusTypeSelector">
    {/* <ClaimsSelector changeStatus={changeStatus}  /> */}
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
            <th>Claim Type</th>
        </tr>
        </thead>
        <tbody>
            {
            openClaims.map( (claim, index) => {
                return claim.status === selectedStatus && <OpenClaimsRow key={index} id={claim.id} 
                policy_num={claim.policy_num} customer_name={claim.customer_name} status={claim.status} claim_type={claim.claim_type}/>
            })
            }
        </tbody>
    </table>
</div>
}

export default OpenClaim;
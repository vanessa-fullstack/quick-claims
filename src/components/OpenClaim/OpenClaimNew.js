import { getAllClaimsAxiosVersion, getAllClaimsForName } from '../../data/DataFunctions';
import OpenClaimsRow from './OpenClaimsRow';
import '../stylesheet.css';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";


const OpenClaim = (props) => {

    const [openClaims, setOpenClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        //loadStatus();
        loadData();
    }, [] );

    useEffect( () => {
        if(props.searchTerm !== ""){
            setIsLoading(true);
            getAllClaimsForName(props.searchTerm)
            .then( response => {
                setOpenClaims(response.data);
                setIsLoading(false);
            })
            .catch( error => {
                console.log("something went wrong ", error);
            })
            // console.log("searching for ", props.searchTerm);
        }
    }, [props.searchTerm] );

    const loadData= () =>{
        
        getAllClaimsAxiosVersion()
        .then(response =>{
            if (response.status === 200){
                console.log("everything is ok");
                setIsLoading(false);
                setOpenClaims(response.data);

            }
            else{
                console.log("something went wrong ", response.status)
            }
        })
        .catch( error => {
            console.log("Something went wrong ", error);
        })
    }


    const allStatus = openClaims.map( claim => claim.status);

    const uniqueStatus = allStatus.filter((status, index) => allStatus.indexOf(status) === index);
    console.log(uniqueStatus);

    const [selectedClaim, setSelectedClaim] = useState(uniqueStatus[0]);
    const changeClaimStatus = (event) => {
        const option = event.target.options.selectedIndex;
        setSelectedClaim(uniqueStatus[option]);
    }


    return <div className="container">
    <h1>Open Claims</h1>
    <h2>Use the drop down menu available to select the status of the claims</h2>
    {!isLoading && props.searchTerm === "" }
    {!isLoading && <div className="statusTypeSelector">
        Select status of claim:<select onChange={changeClaimStatus}>
            {/* <option value="" disabled="true">---select---</option> */}
            {uniqueStatus.map (status => <option key={status} value={status}>{status}</option>)}
        </select>
    </div>}
    {isLoading && <p style={{textAlign : "center"}}>Please wait... loading</p>}
    <table className="transactionsTable">
        <thead>
        <tr>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Insurance Type</th>
        </tr>
        </thead>
        <tbody>
            {
                openClaims.map( (claim, index) =>{
                    return claim.status === selectedClaim && <OpenClaimsRow key={index} id={claim.id}
                    customerName={claim.customerName} 
                    status={claim.status} insuranceType={claim.insuranceType} />
                } )
            }
        </tbody>
    </table>
</div>
}

export default OpenClaim;
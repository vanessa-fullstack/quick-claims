import { useEffect, useState, Fragment } from "react"
import { getAllClaimsAxiosVersion, getAllClaimsForName, getAllClaimsForPolicyNumber, updateExitingClaim } from "../../data/DataFunctions.js";
import { useNavigate } from 'react-router-dom';
import SearchClaimsRow from "./SearchClaimsRow";
import EditSearchRow from "./EditSearchRow";
import axios from "axios"

//THIS WAS A REDO AND CURRENTLY IN USE
const Search = ( props ) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const [message, setMessage] = useState();

    const [searchClaims, setSearchClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [editClaimFields, setEditClaimFields] = useState(searchClaims);
    const [editClaimId, setEditClaimId] = useState(null);
    const [editClaimData, setEditClaimData] = useState({
        id: "",
        customerName: "",
        status: "",
        insuranceType: "",
        date: "",
        amount: "",
        reason: ""
    });

    useEffect( () => {
        loadData();
    }, [] );

    useEffect( () => {
        if(searchTerm !== ""){
            setIsLoading(true);
            getAllClaimsForName(searchTerm)
            .then( response => {
                setSearchClaims(response.data);
                setIsLoading(false);
                console.log("names here")
            })
            .catch( error => {
                console.log("something went wrong ", error);
            })
        }
    }, [searchTerm] );

    const loadData= () =>{
        
        getAllClaimsAxiosVersion()
        .then(response =>{
            if (response.status === 200){
                console.log("everything is ok with axios call");
                setIsLoading(false);
                setSearchClaims(response.data);

            }
            else{
                console.log("something went wrong ", response.status)
            }
        })
        .catch( error => {
            console.log("Something went wrong ", error);
        })
    }

    
    const allCustomerName = searchClaims.map( claim => claim.customerName);
    const uniqueCustomerName = allCustomerName.filter((customerName, index) => allCustomerName.indexOf(customerName) === index);
    console.log(uniqueCustomerName);

    const [selectedClaim, setSelectedClaim] = useState(uniqueCustomerName[0]);
    const changeClaimName = (event) => {
        const option = event.target.options.selectedIndex;
        setSelectedClaim(uniqueCustomerName[option]);
        setTouched(true);
        //setSearchTerm(event.target.value);
        checkValidity(event.target.value);
    }


    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const handleChange = (event) =>{
        setTouched(true);
        setSearchTerm(event.target.value);
        checkValidity(event.target.value);
    }

    const doSearch = (event) => {
        event.preventDefault();
        console.log("Searching for", searchTerm )

    }


    const handleSaveClick = (event) => { 
        event.preventDefault();

        const editedClaim = {
            id: editClaimData.id,
            customerName: editClaimData.customerName,
            status: editClaimData.status,
            insuranceType: editClaimData.insuranceType,
            date: editClaimData.date,
            amount: editClaimData.amount,
            reason: editClaimData.reason,
            description: editClaimData.description
        }

        const newClaimDetails = [...editClaimFields];
        const index = editClaimFields.findIndex((claim) => claim.id === props.editClaimData.editClaimId);

        newClaimDetails[index] = editedClaim;
        setEditClaimFields(newClaimDetails);
        setEditClaimId(null);
    
        setMessage("Saving...");
        (console.log("updating existing quick claim ", editedClaim))
        updateExitingClaim(editedClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("Updated Quick Claim for " + response.data.customerName);
                }
                else {
                    console.log("Something went wrong in .then else ", response)
                    setMessage("Something went wrong with update - status code was " + response.status);
                }
        
            } )
            .catch( error => {
                console.log("Inside Catch block " + error)
                setMessage("Something went wrong on update - " + error);
            })

    }

    const handleEditClick = (event, props) => {
        console.log("button clicked ", props.customerName)
        event.preventDefault();
        setEditClaimId(props.customerName);

        const claimValues = {
            id: props.id,
            customerName: props.customerName,
            status: props.status,
            insuranceType: props.insuranceType,
            date: props.date,
            amount: props.amount,
            reason: props.reason,
            description: props.description
        }
        setEditClaimData(claimValues);
    }

    const handleEditClaimData = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newClaimData = { ...editClaimData };
        newClaimData[fieldName] = fieldValue;
        setEditClaimData(newClaimData);
    }

    const handleCancel = () => {
        setEditClaimId(null);
    }


    return <div className="searchcontainer">
        <form onSubmit={doSearch}>
        {/* <form> */}
        <h1>Search For a Claim</h1>
        <h2>Enter the customer name</h2>
        <ul>
            <li>Complete the following fields.</li>
            <li>When a suitable name is found, information will load in the table below.</li>
            <li>If the name is not in the database, no information will be found.</li>
            <li>To search for another name, click the 'X' in the text box.</li>
            <li>To edit a row click the 'Edit' button that appears.</li>
        </ul>
        <label htmlFor="customerName">Customer Name</label>
        <input onChange={handleChange} id="customerName" type="search"
        placeholder="e.g. Jane Doe" style={{border : valid ? "2px solid #000" : "2px solid #f00"}}
        className={ valid ? "" : "searchBoxError"}
        />
        {/* <button type="submit" disabled={!valid || !touched} onChange={changeClaimName} value={searchTerm} >
        Search</button> */}
        {isLoading && <p style={{textAlign : "center"}}>Please wait... loading</p>}
        <div className="editSearchRow">
        <table className="searchTransactionsTable">
        <thead>
        <tr>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Insurance Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Reason</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {
                searchClaims.map( (claim, index) =>{

                    return claim.customerName === selectedClaim || searchTerm !== "" &&
                    <Fragment>
                    {editClaimId === claim.customerName ? (
                        <EditSearchRow 
                        key={index} id={claim.id}
                        customerName={claim.customerName} 
                        status={claim.status} insuranceType={claim.insuranceType} 
                        date={claim.date} amount={claim.amount} reason={claim.reason}
                        description={claim.description}
                        editClaimData={editClaimData} handleEditClaimData={handleEditClaimData}
                        handleCancel={handleCancel} handleSaveClick={handleSaveClick}
                        />
                    ) : (
                        <SearchClaimsRow key={index} id={claim.id}
                        customerName={claim.customerName} 
                        status={claim.status} insuranceType={claim.insuranceType} 
                        date={claim.date} amount={claim.amount} reason={claim.reason}
                        description={claim.description} 
                        handleEditClick={handleEditClick}  />
                    )}
                    </Fragment>
                } )
            }
        </tbody>
        </table>
        {message} 
        </div>
        </form>
    </div>
}

export default Search;
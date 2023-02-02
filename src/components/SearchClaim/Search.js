import { useEffect, useState, Fragment } from "react"
import { getAllClaimsAxiosVersion, getAllClaimsForName, getAllClaimsForPolicyNumber } from "../../data/DataFunctions";
import { useNavigate } from 'react-router-dom';
import SearchClaimsRow from "./SearchClaimsRow";
import EditSearchRow from "./EditSearchRow";

//THIS WAS A REDO AND CURRENTLY IN USE
const Search = ( props ) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);

    const [searchClaims, setSearchClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const [editClaimId, setEditClaimId] = useState(null);

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

        const handleEditClick = (event, props) => {
        console.log("button clicked ", props.customerName)
        event.preventDefault();
        setEditClaimId(props.customerName);
    }

    return <div className="container">
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
        />
        {/* <button type="submit" disabled={!valid || !touched} onChange={changeClaimName} value={searchTerm} >
        Search</button> */}
        {isLoading && <p style={{textAlign : "center"}}>Please wait... loading</p>}
        <table className="transactionsTable">
        <thead>
        <tr>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Insurance Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Reason</th>
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
                        key={index}
                        customerName={claim.customerName} 
                        status={claim.status} insuranceType={claim.insuranceType} 
                        date={claim.date} amount={claim.amount} reason={claim.reason}
                        />
                    ) : (
                        <SearchClaimsRow key={index} id={claim.id}
                        customerName={claim.customerName} 
                        status={claim.status} insuranceType={claim.insuranceType} 
                        date={claim.date} amount={claim.amount} reason={claim.reason}
                        handleEditClick={handleEditClick}  />
                    )}

                        {/* <EditSearchRow 
                        key={index}
                        customerName={claim.customerName} 
                        status={claim.status} insuranceType={claim.insuranceType} 
                        date={claim.date} amount={claim.amount} reason={claim.reason}
                        />
                        <SearchClaimsRow key={index} id={claim.id}
                        customerName={claim.customerName} 
                        status={claim.status} insuranceType={claim.insuranceType} 
                        date={claim.date} amount={claim.amount} reason={claim.reason}
                        handleEditClick={handleEditClick}  /> */}

                    </Fragment>
                } )
            }
        </tbody>
        </table> 
        </form>
    </div>
}

export default Search;
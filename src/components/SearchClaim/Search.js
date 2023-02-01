import { useEffect, useState } from "react"
import { getAllClaimsAxiosVersion } from "../../data/DataFunctions";
import SearchClaimsRow from "./SearchClaimsRow";

//THIS WAS A REDO BUT NOT CURRENTLY USING
const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);

    const [searchClaims, setSearchClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        loadData();
    }, [] );

    const loadData= () =>{
        
        getAllClaimsAxiosVersion()
        .then(response =>{
            if (response.status === 200){
                console.log("everything is ok");
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

    return <div className="container">
        <form onSubmit={doSearch}>
        <h1>Search For a Claim</h1>
        <h2>Enter the policy number and customer name</h2>
        <ul>
            <li>Complete the following fields</li>
            <li>Click the "Search" button to search records</li>
        </ul>
        <label htmlFor="customerName">Customer Name</label>
        <input onChange={handleChange} value={searchTerm} id="customerName" type="text"
        placeholder="e.g. Jane Doe" style={{border : valid ? "2px solid #000" : "2px solid #f00"}}
        />
        <button type="submit" disabled={!valid || !touched}>Search</button>
        <table className="transactionsTable">
        <thead>
        <tr>
            <th>ID</th>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Insurance Type</th>
            <th>Date of Claim</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {
                searchClaims.map( (claim, index) =>{
                    return claim.customerName === selectedClaim && <SearchClaimsRow key={index} id={claim.id}
                    policyNumber={claim.policyNumber} customerName={claim.customerName} 
                    status={claim.status} insuranceType={claim.insuranceType} />
                } )
            }
        </tbody>
        </table> 
        </form>
    </div>
}

export default Search;
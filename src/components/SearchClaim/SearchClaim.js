import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { getAllClaimsAxiosVersion, getAllClaimsForName } from '../../data/DataFunctions';
import OpenClaimsRow from '../OpenClaim/OpenClaimsRow';

import '../stylesheet.css';

//---THIS WAS A FIRST ATTEMPT BUT NO LONGER IN USE. PLEASE SEE SEARCH.JS FOR CURRENT VERSION---//
const SearchClaim = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();

    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const handleChange = (event) =>{
        // setLocalSearchTerm(event.target.value);
        setSearchTerm(event.target.value);
        setTouched(true);
        checkValidity(event.target.value);
    }

    const doSearch = (event) => {
        event.preventDefault();
        //props.setSearchTerm(localSearchTerm);
        // navigate(`/search/${localSearchTerm}`);
        console.log("search term " , searchTerm);
    }

    const openButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
    } 

    const [displayClaims, setDisplayClaims] = useState([]);
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
                setDisplayClaims(response.data);
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
                console.log("everything is ok with Axios call");
                setIsLoading(false);
                setDisplayClaims(response.data);

            }
            else{
                console.log("something went wrong ", response.status)
            }
        })
        .catch( error => {
            console.log("Something went wrong ", error);
        })
    }


    const allCustomerNames = displayClaims.map( claim => claim.customerName);

    const uniqueCustomerName = allCustomerNames.filter((customerName, index) => allCustomerNames.indexOf(customerName) === index);
    console.log(" names ",uniqueCustomerName);

    const [selectedClaim, setSelectedClaim] = useState(uniqueCustomerName[0]);
    const changeClaimCustomerName = (event) => {
        const option = event.target.options.selectedIndex;
        setSelectedClaim(uniqueCustomerName[option]);
    }

    
    return (<div className="container">
    <form onSubmit={doSearch}>
        <h1>Search For a Claim</h1>
        <h2>Enter the policy number and customer name</h2>
        <ul>
            <li>Complete the following fields</li>
            <li>Click the "Search" button to search records</li>
        </ul>
        <p>
            <label htmlFor="customerName">Customer Name</label>
            <input onChange={handleChange} value={localSearchTerm} type="text" name="customerName" 
            id="customerName" placeholder="e.g. John Smith" 
            style={{border: valid ? "2px solid #000" : "2px solid #f00"}}
            className={valid ? "" : "searchBoxError"}
            />
        </p>
        {/* <Link to="/displayclaim"><button type="submit" disabled={!valid || !touched } onChange={changeClaimCustomerName} onClick={openButton}>Search</button></Link> */}
        <button type="submit" disabled={!valid || !touched } onChange={changeClaimCustomerName}>Search</button>
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
                displayClaims.map( (claim, index) =>{
                    return claim.customerName === selectedClaim && <OpenClaimsRow key={index} id={claim.id}
                    customerName={claim.customerName} 
                    status={claim.status} insuranceType={claim.insuranceType} />
                } )
            }
        </tbody>
    </table>

    </form>
</div>
    )
}

export default SearchClaim;
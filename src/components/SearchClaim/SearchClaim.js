import { useState } from 'react';
import { getAllClaimsInfo } from '../../data/DataFunctions';
import '../stylesheet.css';
import SearchClaimsRow from './SearchClaimsRow';

const SearchClaim = (props) => {

    const claims = getAllClaimsInfo();


    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);

    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const handleChange = (event) =>{
        props.setSearchTerm(event.target.value);
        setTouched(true);
        checkValidity(event.target.value);
    }

    const doSearch = (event) => {
        event.preventDefault();
        console.log("search term " ,props.searchTerm);
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
            <label htmlFor="policy_num">Policy Number</label>
            <input onChange={handleChange} value={props.searchTerm} type="text" name="policy_num" 
            id="policy_num" placeholder="e.g.129123456" 
            style={{border: valid ? "2px solid #000" : "2px solid #f00"}}
            />
        </p>
    {/* <p>
        <label htmlFor="customer_name">Customer Name</label>
        <input onChange={handleChange} value={searchTerm} type="text" name="customer_name" id="customer_name" 
        placeholder="e.g.John Smith" 
        //style={{border: valid ? "2px solid #000" : "2px solid #f00"}}
        />
    </p> */}
        <button type="submit" disabled={!valid || !touched }>Search</button>

    <table className="transactionsTable">
        <thead>
        <tr>
            <th>ID</th>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Claim Type</th>
            <th>Date of Claim</th>
            <th></th>
        </tr>
        </thead>
        {/* <tbody>
            {claims.map( (claim, index) => {
                return <SearchClaimsRow key={index} id={claim.id} policy_num={claim.policy_num}
                customer_name={claim.customer_name} status={claim.status} claim_type={claim.claim_type} claim_date={claim.claim_date}/>
            })}
        </tbody> */}
    </table> 
    </form>
</div>
    )
}

export default SearchClaim;
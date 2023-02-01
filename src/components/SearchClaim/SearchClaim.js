import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

import '../stylesheet.css';

const SearchClaim = (props) => {


    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();

    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const handleChange = (event) =>{
        setLocalSearchTerm(event.target.value);
        setTouched(true);
        checkValidity(event.target.value);
    }

    const doSearch = (event) => {
        event.preventDefault();
        props.setSearchTerm(localSearchTerm);
        navigate(`/search/${localSearchTerm}`);
        console.log("search term " , props.searchTerm);
    }

    const openButton = () => {
        console.log("Button has been clicked - this will populate a table and open it in the display claims component")
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
        <Link to="/displayclaim"><button type="submit" disabled={!valid || !touched } onClick={openButton}>Search</button></Link>
    </form>
</div>
    )
}

export default SearchClaim;
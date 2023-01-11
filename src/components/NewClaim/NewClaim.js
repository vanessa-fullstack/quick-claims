import { useReducer, useState } from 'react';
import { addNewClaim } from '../../data/DataFunctions';
import '../stylesheet.css';

const NewClaim = () => {

    const [message, setMessage] = useState();

    const hideInstructions = () => {
        const x = document.getElementById("list");
        if(x.style.display === "none"){
            x.style.display = "block";
            document.getElementById("instructions").innerText = "^To start a new claim";
        }
        else {
            x.style.display = "none";
            document.getElementById("instructions").innerText = ">To start a new claim";
        }
    }
    
    const hidePropertySection = () => {
        const x = document.getElementById("address");
        if(x.style.display === "none"){
            x.style.display = "block";
            document.getElementById("propSection").innerText = "^Property Insurance Claims Only";
        }
        else {
            x.style.display = "none";
            document.getElementById("propSection").innerText = ">Property Insurance Claims Only";
        }
    }

    const hideMotorSection = () => {
        const x = document.getElementById("motor");
        if(x.style.display === "none"){
            x.style.display = "block";
            document.getElementById("motorSection").innerText = "^Motor Insurance Claims Only";
        }
        else {
            x.style.display = "none";
            document.getElementById("motorSection").innerText = ">Motor Insurance Claims Only";
        }
    }

    const hidePetSection = () => {
        const x = document.getElementById("pet");
        if(x.style.display === "none"){
            x.style.display = "block";
            document.getElementById("petSection").innerText = "^Pet Insurance Claims Only";
        }
        else {
            x.style.display = "none";
            document.getElementById("petSection").innerText = ">Pet Insurance Claims Only";
        }
    }
    

    const initialNewClaimState = {customer_name : "", insuranceType : "",
    claim_date : new Date().toISOString().slice(0,10), estimated_value : "",
    claim_reason : "", further_details : ""}

    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

    const handleChange = (event) => {
        dispatch({field : event.target.id, value : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        addNewClaim(newClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("New transaction added with id " + response.data.id);
                }
                else {
                    setMessage("Something went wrong - status code was " + response.status);
                }
        
            } )
            .catch( error => {
                setMessage("Something went wrong - " + error);
            })
    }

    return (
            <div className="container">
            <form className="container"  onSubmit={handleSubmit} >
            <h1>Register a new claim</h1>
            <h2 id="instructions" onClick={hideInstructions}>&gt;To start a new claim</h2>
            <ul id="list">
                <li>Please complete the following fields marked with an *</li>
                <li>Only complete the fields neccesary to your claim e.g. if claim is for property, complete the property section</li>
                <li>Select "Register Claims" to complete</li>
            </ul>
            <h2>Customer Information</h2>
            <p>
                <label htmlFor="customer_name">Customer Name *</label>
                <input type="text" name="customer_name" id="customer_name" placeholder="e.g.John Smith" value={newClaim.customer_name} onChange={handleChange}/>
            </p>
            <p>
                <label htmlFor="insuranceType">Insurance Type *</label>
                <select name="insuranceType" id="insuranceType">
                <option value="PleaseSelect" disabled selected>Please Select</option>
                <option value="Property">Property</option>
                <option value="Motor">Motor</option>
                <option value="Pet">Pet</option>
                </select>
            </p>
            <p>
                <label htmlFor="claim_date">Claim Start Date *</label>
                <input type="date" name="claim_date" id="claim_date" value={newClaim.claim_date} onChange={handleChange}/>
            </p>
            <p>
                <label htmlFor="estimated_value">Estimated Amount of Claim *</label>
                <input type="text" name="estimated_value" id="estimated_value" placeholder="e.g.$250" value={newClaim.estimated_value} onChange={handleChange}/>
            </p>
            <p>
                <label htmlFor="claim_reason">Reason For Claim *</label>
                <input type="text" name="claim_reason" id="claim_reason" placeholder="Brief explanation" value={newClaim.claim_reason} onChange={handleChange}/>
            </p>
            <p>
                <label htmlFor="further_details">Description of Incident *</label>
                <input type="text" name="further_details" id="further_details" placeholder="More Details" value={newClaim.further_details} onChange={handleChange}/>
            </p>

            <div className='property'>
                <h3 id="propSection" onClick={hidePropertySection}>&gt;Property Insurance Claims Only</h3>
                <ul id="address">
                <label id="address" htmlFor="address">Address of Property Affected</label>
                <input type="text" name="address" id="addressInput" placeholder="e.g. 123 Main Street"/>
                </ul>
            </div>

            <div className='motor' >
                <h3 id="motorSection" onClick={hideMotorSection}>&gt;Motor Insurance Claims Only</h3>
                <ul id="motor">
                <label htmlFor="make">Make of Vehicle</label>
                <input type="text" name="make" id="make" placeholder="e.g. Ford"/>
                <p>
                <label htmlFor="model">Model of Vehicle</label>
                <input type="text" name="model" id="model" placeholder="e.g. Fiesta"/>
                </p>

                <p>
                <label htmlFor="manufacture_year">Year of Manufacture</label>
                <input type="text" name="manufacture_year" id="manufacture_year" placeholder="e.g. 2020"/>
                </p>
                </ul>
                
            </div>
            
            <div>
                <h3 id="petSection" onClick={hidePetSection}>&gt;Pet Insurance Claims Only</h3>
                <ul id="pet">
                <label htmlFor="animal">Type of Animal</label>
                <input type="text" name="animal" id="animal" placeholder="e.g. Dog or Cat"/>

                <p>
                <label htmlFor="breed">Breed of Animal</label>
                <input type="text" name="breed" id="breed" placeholder="e.g. Golden Retriever"/>
                </p>
                </ul>
            </div>
            <p>
                <button>Register Claim</button>
                <div>{message}</div>
            </p>
        </form>
        </div>

    )
}

export default NewClaim;

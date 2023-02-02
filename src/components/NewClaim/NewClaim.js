import { useReducer, useState } from 'react';
import { addNewClaim } from '../../data/DataFunctions';
import ClaimsSelector from '../ClaimsSelector';
import '../stylesheet.css';

const NewClaim = () => {

    const [message, setMessage] = useState();
    const [valid, setValid] = useState(true);

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
    
    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const initialNewClaimState = {customerName : "", insuranceType : "",
    date : new Date().toISOString().slice(0,10), amount : "",
    reason : "", description : "", status : "Active", address : "", makeOfVehicle : "", modelOfVehicle : "",
    yearOfManufacture : "", animal : "", breed : ""}

    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

    const handleChange = (event) => {
        dispatch({field : event.target.id, value : event.target.value});
        checkValidity(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        addNewClaim(newClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("New transaction added with Policy Number " + response.data.id);
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
                <label htmlFor="customerName">Customer Name *</label>
                <input type="text" name="customerName" id="customerName" placeholder="e.g.John Smith" value={newClaim.customerName} onChange={handleChange}
                style={{border : valid ? "2px solid #000" : "2px solid #f00"}}/>
            </p>
            <p>
                <label htmlFor="insuranceType">Insurance Type *</label>
                <input type="text" id="insuranceType" placeholder='e.g.Car, Home or Pet' value={newClaim.insuranceType}
                onChange={handleChange} style={{border : valid ? "2px solid #000" : "2px solid #f00"}} />
            </p>
            <p>
                <label htmlFor="date">Claim Start Date *</label>
                <input type="date" name="date" id="date" value={newClaim.date} onChange={handleChange}
                style={{border : valid ? "2px solid #000" : "2px solid #f00"}}/>
            </p>
            <p>
                <label htmlFor="amount">Estimated Amount of Claim *</label>
                <input type="text" name="amount" id="amount" placeholder="e.g.$250" value={newClaim.amount}
                onChange={handleChange} style={{border : valid ? "2px solid #000" : "2px solid #f00"}}/>
            </p>
            <p>
                <label htmlFor="reason">Reason For Claim *</label>
                <input type="text" name="reason" id="reason" placeholder="Brief explanation" value={newClaim.reason}
                onChange={handleChange} style={{border : valid ? "2px solid #000" : "2px solid #f00"}}/>
            </p>
            <p>
                <label htmlFor="description">Description of Incident *</label>
                <input type="text" name="description" id="description" placeholder="More Details" value={newClaim.description}
                onChange={handleChange} style={{border : valid ? "2px solid #000" : "2px solid #f00"}}/>
            </p>
            <p>
                <label htmlFor="status">Status</label>
                <input type="text" name="status" id="status" placeholder="Active" value={newClaim.status} onChange={handleChange}/>
            </p>

            <div className='property'>
                <h3 id="propSection" onClick={hidePropertySection}>&gt;Property Insurance Claims Only</h3>
                <ul id="property">
                <label htmlFor="address">Address of Property Affected</label>
                <input type="text" name="address" id="address" placeholder="e.g. 123 Main Street" value={newClaim.address} onChange={handleChange}/>
                </ul>
            </div>

            <div className='motor' >
                <h3 id="motorSection" onClick={hideMotorSection}>&gt;Motor Insurance Claims Only</h3>
                <ul id="motor">
                <label htmlFor="makeOfVehicle">Make of Vehicle</label>
                <input type="text" name="makeOfVehicle" id="makeOfVehicle" placeholder="e.g. Ford" value={newClaim.makeOfVehicle} onChange={handleChange}/>
                <p>
                <label htmlFor="modelOfVehicle">Model of Vehicle</label>
                <input type="text" name="modelOfVehicle" id="modelOfVehicle" placeholder="e.g. Fiesta" value={newClaim.modelOfVehicle} onChange={handleChange}/>
                </p>

                <p>
                <label htmlFor="yearOfManufacture">Year of Manufacture</label>
                <input type="text" name="yearOfManufacture" id="yearOfManufacture" placeholder="e.g. 2020" value={newClaim.yearOfManufacture} onChange={handleChange}/>
                </p>
                </ul>
                
            </div>
            
            <div>
                <h3 id="petSection" onClick={hidePetSection}>&gt;Pet Insurance Claims Only</h3>
                <ul id="pet">
                <label htmlFor="animal">Type of Animal</label>
                <input type="text" name="animal" id="animal" placeholder="e.g. Dog or Cat" value={newClaim.animal} onChange={handleChange}/>

                <p>
                <label htmlFor="breed">Breed of Animal</label>
                <input type="text" name="breed" id="breed" placeholder="e.g. Golden Retriever" value={newClaim.breed} onChange={handleChange}/>
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

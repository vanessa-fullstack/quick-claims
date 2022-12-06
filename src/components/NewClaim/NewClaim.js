import '../stylesheet.css';

const NewClaim = () => {

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

    return (
            <div className="container">
            <form className="container" >
            <h1>Register a new claim</h1>
            <h2 id="instructions" onClick={hideInstructions}>&gt;To start a new claim</h2>
            <ul id="list">
                <li>Please complete the following fields marked with an *</li>
                <li>Only complete the fields neccesary to your claim e.g. if claim is for property, expand and complete the property section</li>
                <li>Select "Register Claims" to complete</li>
            </ul>
            <h2>Customer Information</h2>
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
                <label htmlFor="customer_name">Customer Name *</label>
                <input type="text" name="customer_name" id="customer_name" placeholder="e.g.John Smith"/>
            </p>
            <p>
                <label htmlFor="claim_date">Claim Start Date *</label>
                <input type="date" name="claim_date" id="claim_date"/>
            </p>
            <p>
                <label htmlFor="estimated_value">Estimated Amount of Claim *</label>
                <input type="text" name="estimated_value" id="estimated_value" placeholder="e.g.$250"/>
            </p>
            <p>
                <label htmlFor="claim_reason">Reason For Claim *</label>
                <input type="text" name="claim_reason" id="claim_reason" placeholder="Brief explanation"/>
            </p>
            <p>
                <label htmlFor="further_details">Description of Incident *</label>
                <input type="text" name="further_details" id="further_details" placeholder="More Details"/>
            </p>
            <div className='property'>
                <h3>&gt;Property Insurance Claims Only</h3>
                <label id="address" htmlFor="address">Address of Property Affected</label>
                <input type="text" name="address" id="addressInput" placeholder="e.g. 123 Main Street"/>

            </div>
            <div className='motor'>

                <h3>&gt;Motor Insurance Claims Only</h3>
                <label htmlFor="make">Make of Vehicle</label>
                <input type="text" name="make" id="make" placeholder="e.g. htmlFord"/>
                <p>
                <label htmlFor="model">Model of Vehicle</label>
                <input type="text" name="model" id="model" placeholder="e.g. Fiesta"/>
                </p>
                <p>
                <label htmlFor="manufacture_year">Year of Manufacture</label>
                <input type="text" name="manufacture_year" id="manufacture_year" placeholder="e.g. 2020"/>
                </p>
            </div>
            <div className='pet'>

                <h3>&gt;Pet Insurance Claims Only</h3>
                <label htmlFor="animal">Type of Animal</label>
                <input type="text" name="animal" id="animal" placeholder="e.g. Dog or Cat"/>
                <p>
                <label htmlFor="breed">Breed of Animal</label>
                <input type="text" name="breed" id="breed" placeholder="e.g. Golden Retriever"/>
                </p>
            </div>
            <p>
                <button>Register Claim</button>
            </p>
        </form>
        </div>

    )
}

export default NewClaim;

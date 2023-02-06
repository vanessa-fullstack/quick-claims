import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllClaimsAxiosVersion, getStatuses } from "../data/DataFunctions";


//----THIS IS NOT CURRENTLY IN USE---//
const ClaimsSelector = (props) => {

    useEffect( () => {
        loadClaims();
    } , []);

    const [uniqueClaims, setuniqueClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const claimsInRedux = useSelector( state => state.countries);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();

    const loadClaims = () => {

        //do we have any countries in redux?
        if(claimsInRedux.length > 0 && new Date().getTime() - timeOfLastFetch < 60000) {
            console.log("using claims from redux");
            setuniqueClaims(claimsInRedux);
            setIsLoading(false);
        }
        
        //if we do, use them, if not, get them from rest + save them in redux
        else {
            console.log("getting claims via rest");
            getStatuses()
            .then ( response => {
                if (response.status === 200) {
                    setuniqueClaims(response.data);
                    dispatch({type:"update Status of Claims", value : response.data});
                    setIsLoading(false);
                }
                else {
                    console.log("something went wrong");
                }
            })
            .catch ( error => {
                console.log("something went wrong", error)
            })
        }

        if (props.value != null) {
            setSelectedClaims(props.value);
        }
    }

    const [selectedClaims, setSelectedClaims] = useState("");

    const changeClaims = (event) => {
        const claims = event.target.value;
        props.changeClaims(claims);
    }


    return (<div className="transactionsClaimsSelector">
    Select claims: <select onChange={changeClaims} defaultValue={selectedClaims}>
        <option value="" disabled={true}> ---select---</option>
        {uniqueClaims.map (claims => <option key={claims} value={claims}>{claims}</option>)}
    </select>
</div>)

}

export default ClaimsSelector;
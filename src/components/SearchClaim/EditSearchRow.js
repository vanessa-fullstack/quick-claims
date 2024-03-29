import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//This is the edit rows in search claims page
const EditSearchRow = (props) => {
 
    return ( 
        <tr>
            <td>
                <input type="text" placeholder="Cannot update..." name="id" disabled={true}
                value={props.editClaimData.id}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Name..." name="customerName" 
                value={props.editClaimData.customerName} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Status..." name="status"
                value={props.editClaimData.status} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Insurance Type..." name="insuranceType"
                value={props.editClaimData.insuranceType} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Date..." name="date"
                value={props.editClaimData.date} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Amount..." name="amount"
                value={props.editClaimData.amount} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Reason..." name="reason"
                value={props.editClaimData.reason} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Description..." name="description"
                value={props.editClaimData.description} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Car Make if needed..." name="makeOfVehicle"
                value={props.editClaimData.makeOfVehicle} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Car Model if needed..." name="modelOfVehicle"
                value={props.editClaimData.modelOfVehicle} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Car Year if needed..." name="yearOfManufacture"
                value={props.editClaimData.yearOfManufacture} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update address if needed..." name="address"
                value={props.editClaimData.address} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update animal if needed..." name="animal"
                value={props.editClaimData.animal} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <input type="text" placeholder="Update breed if needed..." name="breed"
                value={props.editClaimData.breed} onChange={props.handleEditClaimData}></input>
            </td>
            <td>
                <button type="submit" onClick={props.handleSaveClick}>Save</button>
                <button type="submit" onClick={props.handleCancel}>Cancel</button>
            </td>

        </tr>
        
    )
}

export default EditSearchRow;
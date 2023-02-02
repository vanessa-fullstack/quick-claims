import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//This is the edit rows in search claims page
const EditSearchRow = (props) => {
 
    return (
        <tr>
            <td>
                <input type="text" placeholder="Cannot update..." name="id" disabled={true}></input>
            </td>
            <td>
                <input type="text" placeholder="Update Name..." name="customerName"></input>
            </td>
            <td>
                <input type="text" placeholder="Update Status..." name="status"></input>
            </td>
            <td>
                <input type="text" placeholder="Update Insurance Type..." name="insuranceType"></input>
            </td>
            <td>
                <input type="text" placeholder="Update Date..." name="date"></input>
            </td>
            <td>
                <input type="text" placeholder="Update Amount..." name="amount"></input>
            </td>
            <td>
                <input type="text" placeholder="Update Reason..." name="reason"></input>
            </td>
        </tr>
    )
}

export default EditSearchRow;
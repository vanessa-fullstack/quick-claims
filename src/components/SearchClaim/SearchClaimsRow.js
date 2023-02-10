
//This is the read only rows
const SearchClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.customerName}</td>
            <td>{props.status}</td>
            <td>{props.insuranceType}</td>
            <td>{props.date}</td>
            <td>{props.amount}</td>
            <td>{props.reason}</td>
            <td>{props.description}</td>
            <td>{props.address}</td>
            <td>{props.makeOfVehicle}</td>
            <td>{props.modelOfVehicle}</td>
            <td>{props.yearOfManufacture}</td>
            <td>{props.animal}</td>
            <td>{props.breed}</td>
            <td>
                <button 
                type="button"
                onClick={(event)=>props.handleEditClick(event, props)}>
                Edit
                </button>
            </td>


        </tr>
    )
}

export default SearchClaimsRow;
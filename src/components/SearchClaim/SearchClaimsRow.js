
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
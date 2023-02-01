const DisplayClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            {/* <td>{props.policy_num}</td> */}
            <td>{props.customerName}</td>
            <td>{props.status}</td>
            <td>{props.insuranceType}</td>
            <td>{props.date}</td>
            <td>{props.amount}</td>
            <td>{props.reason}</td>
            <td>{props.description}</td>
            <td>{props.makeOfVehicle}</td>
            <td>{props.modelOfVehicle}</td>
            <td>{props.yearOfManufacture}</td>
            <td>{props.address}</td>
            <td>{props.animal}</td>
            <td>{props.breed}</td>

        </tr>
    )
}

export default DisplayClaimsRow;
const DisplayClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.policy_num}</td>
            <td>{props.customer_name}</td>
            <td>{props.status}</td>
            <td>{props.claim_type}</td>
            <td>{props.claim_date}</td>
            <td>{props.estimated_value}</td>
            <td>{props.claim_reason}</td>
            <td>{props.make}</td>
            <td>{props.model}</td>
            <td>{props.manufacture_year}</td>
            <td>{props.incident_date}</td>
            <td>{props.further_details}</td>
        </tr>
    )
}

export default DisplayClaimsRow;
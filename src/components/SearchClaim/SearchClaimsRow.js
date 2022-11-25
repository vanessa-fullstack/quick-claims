const SearchClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.policy_num}</td>
            <td>{props.customer_name}</td>
            <td>{props.status}</td>
            <td>{props.claim_type}</td>
            <td>{props.claim_date}</td>
            <td><button>Open</button></td>
        </tr>
    )
}

export default SearchClaimsRow;
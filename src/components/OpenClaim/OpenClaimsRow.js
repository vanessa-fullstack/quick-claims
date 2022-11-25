const OpenClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.policy_num}</td>
            <td>{props.customer_name}</td>
            <td>{props.status}</td>
            <td><button>Open</button></td>
        </tr>
    )
}

export default OpenClaimsRow;
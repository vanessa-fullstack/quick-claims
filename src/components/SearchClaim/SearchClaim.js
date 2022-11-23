import '../stylesheet.css';

const SearchClaim = () => {

    return <div className="container">
    <h1>Search For a Claim</h1>
    <h2>Enter the policy number and customer name</h2>
    <ul>
        <li>Complete the following fields</li>
        <li>Click the "Search" button to search records</li>
    </ul>
    <p>
        <label htmlFor="policy_num">Policy Number</label>
        <input type="text" name="policy_num" id="policy_num" placeholder="e.g.009123456"/>
    </p>
    <p>
        <label htmlFor="customer_name">Customer Name</label>
        <input type="text" name="customer_name" id="customer_name" placeholder="e.g.John Smith"/>
    </p>
    <button>Search</button>

    <table>
        <thread>
        <tr>
            <th>Policy Number</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th></th>
        </tr>
        {/* <tr>
            <td>009145623</td>
            <td>Maria Anders</td>
            <td>Active</td>
            <td><button>Open</button></td>
        </tr>
        <tr>
            <td>009745189</td>
            <td>Jane Doe</td>
            <td>Awaiting</td>
            <td><button>Open</button></td>
        </tr> */}
        </thread>
        <tbody></tbody>
    </table>
</div>
}

export default SearchClaim;
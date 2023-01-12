import '../stylesheet.css';

const Information = () => {
    return (
    <div className="container">
        <h1>More Information on Speedy Claims</h1>
        <h3>The Speedy Claims application can be used to submit a claim, search for a claim and display it. Use this page to find out more information on each section of the application.</h3>
        <h4>Register a new claim</h4>
        <ul>
            <li>To start a new claim simply go to the New Claim section of the website.</li>
            <li>Complete all fields marked with an *.</li>
            <li>Only complete the following sections if it is relevent to you claim, e.g, if submitting a property claim, fill out the propery section and ignore the other claim areas.</li>
            <li>To submit the claim, select the Register Claim button located at the bottom of the page.</li>
        </ul>
        <h4>To open a claim</h4>
        <ul>
            <li>To open a claim select Open Claims in the menu options.</li>
            <li>Select Active, CLosed or Rejected from the drop down list.</li>
            <li>Select the open bottom beside each claim record to open the selected claim and view more information on it.</li>
        </ul>
        <h4>Displaying claims</h4>
        <ul>
            <li>To display a claim, you must first either search for a claim via a policy number or use the open claims option to select a claim to view.</li>
        </ul>
    </div>
    );
}

export default Information;
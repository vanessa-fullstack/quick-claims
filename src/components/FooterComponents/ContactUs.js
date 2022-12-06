import '../stylesheet.css';

const ContactUs = () => {
    return (
    <div className="container">
        <h1>Contact Us Here</h1>
        <p>
        <label htmlFor="customer_name">First Name</label>
        <input type="text" name="customer_name" id="customer_name" placeholder="e.g.John"/>
        </p>
        <p>
        <label htmlFor="customer_name">Last Name</label>
        <input type="text" name="customer_name" id="customer_name" placeholder="e.g.Smith"/>
        </p>
        <p>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" placeholder="e.g. 123 Main Street"/>
        </p>
        <p>
        <label htmlFor="subject">More Information on Inquiry</label>
        <textarea id="subject" name="subject" placeholder="Write more detail aout inquiry in this text box" ></textarea>
        </p>
        <button>Submit</button>



       
    </div>
    );
}

export default ContactUs;
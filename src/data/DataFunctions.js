import axios from "axios";

export const getAllClaimsInfo = () => {
    return [
        {id: 101, policy_num: 129145278, customer_name: "John Smith", status: "Active", claim_type: "Motor", 
        claim_date: "2022-05-19", estimated_value: 200, claim_reason: "dent in back of car",
        make: "Vauxhall", model: "Astra", manufacture_year: 2018, incident_date: "2022-05-18",
        further_details: "didn't see pole in parking space"},
        
        {id: 102, policy_num: 127425189, customer_name: "Maria Anders", status: "Closed", claim_type: "Pet",
        claim_date: "2022-05-22", estimated_value: 150, claim_reason: "needed an operation",
        animal: "Dog", breed: "Labrador", incident_date: "2022-05-18"},

        {id: 103, policy_num: 121124756, customer_name: "Jane Brown", status: "Rejected", claim_type: "Motor",
        claim_date: "2022-05-02", estimated_value: 250, claim_reason: "crack in windowscreen",
        make: "Nissan", model: "Juke", manufacture_year: 2017, incident_date: "2022-05-01",
        further_details: "a stone hit the windowscreen and caused a crack"},

        {id: 104, policy_num: 125542360, customer_name: "Chris Stone", status: "Rejected", claim_type: "Property",
        claim_date: "2022-05-03", estimated_value: 225, claim_reason: "window broken",
        address: "25 Elm Street, Belfast"},

        {id: 105, policy_num: 128547236, customer_name: "Alan Grey", status: "Active", claim_type: "Property",
        claim_date: "2022-05-17", estimated_value: 375, claim_reason: "boiler repairs",
        address: "63 Ivy Avenue, Belfast"},

        {id: 106, policy_num: 123345178, customer_name: "Maddie Wray", status: "Active", claim_type: "Pet",
        claim_date: "2022-05-11", estimated_value: 125, claim_reason: "cut on paw",
        animal: "Cat", breed: "British shorthaired", incident_date: "2022-05-10"},

        {id: 107, policy_num: 120147512, customer_name: "Carly Murray", status: "Closed", claim_type: "Motor",
        claim_date: "2022-05-25", estimated_value: 100, claim_reason: "other car drove into back of car",
        make: "Ford", model: "Focus", manufacture_year: 2019, incident_date: "2022-05-23",
        further_details: "sitting in traffic and car behind went into back of car"},

        {id: 108, policy_num: 127598263, customer_name: "David Cross", status: "Active", claim_type: "Property",
        claim_date: "2022-05-22", estimated_value: 200, claim_reason: "damage from flood",
        address: "123 Oak Street, Lisburn"},

        {id: 109, policy_num: 124415048, customer_name: "James McHugh", status: "Closed", claim_type: "Motor",
        claim_date: "2022-05-14", estimated_value: 250, claim_reason: "skid on ice",
        make: "Vauxhall", model: "Corsa", manufacture_year: 2018, incident_date: "2022-05-13",
        further_details: "black ice due to snow during night"},

        {id: 110, policy_num: 125012698, customer_name: "Mike Peters", status: "Active", claim_type: "Motor",
        claim_date: "2022-05-19", estimated_value: 150, claim_reason: "wing mirror off",
        make: "Peugeot", model: "208", manufacture_year: 2018, incident_date: "2022-05-18",
        further_details: "parked on side of street and another car took wing mirror off"},

        {id: 111, policy_num: 125012698, customer_name: "Mike Peters", status: "Active", claim_type: "Property",
        claim_date: "2022-05-19", estimated_value: 175, claim_reason: "broken window",
        address: "22 Street Ville, Belfast"}
       
    ]
}// no longer using this - all data in database being called via axios

const headers = new Headers({"Accept":"application/json"})

export const getAllClaimsFetchVersion = () =>{ 
    return fetch("http://localhost:8080/api/quickclaim", 
    {
        method: "GET",
        headers: headers
    })
}//no longer using this version can delete later


export const getAllClaimsAxiosVersion  = () => {
    return axios({url : "http://localhost:8080/api/quickclaim",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}//loading data to the open claims page from the database

export const getAllClaimsForStatus  = (status) => {
    console.log("getAllClaimsForStatus")
    return axios({url : "http://localhost:8080/api/quickclaim?status="+status,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForName  = (customerName) => {
    return axios({url : "http://localhost:8080/api/quickclaim?customerName="+customerName,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForPolicyNumber  = (id) => {
    return axios({url : "http://localhost:8080/api/quickclaim?policyNumber="+id,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForInsuranceType  = (insuranceType) => {
    return axios({url : "http://localhost:8080/api/quickclaim?policyNumber="+insuranceType,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const addNewClaim = (claim) => {
    console.log(claim);
    return axios({url : "http://localhost:8080/api/quickclaim",
            method: "POST",
            headers: {"Accept" : "application/json", "Content-Type" : "application/json"},
            data: claim
        })
}//this function may update depending on the api url 

export const getStatuses = ()  => {
    console.log("getStatuses")
    return axios({url : "http://localhost:8080/api/status",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

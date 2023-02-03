// import axios from "axios";

import axios from "axios"

// const headers = new Headers({"Accept":"application/json"})

// export const getAllClaimsFetchVersion = () =>{ 
//     return fetch("http://localhost:8080/api/quickclaim", 
//     {
//         method: "GET",
//         headers: headers
//     })
// }//no longer using this version can delete later


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

export const updateExitingClaim = (claim) => {
    console.log(claim);
    return axios({url : "http://localhost:8080/api/quickclaim",
            method: "PUT",
            headers: {"Accept" : "application/json", "Content-Type" : "application/json"},
        })
}//this function may update depending on the api url 

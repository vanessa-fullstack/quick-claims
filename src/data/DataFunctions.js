import axios from "axios"

// const headers = new Headers({"Accept":"application/json"})

// export const getAllClaimsFetchVersion = () =>{ 
//     return fetch("http://localhost:8080/api/quickclaim", 
//     {
//         method: "GET",
//         headers: headers
//     })
// }//no longer using this version can delete later

const getAuthHeader = (username, password) =>{
    return {"Authorization" : "Basic " + btoa(`${username}:${password}`)}
}


export const getAllClaimsAxiosVersion  = () => {
    return axios({url : "http://localhost:8080/api/quickclaim",
            method: "GET", 
            headers: {"Accept" : "application/json", "Authorization" : "Basic " + btoa("vanessa:pass1")}
            })
}//loading data to the open claims page from the database

export const getAllClaimsForStatus  = (status) => {
    console.log("getAllClaimsForStatus")
    return axios({url : "http://localhost:8080/api/quickclaim?status="+status,
            method: "GET", 
            headers: {"Accept" : "application/json" , "Authorization" : "Basic " + btoa("vanessa:pass1")}
            })
}

export const getAllClaimsForName  = (customerName) => {
    return axios({url : "http://localhost:8080/api/quickclaim?customerName="+customerName,
            method: "GET", 
            headers: {"Accept" : "application/json", "Authorization" : "Basic " + btoa("vanessa:pass1")}
            })
}

export const getAllClaimsForPolicyNumber  = (id) => {
    return axios({url : "http://localhost:8080/api/quickclaim?policyNumber="+id,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForInsuranceType  = (insuranceType) => {
    return axios({url : "http://localhost:8080/api/quickclaim?insuranceType="+insuranceType,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const addNewClaim = (claim) => {
    console.log(claim);
    return axios({url : "http://localhost:8080/api/quickclaim",
            method: "POST",
            headers: {"Accept" : "application/json", "Content-Type" : "application/json", "Authorization" : "Basic " + btoa("vanessa:pass1")},
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

//update PUT /api/payment/142645

export const updateExitingClaim = (claim) => {
    console.log("Checking this ", claim);
    return axios({url : "http://localhost:8080/api/quickclaim/"+claim.id,
            method: "PUT",
            headers: {"Accept" : "application/json", "Content-Type" : "application/json", "Authorization" : "Basic " + btoa("vanessa:pass1")},
            data: claim
        })
        
}

export const login = (username, password) => {
    return axios({url : "http://localhost:8080/api/login",
                method: "POST",
                headers: {...getAuthHeader(username, password),
                    "Accept" : "application/json", "Content-Type" : "application/json"},
                    data: {username: username}
                })
}

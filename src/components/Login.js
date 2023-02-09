import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../data/DataFunctions";
import { UserContext } from "./contexts/UserContext";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [touched, setTouched] = useState(false);

    const [params, setParams] = useSearchParams();
    const target = params.get("target");

    const currentUser = useContext(UserContext);
    
    const navigate = useNavigate();

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setTouched(true);
        setPassword(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        //simualte a rest call to do the login
        login(username, password).then(
            result => {console.log(result)
            currentUser.setUser({name : result.data.username, role : result.data.role, password : password});
            target != null ? navigate("/" + target) : navigate("/");
        }
        )
        .catch( error => console.log("login did not work"));
    }

    return (
    <div className="logincontainer">
    <form className="logincontainer" onSubmit={submitForm} >
    <h1>Log in here</h1>
        <p>
        <label htmlFor="name">Username:</label>
        <input id="name" type="text" value={username} onChange={updateUsername} />
        </p>
        <p>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={updatePassword} />
        </p>
        <button type="submit" disabled={!touched}>Login</button>
    </form>
    </div>
    )


}

export default Login;
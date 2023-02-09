import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

jest.mock("../data/DataFunctions.js", () => {
    return {login : ()=>Promise.resolve(null)}
})

test ("check that the login button is not enabled initially", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>);
    const buttons = screen.getAllByRole("button");
    const loginButton = buttons.find( b => b.textContent === "Login" );
    expect(loginButton).toBeDisabled();
})


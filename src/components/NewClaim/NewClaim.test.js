import { render, screen } from "@testing-library/react";
import NewClaim from "./NewClaim";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("../../data/DataFunctions.js", () => {
    return {addNewClaim : ()=>Promise.resolve(null),
        getAllClaimsForName : ()=>Promise.resolve(null),
        updateExitingClaim : ()=>Promise.resolve(null)}
})


test("1. checking the search box has no styles or classes applied to it.", ()=> {
    render(<BrowserRouter>
        <NewClaim />
    </BrowserRouter>);
    const input = screen.getByLabelText("Customer Name *");
    expect(input).not.toHaveClass("searchBoxError");
});

test("2. checking the drop down list for insurance type has no styles or classes applied to it.", ()=> {
    render(<BrowserRouter>
        <NewClaim />
    </BrowserRouter>);
    const input = screen.getByLabelText("Insurance Type *");
    expect(input).not.toHaveClass("insuranceTypeError");
});

test("3. checking the drop down list for status has no style or class applied to it.", ()=> {
    render(<BrowserRouter>
        <NewClaim />
    </BrowserRouter>);
    const input = screen.getByLabelText("Status *");
    expect(input).not.toHaveClass("statusError");
});

test("4. checking that the Customer Name box has the error class when the user enters just spaces" , () => {
    render(
    <BrowserRouter>
        <NewClaim />
    </BrowserRouter>);
    const input = screen.getByLabelText("Estimated Amount of Claim *");
    userEvent.type(input, "   ");
    expect(input).toHaveClass("amountBoxError");
});
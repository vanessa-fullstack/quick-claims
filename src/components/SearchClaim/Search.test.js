import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { BrowserRouter } from "react-router-dom";
jest.mock("../../data/DataFunctions.js", () => {
    return {getAllClaimsAxiosVersion : ()=>Promise.resolve(null),
        getAllClaimsForName : ()=>Promise.resolve(null),
        updateExitingClaim : ()=>Promise.resolve(null)}
})

test("1. checking the search box has no styles or classes applied to it.", ()=> {
    render(<BrowserRouter>
        <Search />
    </BrowserRouter>);
    const input = screen.getByLabelText("Customer Name");
    expect(input).not.toHaveClass("searchBoxError");
});
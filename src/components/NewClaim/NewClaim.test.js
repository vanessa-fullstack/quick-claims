import { render, screen } from "@testing-library/react";
import NewClaim from "./NewClaim";


test("1. checking the search box has no styles or classes applied to it.", ()=> {
    render(<BrowserRouter>
        <NewClaim />
    </BrowserRouter>);
    const input = screen.getByLabelText("Customer Name *");
    expect(input).not.toHaveClass("searchBoxError");
});
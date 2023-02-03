import { render, screen } from "@testing-library/react";
import Search from "./Search";


test("1. checking the search box has no styles or classes applied to it.", ()=> {
    render(<BrowserRouter>
        <Search />
    </BrowserRouter>);
    const input = screen.getByLabelText("Customer Name");
    expect(input).not.toHaveClass("searchBoxError");
});
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { BrowserRouter } from "react-router-dom";
// import SearchClaim from "./SearchClaim";

// test("check the search box has no classes initailly applied to it ", () => {
//     render(<BrowserRouter>
//                 <SearchClaim />
//             </BrowserRouter>);
//     const input = screen.getByLabelText("Policy Number");
//     expect(input).not.toHaveClass("searchBoxError");

// });

// test("check that the search box has the error class when the user enters just spaces" , () => {
//     render(
//     <BrowserRouter>
//         <SearchClaim />
//     </BrowserRouter>);
//     const input = screen.getByLabelText("Policy Number");
//     userEvent.type(input, "   ");
//     expect(input).toHaveClass("searchBoxError");
// });

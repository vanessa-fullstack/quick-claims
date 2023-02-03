import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';


test("1.menu contains a link to the openclaim page", ()=> {
    //step1 - render the component
    render(<BrowserRouter><Menu /></BrowserRouter>);

    //step2 - get the object we want to inspect
    const findLink = screen.queryByText("Open Claim", {exact: false});

    //step3 - user interaction (click / type)

    //step4 - what do we expect to happen
    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/openclaim');

})

test("2.menu contains a link to the search page", ()=> {
    render(<BrowserRouter><Menu /></BrowserRouter>);

    const findLink = screen.queryByText("Search Claim", {exact: false});

    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/searchclaim');

})

test("3.menu contains a link to the new claim page", ()=> {
    render(<BrowserRouter><Menu /></BrowserRouter>);

    const findLink = screen.queryByText("New Claim", {exact: false});

    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/newclaim');

})
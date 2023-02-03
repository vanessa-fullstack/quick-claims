import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

test("1.footer contains a link to the contact us page", ()=> {
    render(<BrowserRouter><Footer /></BrowserRouter>);

    const findLink = screen.queryByText("Contact Us", {exact: false});

    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/contactus');

})

test("2.footer contains a link to the information page", ()=> {
    render(<BrowserRouter><Footer /></BrowserRouter>);

    const findLink = screen.queryByText("Information", {exact: false});

    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/information');

})

test("3.footer contains a link to the termsofuse page", ()=> {
    render(<BrowserRouter><Footer /></BrowserRouter>);

    const findLink = screen.queryByText("Terms of Use", {exact: false});

    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/termsofuse');

})

test("4.footer contains a link to the privacypolicy page", ()=> {
    render(<BrowserRouter><Footer /></BrowserRouter>);

    const findLink = screen.queryByText("Privacy Policy", {exact: false});

    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/privacypolicy');

})
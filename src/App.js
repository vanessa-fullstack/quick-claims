import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayClaim from './components/DisplayClaim/DisplayClaim';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NewClaim from './components/NewClaim/NewClaim';
import OpenClaim from './components/OpenClaim/OpenClaimNew';
import SearchClaim from './components/SearchClaim/SearchClaim';
import ContactUs from './components/FooterComponents/ContactUs';
import Information from './components/FooterComponents/Information';
import TermsOfUse from './components/FooterComponents/TermsOfUse';
import PrivacyPolicy from './components/FooterComponents/PrivacyPolicy';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");


    return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/newclaim" element = {<NewClaim />} />
        <Route path="/openclaim" element = {<OpenClaim searchTerm={searchTerm} /> }/>
        <Route path="/searchclaim" element = {<SearchClaim
        setSearchTerm={setSearchTerm} />}/>
        <Route path="/displayclaim" element = {<DisplayClaim searchTerm={searchTerm} />}/>
        <Route path="/" element = {<div className='container'><h1>Welcome to the Speedy Claims system
          <h4>Navigate your way through the webpage using the menu at the top of the screen</h4>
        </h1></div>}/>
        <Route path="*" element = { <h1>Sorry - that page doesn't exist</h1>}/>
        <Route path="/contactus" element = {<ContactUs />} />
        <Route path="/information" element = {<Information />} />
        <Route path="/termsofuse" element = {<TermsOfUse />} />
        <Route path="/privacypolicy" element = {<PrivacyPolicy />} />
      </Routes>
      <Footer />

      </BrowserRouter>
    );
  }


export default App;

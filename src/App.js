import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import './components/stylesheet.css';
import DisplayClaim from './components/DisplayClaim/DisplayClaim';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NewClaim from './components/NewClaim/NewClaim';
import OpenClaim from './components/OpenClaim/OpenClaimNew';
import Search from './components/SearchClaim/Search';
import ContactUs from './components/FooterComponents/ContactUs';
import Information from './components/FooterComponents/Information';
import TermsOfUse from './components/FooterComponents/TermsOfUse';
import PrivacyPolicy from './components/FooterComponents/PrivacyPolicy';
import { useState } from 'react';
import Login from './components/Login';
import { UserContext } from './components/contexts/UserContext';
import store from './components/store/store';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState({ name : "", role : ""});



    return (
      <BrowserRouter>
      <Provider store={store} >
    <UserContext.Provider value={{user:currentUser, setUser:setCurrentUser }}>
      <Menu />
      <Routes>
        <Route path="/login" element = {<Login />} />
                
        <Route path="/newclaim" element = {
            <ProtectedRoute path="newclaim" roles={["AGENT"]} element = {<NewClaim />} />}
        />
        {/* <Route path="/newclaim" roles ={["AGENT"]} element = {<NewClaim />} /> */}

        <Route path="/openclaim" element = {
            <ProtectedRoute path="openclaim" roles={["USER", "AGENT"]} 
            element = {<OpenClaim searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
            />
          } />
        {/* <ProtectedRoute path="/openclaim" roles={["USER", "AGENT"]} element = {<OpenClaim searchTerm={searchTerm} />}/> */}
        
        <Route path="/searchclaim" element = {
            <ProtectedRoute path="searchclaim" roles={["AGENT"]} 
            element = {<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
            />
          } />
        {/* <ProtectedRoute path="/searchclaim" roles={["AGENT"]} element = {<Search
        setSearchTerm={setSearchTerm} />}/> */}

        <Route path="/" element = {<div className='container'><h1>Welcome to the Speedy Claims system
          <h4>Use the 'Log in' option at the top of the screen to log in navigate your way through the webpage using the menu at the top of the screen</h4>
        </h1></div>}/>
        <Route path="*" element = { <h1>Sorry - that page doesn't exist</h1>}/>
        <Route path="/contactus" element = {<ContactUs />} />
        <Route path="/information" element = {<Information />} />
        <Route path="/termsofuse" element = {<TermsOfUse />} />
        <Route path="/privacypolicy" element = {<PrivacyPolicy />} />
      </Routes>
      <Footer />
      </UserContext.Provider>   
      </Provider>
      </BrowserRouter>
    );
  }


export default App;

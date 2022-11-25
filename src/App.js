import './App.css';
import DisplayClaim from './components/DisplayClaim/DisplayClaim';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NewClaim from './components/NewClaim/NewClaim';
import OpenClaim from './components/OpenClaim/OpenClaim';
import SearchClaim from './components/SearchClaim/SearchClaim';

function App() {

    return (
      <div>
        <Menu />
        <NewClaim />
        <OpenClaim />
        <SearchClaim />
        <DisplayClaim />
        <Footer />
      </div>
    );
  }


export default App;

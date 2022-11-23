import './App.css';
import DisplayClaim from './components/DisplayClaim/DisplayClaim';
import NewClaim from './components/NewClaim/NewClaim';
import OpenClaim from './components/OpenClaim/OpenClaim';
import SearchClaim from './components/SearchClaim/SearchClaim';

function App() {

    return (
      <div>
        <NewClaim />
        <OpenClaim />
        <SearchClaim />
        <DisplayClaim />
      </div>
    );
  }


export default App;

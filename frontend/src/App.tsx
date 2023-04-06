/* eslint-disable react/button-has-type */
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Opportunitycard from './components/Opportunitycard';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-slate-50">
        <Filter />
        <Opportunitycard />
      </div>
    </div>
  );
}

export default App;

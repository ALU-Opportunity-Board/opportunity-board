/* eslint-disable react/button-has-type */
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Filter />
      </div>
    </div>
  );
}

export default App;

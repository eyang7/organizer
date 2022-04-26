import Navbar from './Navbar.js'; 
import Button from 'react-bootstrap/Button'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div> <Navbar/> </div>

      <div className = "categories">
        <Button> Add new category</Button>
      </div>
        
    </div>
  );
}

export default App;

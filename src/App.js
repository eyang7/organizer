import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';  
import Button from 'react-bootstrap/Button'; 
import './App.css';

function App() {
  return (
    <div className="App">

    <div className = "topbar">
     
     <div className = "navbar"> 
        <Navbar> Organizer </Navbar>
     </div> 

     <div className = "sidebar">
      <Button> New Tab</Button>
     </div>

     </div>

      <header className="App-header">
      <div className = "categories">
        <Button> Add new category</Button>
      </div>
        
      </header>
    </div>
  );
}

export default App;

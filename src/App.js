
import './App.css';
import Form from './Form';
import Movie from './Movie';
import Navbar from './Navbar';
import Summary from './Summary';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Movie/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
     
    
    </div>
  );
}

export default App;


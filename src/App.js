import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import Update from './components/update/update';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <h3>React Crud Operations</h3>
          <Link  to='/create'>Create Crud</Link>
        </div>
        <Routes>
          <Route  path='/create' element={<Create/>}/>
          <Route exact path='/' element={<Read/>}/>
          <Route  path='/update/:id' element={<Update/>}/>
        </Routes>
        </div>
    </Router >

 
  );
}

export default App;

// import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/index" exact element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

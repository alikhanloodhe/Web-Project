import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './My Components/Auth/login';
import Signup from './My Components/Auth/signup';
import './My Components/Auth/Authform.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} /> {/* Default route to login */}
      </Routes>
    </Router>
  );
}

export default App;

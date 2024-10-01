import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landingpage from './pages/LandingPage/Landingpage';
import Login from './pages/LandingPage/Login';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
      <Route path='/Employee' element={<Homepage/>}></Route> {/*in here i will add the id later */}
      
    </Routes>
  </Router>
    </div>
  );
}

export default App;

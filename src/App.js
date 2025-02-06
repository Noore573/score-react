import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landingpage from './pages/LandingPage/Landingpage';
import Login from './pages/LandingPage/Login';
import Homepage from './pages/Homepage';
import EmployeeProfilePage from './pages/Employees/EmployeeProfilePage';
import Leaderboard from './pages/Leaderboard';
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <div className="App">
    <UserProvider>
  <Router>
    <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
      <Route path='/leaderboard' element={<Leaderboard/>}></Route>
      <Route path='/Employee' element={<EmployeeProfilePage/>}></Route> {/*in here i will add the id later */}
      
    </Routes>
  </Router>
  </UserProvider>
    </div>
  );
}

export default App;

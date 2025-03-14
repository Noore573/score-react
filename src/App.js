import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landingpage from './pages/LandingPage/Landingpage';
import Login from './pages/LandingPage/Login';
import Homepage from './pages/Homepage';
import EmployeeProfilePage from './pages/Employees/EmployeeProfilePage';
import Leaderboard from './pages/Leaderboard';
import { UserProvider } from './context/UserContext';
import EmployeesPage from './pages/Employees/EmployeesPage';
import CreateNewEmployee from './pages/Employees/CreateNewEmployee';
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
      <Route path='/Employee/:id' element={<EmployeeProfilePage/>}></Route>
      <Route path='/Employees' element={<EmployeesPage/>}></Route>
      <Route path='/CreateNewEmployee' element={<CreateNewEmployee/>}></Route>
      
    </Routes> 
  </Router>
  </UserProvider>
    </div>
  );
}

export default App;

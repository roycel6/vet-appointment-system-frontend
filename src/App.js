import logo from './logo.svg';
import './App.css';
import Login from "./components/login/Login.jsx";
import Signup from "./components/login/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import PetInfoPage from "./pages/petInfoPage.jsx";
import AppointmentPage from "./pages/appointmentPage.jsx";
import TransactionHistoryPage from './pages/transactionHistoryPage.jsx';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
	    	<Route path="/petInfoPage" element={<PetInfoPage />} />
		    <Route path="/appointmentPage" element={<AppointmentPage />} />
        <Route path="/transactionHistoryPage" element={<TransactionHistoryPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Login,Contact,UserDashBord,Home,Signup, UpdateProfile,OpenAccountScreen,BrainTumarDetection,Disclaimer } from './screens/index';
import { useEffect } from 'react';
import ViewReportPage from './screens/viewReportPage';
function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);
  return (
    <div className="page-body">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserDashBord/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/update-profile" element={<UpdateProfile/>} />
        <Route path="/create-account" element={<OpenAccountScreen/>} />
        <Route path="/upload-image" element={<BrainTumarDetection/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/report-card" element={<ViewReportPage/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

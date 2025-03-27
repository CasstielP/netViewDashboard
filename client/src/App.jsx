import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import ConfigPage from "./pages/configPage";
import Login from "./pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { fetchMe } from "./features/auth/authSlice";




const App = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.auth)

  useEffect(()=> {
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(fetchMe())
    }
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/config" element={user ? <ConfigPage /> : <Login />} />
      </Routes>
      
    </Router>
  );
};

export default App;

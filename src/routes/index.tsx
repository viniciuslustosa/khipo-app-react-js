import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Login from '../pages/Login';
import { useAuth } from '../contexts/AuthContext';
import Base from '../components/Base';
import Register from '../pages/register';
import Panel from '../pages/Panel';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<BaseRoutes />} >
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/panel" element={<Panel />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

const AuthorizedRoutes: React.FC<any> = ({ children }) => {
  const { signed } = useAuth()
  const location = useLocation()
  
  //if (!signed) return <Navigate to="/" state={{from: location}} />

  return <></>
}

const BaseRoutes: React.FC<any> = ({ children }) => {
  return (
    <Base>
      <Outlet />
    </Base>
  )
}

export default AppRoutes;

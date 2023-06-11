import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Login from '../pages/Login';
import { useAuth } from '../contexts/AuthContext';
import Base from '../components/Base';
import Register from '../pages/Register';
import Panel from '../pages/Panel';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/auth" element={<BaseRoutes />} >
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<Register />} />
            </Route>
            <Route path="/" element={<AuthorizedRoutes />} >
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
  
  if (!signed) return <Navigate to="/auth/signin" state={{from: location}} />

  return (
    <Base signed={signed}>
      <Outlet />
    </Base>
  )
}

const BaseRoutes: React.FC<any> = ({ children }) => {
  const { signed } = useAuth()
  const location = useLocation()
  
  if (signed) return <Navigate to="/panel" state={{from: location}} />

  return (
    <Base signed={signed}>
      <Outlet />
    </Base>
  )
}

export default AppRoutes;

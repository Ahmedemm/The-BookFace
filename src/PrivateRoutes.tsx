import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const PrivateRoutes = () => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

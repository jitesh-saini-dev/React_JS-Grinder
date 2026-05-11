import React from "react";

import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Protectedroute = ({ children }) => {

  const { isLogin } = useSelector(
    (state) => state.auth
  );

  return isLogin ? children : <Navigate to="/login" />;
};

export default Protectedroute;
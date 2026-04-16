import { Navigate } from "react-router-dom";

function Protectedroute({ children }) {
  const isLogin = localStorage.getItem("user");

  console.log(">>>>>>", isLogin);

  return isLogin ? children : (<Navigate to ="/signup"/>);
}

export default Protectedroute;

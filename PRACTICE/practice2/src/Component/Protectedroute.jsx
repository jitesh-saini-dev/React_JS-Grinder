import { Navigate } from "react-router-dom";

function Protectedroute({ children }) {
  const isToken = localStorage.getItem("token");

  console.log(">>>>>>", isToken);

  return isToken ? children : <Navigate to="/signin" />;
}

export default Protectedroute;

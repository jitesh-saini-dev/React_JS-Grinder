import React, {  useState, useEffect} from "react";
import {  useDispatch,  useSelector} from "react-redux";
import { login } from "../Slice/authSlice";
import {  useNavigate} from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.auth.isLogin  );

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {

    e.preventDefault();

    dispatch(login({email, password, }) );
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (

    <form
      onSubmit={handlesubmit}
      className="mt-5 ml-5 flex gap-5"
    >

      <input
        type="email"
        placeholder="email"
        onChange={(e) =>
          setemail(e.target.value)
        }
        className="border"
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setpassword(e.target.value)
        }
        className="border"
      />

      <button
        type="submit"
        className="border"
      >
        Login
      </button>

      <button
        type="button"
        onClick={() => navigate("/signup")}
        className="border"
      >
        Signup
      </button>

    </form>
  );
};

export default Login;
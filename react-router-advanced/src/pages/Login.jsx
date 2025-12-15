import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("isAuth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

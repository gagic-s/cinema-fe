/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import styles from './LoginPage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import Button from "../../components/shared/Button/Button";
import { loginService } from "../../services/auth/auth-service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginService( {email, password });

      auth.login(response.token, response.user);

      // Redirect after successful login
      if (response.user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button text="Login" variant="primary" type="submit" />
      </form>
      <Link to="/register">
      <h3> Don't have an account? <strong> Sign Up!</strong></h3>
     
      </Link>
      
    </div>
  );
};

export default Login;

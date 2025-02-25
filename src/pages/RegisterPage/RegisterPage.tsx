/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import styles from './RegisterPage.module.css'
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/shared/Button/Button";
import {  registerService } from "../../services/auth/auth-service";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await registerService( {email, password, firstName, lastName, dob, username });
      console.log(response);
   
        navigate("/login");
      

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
      <input
          type="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
    
      <input
          type="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
              <input
          type="dob"
          placeholder="DOB"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
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
        <Button text="Register" variant="primary" type="submit" />
      </form>
      <p>
        Already have an account? <Link to="/login"><strong>Login</strong> </Link></p>
      
    </div>
  );
};

export default Register;

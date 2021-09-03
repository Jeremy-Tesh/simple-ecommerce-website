import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import db from "../../config";
import "./Signup.css";

// const SignUp = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = e.target.elements;
//     try {
//       db.auth().createUserWithEmailAndPassword(email.value, password.value);
//       setCurrentUser(true);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   if (currentUser) {
//     return <Redirect to="/dashboard" />;
//   }
//   return (
//     <>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <label for="email">Email</label>
//         <input type="email" name="email" placeholder="Email" />
//         <label for="password">Password</label>
//         <input type="password" name="password" placeholder="Password" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      db.auth().createUserWithEmailAndPassword(email, password);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
    // setEmail("");
    // setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onSubmit={handleSubmit}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/signin">sign in?</Link>
      </p>
    </form>
  );
};
export default SignUp;

import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/4.4 crown.svg.svg";
import { auth } from "../../config";
import { useAuth } from "../../contexts/AuthContext";
const Header = () => {
  const { currentUser } = useAuth();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <h1>hello</h1>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;

import React, { useContext, useState } from "react";
import "./Menubar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Menubar = () => {
  const [active, setActive] = useState("home");
  const { quantities, token, setToken, setQuantities } =
    useContext(StoreContext);

  const uniqueItemsInCart = Object.values(quantities).filter(
    (qty) => qty > 0
  ).length;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setQuantities({});
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container d-flex align-items-center justify-content-between">

        {/* ===== LEFT : LOGO ===== */}
        <Link to="/" className="brand-logo">
          <img
            src={assets.logo}
            alt="logo"
            className="brand-icon"
            height={48}
            width={48}
          />
          <span className="brand-text">
            <span className="brand-orange">Quick</span>
            <span className="brand-black">Bite</span>
          </span>
        </Link>

        {/* ===== CENTER : NAV LINKS ===== */}
        <ul className="navbar-nav center-nav">
          <li className="nav-item">
            <Link
              className={
                active === "home" ? "nav-link active" : "nav-link"
              }
              to="/"
              onClick={() => setActive("home")}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={
                active === "explore" ? "nav-link active" : "nav-link"
              }
              to="/explore"
              onClick={() => setActive("explore")}
            >
              Explore
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={
                active === "myorders"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/myorders"
              onClick={() => setActive("myorders")}
            >
              My Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={
                active === "contact-us"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/contact"
              onClick={() => setActive("contact-us")}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* ===== RIGHT : CART + AUTH ===== */}
        <div className="d-flex align-items-center gap-4">
          <Link to="/cart">
            <div className="position-relative">
              <img
                src={assets.cart}
                alt="cart"
                height={28}
                width={28}
              />
              {uniqueItemsInCart > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {uniqueItemsInCart}
                </span>
              )}
            </div>
          </Link>

          {!token ? (
            <>
              <button
                className="btn-custom-login"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <button
                className="btn-custom-register"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          ) : (
            <div className="dropdown text-end">
              <a
                href="/#"
                className="d-block text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src={assets.profile}
                  alt="profile"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>

              <ul className="dropdown-menu text-small">
                <li
                  className="dropdown-item"
                  onClick={() => navigate("/myorders")}
                >
                  Orders
                </li>
                <li className="dropdown-item" onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
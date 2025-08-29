// src/pages/Auth/Login.jsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Invalid Credentials!!!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-light vh-100 vw-100 m-0 p-0">
      <div className="w-100 h-100 bg-white overflow-hidden m-0 p-0">
        <div className="row g-0">
          {/* Left Side - Login Form */}
          <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
            <div className="col-11 col-md-10 col-lg-8 text-start">
              {/* Logo */}
              <Link to="/login">
                <img
                  src="https://dashlite.net/demo7/images/logo-dark.png"
                  alt="Logo"
                  className="img-fluid mb-4"
                  style={{ maxWidth: "150px", cursor: "pointer" }}
                />
              </Link>

              <h3 className="fw-bold mb-3">Sign In</h3>
              <p className="text-muted mb-4">
                Access the DashLite panel using your email and passcode.
              </p>

              <Form onSubmit={handleSubmit}>
                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Email or Username</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address or username"
                  />
                  <div className="d-flex justify-content-end mt-1">
                    <a
                      href="#help"
                      className="small text-decoration-none"
                      style={{ color: "#10b981" }}
                    >
                      Need Help?
                    </a>
                  </div>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Passcode</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your passcode"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#6b7280",
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <div className="d-flex justify-content-end mt-1">
                    <a
                      href="#forgot"
                      className="small text-decoration-none"
                      style={{ color: "#10b981" }}
                    >
                      Forgot Code?
                    </a>
                  </div>
                </Form.Group>

                {/* Submit */}
                <Button
                  className="w-100 mb-3"
                  variant="success"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>

              {/* Links */}
              <div className="text-start mb-3">
                <small className="text-muted">
                  New on our platform?{" "}
                  <a
                    href="#create"
                    className="text-decoration-none"
                    style={{ color: "#10b981" }}
                  >
                    Create an account
                  </a>
                </small>
              </div>

              <div className="text-center mb-3">
                <span className="text-muted">— OR —</span>
              </div>

              <div className="d-flex justify-content-center gap-3 mb-3">
                <Link
                  to="https://www.facebook.com/"
                  className="text-decoration-none"
                  style={{ color: "#10b981" }}
                >
                  Facebook
                </Link>
                <Link
                  to="/login"
                  className="text-decoration-none"
                  style={{ color: "#10b981" }}
                >
                  Google
                </Link>
              </div>

              <div className="text-center">
                <small>
                  I don’t have an account?{" "}
                  <a
                    href="#trial"
                    className="text-decoration-none"
                    style={{ color: "#10b981" }}
                  >
                    Try 15 days free
                  </a>
                </small>
              </div>

              {/* Footer */}
              <div className="mt-4 text-center">
                <a
                  href="#terms"
                  className="mx-2 small text-decoration-none"
                  style={{ color: "#10b981" }}
                >
                  Terms & Condition
                </a>
                <a
                  href="#privacy"
                  className="mx-2 small text-decoration-none"
                  style={{ color: "#10b981" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#help"
                  className="mx-2 small text-decoration-none"
                  style={{ color: "#10b981" }}
                >
                  Help
                </a>
              </div>

              <p className="text-muted text-center mt-3 small mb-0">
                © 2024 DashLite. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Right Side - Banner */}
          <div className="col-md-6 d-none d-md-flex flex-column align-items-center justify-content-center bg-light p-4">
            <img
              src="https://dashlite.net/demo7/images/slides/promo-a.png"
              alt="Dashboard Preview"
              className="img-fluid mb-3"
            />
            <h5 className="fw-bold">DashLite</h5>
            <p className="text-muted text-center px-4">
              You can start to create your products easily with its user-friendly design
              & most complete responsive layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

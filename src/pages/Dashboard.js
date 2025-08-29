// src/pages/Dashboard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Dropdown,
} from "react-bootstrap";
import {
  FaSearch,
  FaGlobe,
  FaSignOutAlt,
  FaUser,
  FaCog,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PersonCircle, FileEarmarkBarGraph } from "react-bootstrap-icons";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("Last 30 Days");
  const navigate = useNavigate();

  // ✅ Dummy data for charts
  const visitorData = [
    { name: "01 Jul", physically: 4000, online: 2400 },
    { name: "10 Jul", physically: 6000, online: 1398 },
    { name: "20 Jul", physically: 8000, online: 2800 },
    { name: "30 Jul", physically: 5000, online: 2000 },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelect = (value) => setSelected(value);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="d-flex">
      {/* ==== Main Content ==== */}
      <div className="flex-grow-1 p-4">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* 🔍 Search Bar */}
          <div
            className="d-flex align-items-center border rounded px-3 py-1"
            style={{ maxWidth: "300px" }}
          >
            <FaSearch className="text-muted me-2" />
            <input
              type="text"
              className="form-control border-0 shadow-none p-0"
              placeholder="Search anything"
              style={{ fontSize: "14px" }}
            />
          </div>

          {/* 🌍 Globe + Language + Profile + Logout */}
          <div className="d-flex align-items-center gap-3">
            <FaGlobe
              size={20}
              className="text-secondary"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            />

            {/* Language Selector */}
            <Dropdown align="end">
              <Dropdown.Toggle
                as="div"
                style={{ cursor: "pointer" }}
                className="d-flex align-items-center px-2"
              >
                <img
                  src="https://flagcdn.com/w20/us.png"
                  alt="flag"
                  className="me-2"
                />
                <span className="fw-semibold">EN</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="d-flex align-items-center">
                  <img src="https://flagcdn.com/w20/us.png" alt="us" className="me-2" />
                  <span>English</span>
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center">
                  <img src="https://flagcdn.com/w20/in.png" alt="in" className="me-2" />
                  <span>Hindi</span>
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center">
                  <img src="https://flagcdn.com/w20/fr.png" alt="fr" className="me-2" />
                  <span>French</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                as="div"
                className="profile-circle"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#2ecc71",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                <PersonCircle size={22} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "260px",
                  padding: "0.5rem 0",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* Header */}
                <div style={{ padding: "15px", borderBottom: "1px solid #eee" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        backgroundColor: "#10b981",
                        color: "#fff",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PersonCircle size={22} />
                    </div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "14px" }}>
                        Abu Bin Ishtiyak
                      </div>
                      <div style={{ fontSize: "12px", color: "#888" }}>
                        info@softnio.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu items */}
                <Dropdown.Item href="#/profile" style={{ padding: "10px 15px" }}>
                  <FaUser style={{ marginRight: "8px" }} /> View Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/settings" style={{ padding: "10px 15px" }}>
                  <FaCog style={{ marginRight: "8px" }} /> Account Setting
                </Dropdown.Item>
                <Dropdown.Item href="#/activity" style={{ padding: "10px 15px" }}>
                  <MdDashboard style={{ marginRight: "8px" }} /> Login Activity
                </Dropdown.Item>

                <div style={{ borderTop: "1px solid #eee" }}></div>

                <Dropdown.Item
                  onClick={handleLogout}
                  style={{ padding: "10px 15px" }}
                >
                  <FaSignOutAlt style={{ marginRight: "8px" }} /> Sign out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* 🚪 Logout Button */}
            <Button
              variant="danger"
              size="sm"
              className="fw-bold px-3 py-2"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="me-2" /> Logout
            </Button>
          </div>
        </div>

        {/* Dashboard Heading + Right Controls */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="text-start">Dashboard</h3>
            <p>Welcome to DashLite Hospital Dashboard Template.</p>
          </div>

          {/* Right side: Date Filter + Reports */}
          <div className="d-flex align-items-center gap-3">
            {/* Date Filter */}
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle
                variant="light"
                className="d-flex align-items-center border rounded px-3 py-2"
                style={{
                  backgroundColor: "#fff",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                <FaCalendarAlt className="me-2 text-primary" />
                {selected}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Last 30 Days">Last 30 Days</Dropdown.Item>
                <Dropdown.Item eventKey="Last 6 Months">Last 6 Months</Dropdown.Item>
                <Dropdown.Item eventKey="Last 1 Year">Last 1 Year</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Reports Button */}
            <Button
              variant="success"
              className="d-flex align-items-center px-3 py-2"
              style={{ fontWeight: "500" }}
            >
              <FileEarmarkBarGraph className="me-2" size={20} />
              Reports
            </Button>
          </div>
        </div>

        {/* ==== Stats Cards ==== */}
        <Container fluid>
          <Row className="mb-4">
            <Col md={3} sm={6} xs={12}>
              <Card className="shadow-sm p-3 mb-3">
                <Card.Body>
                  <Card.Title>Today's Sales</Card.Title>
                  <h3>$10,945</h3>
                  <small className="text-success">↑ 4.63% vs. last week</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <Card className="shadow-sm p-3 mb-3">
                <Card.Body>
                  <Card.Title>Today's Revenue</Card.Title>
                  <h3>$12,338</h3>
                  <small className="text-danger">↓ 2.34% vs. last week</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <Card className="shadow-sm p-3 mb-3">
                <Card.Body>
                  <Card.Title>Today's Customer</Card.Title>
                  <h3>$20,847</h3>
                  <small className="text-success">↑ 4.63% vs. last week</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <Card className="shadow-sm p-3 mb-3">
                <Card.Body>
                  <Card.Title>Today's Expense</Card.Title>
                  <h3>$23,485</h3>
                  <small className="text-danger">↓ 1.34% vs. last week</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Middle Row */}
          <Row className="mb-4">
            <Col md={6} sm={12}>
              <Card className="shadow-sm p-3 h-100 text-white bg-success">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Total Sales</Card.Title>
                    <a href="/" className="text-white small">
                      View Report
                    </a>
                  </div>
                  <h3>$74,958.49</h3>
                  <p>$7,395.37 in last month</p>
                  <h5>This week so far</h5>
                  <h4>$1,338.72</h4>
                  <small>↑ 4.63% vs. last week</small>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} sm={12}>
              <Card className="shadow-sm p-3 h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Store Visitors</Card.Title>
                    <small className="text-muted">Weekly</small>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={visitorData}>
                      <defs>
                        <linearGradient id="colorPhysically" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#28a745" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#28a745" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#dc3545" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#dc3545" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="physically"
                        stroke="#28a745"
                        fillOpacity={1}
                        fill="url(#colorPhysically)"
                      />
                      <Area
                        type="monotone"
                        dataKey="online"
                        stroke="#dc3545"
                        fillOpacity={1}
                        fill="url(#colorOnline)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Store Statistics */}
          <Row>
            <Col md={12} sm={12}>
              <Card className="shadow-sm p-3">
                <Card.Body>
                  <Card.Title>Store Statistics</Card.Title>
                  <Row>
                    <Col md={3} sm={6}>
                      <h5>Sales</h5>
                      <p>1,795</p>
                    </Col>
                    <Col md={3} sm={6}>
                      <h5>Customers</h5>
                      <p>2,327</p>
                    </Col>
                    <Col md={3} sm={6}>
                      <h5>Products</h5>
                      <p>674</p>
                    </Col>
                    <Col md={3} sm={6}>
                      <h5>Categories</h5>
                      <p>68</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;

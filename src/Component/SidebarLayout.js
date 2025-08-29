// SidebarLayout.js
import React, { useState } from "react";
import { Nav, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./SideNav.css";

// Icons
import {
  FaTable,
  FaThLarge,
  FaChartPie,
  FaPills,
  FaPlus,
  FaRegFileAlt,
  FaServer,
  FaExclamationTriangle,
  FaLayerGroup,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaUndoAlt,
  FaUsers,
  FaDollarSign,
  FaCommentDots,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

// Logo
import logo from "../asset/logo-small.png";

function SidebarLayout() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

  return (
    <div className="d-flex vh-100">
      {/* ===== Left Icon Sidebar ===== */}
      <div className="d-flex flex-column align-items-center bg-light py-3 icon-sidebar">
        {/* Logo */}
        <div className="mb-4">
          <a href="#">
            <img src={logo} alt="Logo" className="sidebar-logo" />
          </a>
        </div>

        {/* Menu Icons */}
        <div className="flex-grow-1 d-flex flex-column align-items-center">
          <button
            className={`icon-btn ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={() => toggleMenu("dashboard")}
          >
            <FaPills size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "add" ? "active" : ""}`}
            onClick={() => toggleMenu("add")}
          >
            <FaPlus size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "grid" ? "active" : ""}`}
            onClick={() => toggleMenu("grid")}
          >
            <FaThLarge size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "table" ? "active" : ""}`}
            onClick={() => toggleMenu("table")}
          >
            <FaTable size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "file" ? "active" : ""}`}
            onClick={() => toggleMenu("file")}
          >
            <FaRegFileAlt size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "server" ? "active" : ""}`}
            onClick={() => toggleMenu("server")}
          >
            <FaServer size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "error" ? "active" : ""}`}
            onClick={() => toggleMenu("error")}
          >
            <FaExclamationTriangle size={20} />
          </button>
          <button
            className={`icon-btn ${activeMenu === "layers" ? "active" : ""}`}
            onClick={() => toggleMenu("layers")}
          >
            <FaLayerGroup size={20} />
          </button>
        </div>

        {/* Bottom Settings & Profile */}
        <div className="d-flex flex-column align-items-center">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="settings-tooltip" className="custom-tooltip">
                Settings
              </Tooltip>
            }
          >
            <button className="icon-btn mb-2">
              <FaCog size={18} />
            </button>
          </OverlayTrigger>

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
              AB
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
                    AB
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

              <Dropdown.Item href="#/logout" style={{ padding: "10px 15px" }}>
                <FaSignOutAlt style={{ marginRight: "8px" }} /> Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* ===== Right Expanded Sidebar ===== */}
      <div
        className="d-flex flex-column bg-white border-end vh-100 p-3"
        style={{ width: "260px" }}
      >
        <Nav className="flex-column">
          {/* === Pharmacy Navigation (with Submenu) === */}
          {activeMenu === "dashboard" && (
            <>
              <h6 className="fw-bold mb-4 text-start">Pharmacy</h6>

              <Nav.Link href="#" className="sidebar-link d-flex align-items-center text-muted mb-2">
                <FaThLarge className="me-2"  /> Dashboard
              </Nav.Link>

              {/* Customer with submenu */}
              <div>
              <Nav.Link
                onClick={() => toggleSubMenu("customer")}
                className="d-flex align-items-center justify-content-between text-muted mb-2"
                style={{ cursor: "pointer" }}
              >
                <div className="sidebar-link d-flex align-items-center">
                  <FaUser className="me-2" /> Customer
                </div>

                {/* 👇 Arrow toggle */}
                {openSubMenu === "customer" ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
              </Nav.Link>
                  {openSubMenu === "customer" && (
                    <div className="ms-4">
                      <Nav.Link
                        as={Link}
                        to="/addcustomerform"
                        className="sidebar-link text-muted mb-1 text-start"
                      >
                        Add Customer
                      </Nav.Link>

                      <Nav.Link
                        as={Link}
                        to="/customerlist"
                        className="sidebar-link text-muted mb-1 text-start"
                      >
                        Customer List
                      </Nav.Link>
                      {/* <Nav.Link href="#" className="text-muted mb-1 text-start">
                        Customer List
                      </Nav.Link> */}

                      <Nav.Link href="#" className="text-muted mb-1 text-start">
                        Customer Report
                      </Nav.Link>
                    </div>
                                )}
              </div>

              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaPills className="me-2" /> Medicine
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaHome className="me-2" /> Manufacturer
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaUndoAlt className="me-2" /> Return
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaUsers className="me-2" /> Human Resource
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaDollarSign className="me-2" /> Finance
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaChartPie className="me-2" /> Report
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted mb-2">
                <FaCommentDots className="me-2" /> Support
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-muted">
                <FaCog className="me-2" /> Setting
              </Nav.Link>
            </>
          )}
        </Nav>
      </div>
    </div>
  );
}

export default SidebarLayout;

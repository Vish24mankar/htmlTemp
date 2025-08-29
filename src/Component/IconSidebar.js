<<<<<<< HEAD
import React from "react";
import "./IconSidebar.css";

// React-Bootstrap
import Dropdown from "react-bootstrap/Dropdown";

// FontAwesome icons
import {
  FaPills,
  FaPlus,
  FaThLarge,
  FaTable,
  FaRegFileAlt,
  FaServer,
  FaExclamationTriangle,
  FaLayerGroup,
  FaCog,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

// Material Design icon (replacement)
import { MdDashboard } from "react-icons/md";

// Logo
import logo from "../asset/logo-small.png";

function IconSidebar() {
  return (
    <div className="d-flex flex-column align-items-center bg-light vh-100 py-3 icon-sidebar">
      {/* Logo */}
      <div className="mb-4">
        <a href="#">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </a>
      </div>

      {/* Menu Icons */}
      <div className="flex-grow-1 d-flex flex-column align-items-center">
        <button className="icon-btn active">
          <FaPills size={20} />
        </button>
        <button className="icon-btn">
          <FaPlus size={20} />
        </button>
        <button className="icon-btn">
          <FaThLarge size={20} />
        </button>
        <button className="icon-btn">
          <FaTable size={20} />
        </button>
        <button className="icon-btn">
          <FaRegFileAlt size={20} />
        </button>
        <button className="icon-btn mb-3">
          <FaServer size={20} />
        </button>
        <button className="icon-btn">
          <FaExclamationTriangle size={20} />
        </button>
        <button className="icon-btn">
          <FaLayerGroup size={20} />
        </button>
      </div>

      {/* Bottom Settings & Profile Menu */}
      <div className="d-flex flex-column align-items-center">
        <button className="icon-btn mb-2">
          <FaCog size={18} />
        </button>

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
              fontSize: "20px"
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#2ecc71",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    padding: "30px"
                  }}
                >
                  AB
                </div>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "30px"}}>
                    Abu Bin Ishtiyak
                  </div>
                  <div style={{fontSize: "30px", color: "#888" }}>
                    info@softnio.com
                  </div>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <Dropdown.Item href="#/profile" style={{ padding: "10px 15px" }}>
              <FaUser style={{ marginRight: "8px" , fontSize: "30px"}} /> View Profile
            </Dropdown.Item>
            <Dropdown.Item href="#/settings" style={{ padding: "10px 15px" }}>
              <FaCog style={{ marginRight: "8px", fontSize: "30px" }} /> Account Setting
            </Dropdown.Item>
            <Dropdown.Item href="#/activity" style={{ padding: "10px 15px" }}>
              <MdDashboard style={{ marginRight: "8px", fontSize: "30px" }} /> Login Activity
            </Dropdown.Item>

            <div style={{ borderTop: "1px solid #eee" }}></div>

            <Dropdown.Item href="#/logout" style={{ padding: "10px 15px" }}>
              <FaSignOutAlt style={{ marginRight: "8px" , fontSize: "30px"}} /> Sign out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default IconSidebar;
=======
import React from "react";
import "./IconSidebar.css";

// React-Bootstrap
import Dropdown from "react-bootstrap/Dropdown";

// FontAwesome icons
import {
  FaPills,
  FaPlus,
  FaThLarge,
  FaTable,
  FaRegFileAlt,
  FaServer,
  FaExclamationTriangle,
  FaLayerGroup,
  FaCog,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

// Material Design icon (replacement)
import { MdDashboard } from "react-icons/md";

// Logo
import logo from "../asset/logo-small.png";

function IconSidebar() {
  return (
    <div className="d-flex flex-column align-items-center bg-light vh-100 py-3 icon-sidebar">
      {/* Logo */}
      <div className="mb-4">
        <a href="#">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </a>
      </div>

      {/* Menu Icons */}
      <div className="flex-grow-1 d-flex flex-column align-items-center">
        <button className="icon-btn active">
          <FaPills size={20} />
        </button>
        <button className="icon-btn">
          <FaPlus size={20} />
        </button>
        <button className="icon-btn">
          <FaThLarge size={20} />
        </button>
        <button className="icon-btn">
          <FaTable size={20} />
        </button>
        <button className="icon-btn">
          <FaRegFileAlt size={20} />
        </button>
        <button className="icon-btn mb-3">
          <FaServer size={20} />
        </button>
        <button className="icon-btn">
          <FaExclamationTriangle size={20} />
        </button>
        <button className="icon-btn">
          <FaLayerGroup size={20} />
        </button>
      </div>

      {/* Bottom Settings & Profile Menu */}
      <div className="d-flex flex-column align-items-center">
        <button className="icon-btn mb-2">
          <FaCog size={18} />
        </button>

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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
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
  );
}

export default IconSidebar;
>>>>>>> d92d4c5 (template)

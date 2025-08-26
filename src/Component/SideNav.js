import React from "react";
import { Nav } from "react-bootstrap";
import './SideNav.css';
import {
  FaThLarge,
  FaClipboardList,
  FaUserFriends,
  FaUserMd,
  FaDollarSign,
  FaHeartbeat,
  FaBars,
  FaUser,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-white border-end vh-100 p-3"
      style={{ width: "260px" }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center text-success mb-4">
        <h6 className="fw-bold mb-0">Hospital Management</h6>
      </div>

      {/* Navigation */}
      <Nav className="flex-column">
        <Nav.Link href="#" className="sidebar-link d-flex align-items-center mb-2 fs-6 active">
          <FaThLarge className="me-2" />
          Dashboard
        </Nav.Link>

        <Nav.Link href="#" className="sidebar-link d-flex align-items-center mb-2 fs-6">
          <FaClipboardList className="me-2" />
          Appointment List
        </Nav.Link>

        {/* Patient Dropdown */}
        <details className="w-100 mb-2">
          <summary className="sidebar-link d-flex align-items-center fs-6">
            <FaUserFriends className="me-2" /> Patient
          </summary>
          <ul className="submenu list-unstyled ps-4 ">
            <li><a href="#" className="submenu-link">Add Patient</a></li>
            <li><a href="#" className="submenu-link">IPD/OPD Patient</a></li>
            <li><a href="#" className="submenu-link">Manage Patients</a></li>
          </ul>
        </details>

        {/* Doctors / Nurses Dropdown */}
        <details className="w-100 mb-2">
          <summary className="sidebar-link d-flex align-items-center fs-6">
            <FaUserMd className="me-2" /> Doctors / Nurses
          </summary>
          <ul className="submenu list-unstyled ps-4">
            <li><a href="#" className="submenu-link">Add Doctor / Nurse</a></li>
            <li><a href="#" className="submenu-link">Manage Doctors / Nurses</a></li>
          </ul>
        </details>

        {/* Finance Dropdown */}
        <details className="w-100 mb-2">
          <summary className="sidebar-link d-flex align-items-center fs-6">
            <FaDollarSign className="me-2" /> Finance
          </summary>
          <ul className="submenu list-unstyled ps-4">
            <li><a href="#" className="submenu-link">Income</a></li>
            <li><a href="#" className="submenu-link">Expense</a></li>
            <li><a href="#" className="submenu-link">Invoice List</a></li>
            <li><a href="#" className="submenu-link">Invoice Details</a></li>
          </ul>
        </details>

        {/* Misc Pages Dropdown */}
        <details className="w-100 mb-2">
          <summary className="sidebar-link d-flex align-items-center fs-6">
            <FaBars className="me-2" /> Misc Pages
          </summary>
          <ul className="submenu list-unstyled ps-4">
            <li><a href="#" className="submenu-link">Bed Group</a></li>
            <li><a href="#" className="submenu-link">Bed Allotment</a></li>
            <li><a href="#" className="submenu-link">Department</a></li>
            <li><a href="#" className="submenu-link">Death Report</a></li>
          </ul>
        </details>

        <Nav.Link href="#" className="sidebar-link d-flex align-items-center mb-2 fs-6">
          <FaHeartbeat className="me-2" />
          Monitor Hospital
        </Nav.Link>

        <Nav.Link href="#" className="sidebar-link d-flex align-items-center mb-2 fs-6">
          <FaUser className="me-2" />
          User Profile
        </Nav.Link>

        <Nav.Link href="#" className="sidebar-link d-flex align-items-center mb-2 fs-6">
          <FaCog className="me-2" />
          Setting
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;

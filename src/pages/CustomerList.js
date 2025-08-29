// src/pages/CustomerList.jsx
import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

const customers = [
  {
    id: "#P6985",
    name: "Abu Bin Ishtiyak",
    email: "info@softnio.com",
    phone: "+811 847-9558",
    address: "Large cottage",
    purchase: "Item: Omidon10mg Qty: 10pcs",
    amount: "78.55 USD",
    status: "Inactive",
  },
  {
    id: "#P6986",
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    phone: "+124 394-1787",
    address: "Near Robert's Lake",
    purchase: "Item: Zimax50mg Qty: 12pcs",
    amount: "90.20 USD",
    status: "Active",
  },
  {
    id: "#P6987",
    name: "Joe Larson",
    email: "larson@example.com",
    phone: "+168 603-2320",
    address: "Uttara, sector 10",
    purchase: "Item: Furosemide Qty: 1 bottle",
    amount: "43.98 USD",
    status: "Active",
  },
  {
    id: "#P6988",
    name: "Janet Montgomery",
    email: "jane48@example.com",
    phone: "+439 271-5360",
    address: "Dhanmondi 9/A",
    purchase: "Item: Isoniazid Syrup Qty: 2 bottles",
    amount: "80.26 USD",
    status: "Active",
  },
  {
    id: "#P6989",
    name: "Frances Burns",
    email: "frances@example.com",
    phone: "+639 130-3150",
    address: "HNo 76",
    purchase: "Item: Pantonix20mg Qty: 8pcs",
    amount: "120.20 USD",
    status: "Inactive",
  },
  {
    id: "#P6986",
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    phone: "+124 394-1787",
    address: "Near Robert's Lake",
    purchase: "Item: Zimax50mg Qty: 12pcs",
    amount: "90.20 USD",
    status: "Active",
  },
  {
    id: "#P6986",
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    phone: "+124 394-1787",
    address: "Near Robert's Lake",
    purchase: "Item: Zimax50mg Qty: 12pcs",
    amount: "90.20 USD",
    status: "Active",
  },
  {
    id: "#P6986",
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    phone: "+124 394-1787",
    address: "Near Robert's Lake",
    purchase: "Item: Zimax50mg Qty: 12pcs",
    amount: "90.20 USD",
    status: "Active",
  },
];

const CustomerList = () => {
  const totalPages = 102; // total number of pages
  const [page, setPage] = useState(5); // default selected page

  const handlePageChange = (e) => {
    setPage(Number(e.target.value));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Customer List</h3>

      {/* Search + Bulk Action */}
      <div className="d-flex justify-content-between mb-3">
        <Form.Control
          type="text"
          placeholder="Search anything"
          style={{ width: "250px" }}
        />
        {/* <div className="d-flex gap-2">
          <Button variant="primary">+ Add Customer</Button>
        </div> */}
        <Button variant="success">
         <Nav.Link
            as={Link}
            to="/addcustomerform"
            // className="sidebar-link text-muted mb-1 text-white"
             className="text-white text-decoration-none" 
            // style={{color: "white"}}
            >
                + Add Customer
            </Nav.Link>
        </Button>
      </div>

      {/* Customer Table */}
      <Table hover responsive bordered>
        <thead className="table-light">
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Customer</th>
            <th>ID</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Purchase Details</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>
                <strong>{cust.name}</strong>
                <br />
                <small className="text-muted">{cust.email}</small>
              </td>
              <td>{cust.id}</td>
              <td>{cust.phone}</td>
              <td>{cust.address}</td>
              <td>{cust.purchase}</td>
              <td>{cust.amount}</td>
              <td>
                <span
                  className={`badge bg-${
                    cust.status === "Active" ? "success" : "danger"
                  }`}
                >
                  {cust.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Footer with Pagination + Page Selector */}
      <div className="d-flex justify-content-between align-items-center">
        <span>Showing 1 to 5 of {customers.length} entries</span>

        {/* Page Selector (Merged) */}
        <div className="d-flex align-items-center gap-2 border rounded px-3 py-2">
          <span className="text-muted">PAGE</span>
          <Form.Select
            size="sm"
            value={page}
            onChange={handlePageChange}
            style={{ width: "70px" }}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Select>
          <span className="text-muted">OF {totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;

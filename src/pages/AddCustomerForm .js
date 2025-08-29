import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button, Form, Row, Col } from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaQuoteRight,
  FaListUl,
  FaListOl,
  FaSubscript,
  FaSuperscript,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaCode,
} from "react-icons/fa";

const AddCustomerForm = () => {
  const [description, setDescription] = useState("Hello World!");

  return (
    <div className="container mt-4">
      <div
  className="d-flex align-items-center border rounded px-3 py-1"
  style={{ maxWidth: "300px" }}
>
  <FaSearch className="text-muted me-2" />
  <input
    type="text"
    className="form-control border-0 shadow-none p-0 flex-grow-1"
    placeholder="Search anything"
    style={{ fontSize: "14px", minWidth: "180px" }} // resized input
  />
</div>

      <h3 className="mb-2 text-start" mt-3>Add Customer</h3>
      <p className="text-muted text-start">
        You can add a customer by filling these fields.
      </p>

      <div className="p-4 border rounded bg-white shadow-sm">
        <Form>
          {/* Row 1 */}
          <Row className="mb-3">
            <Col md={3}>
              <Form.Group controlId="formName">
                <Form.Label className="fw-bold text-start d-block">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formPhone">
                <Form.Label className="fw-bold text-start d-block">Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone no." />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formEmail">
                <Form.Label className="fw-bold text-start d-block">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formAddress">
                <Form.Label className="fw-bold text-start d-block">Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row className="mb-3">
            <Col md={3}>
              <Form.Group controlId="formItem">
                <Form.Label className="fw-bold text-start d-block">Purchased Item</Form.Label>
                <Form.Control type="text" placeholder="Enter item" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formQuantity">
                <Form.Label className="fw-bold text-start d-block">Purchased Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter quantity" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formAmount">
                <Form.Label className="fw-bold text-start d-block">Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter amount" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formStatus">
                <Form.Label className="fw-bold text-start d-block">Status</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Description with Rich Text Editor */}
          <Row className="mb-4">
  <Col>
    <Form.Group controlId="formDescription">
      <Form.Label className="fw-bold text-start d-block">Description</Form.Label>


      {/* Textarea for Description */}
      <Form.Control
        as="textarea"
        rows={5}
        placeholder="Enter description here..."
        className="border rounded"
      />
    </Form.Group>
  </Col>
</Row>
           {/* Button Row */}
          <Row>
            <Col className="text-start">
              <Button variant="success">Add Customer</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddCustomerForm;

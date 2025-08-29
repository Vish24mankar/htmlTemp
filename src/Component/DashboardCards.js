// src/components/DashboardCards.jsx
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    {
      title: "Today's Sales",
      value: "$10,945",
      change: "4.63%",
      text: "vs. last week",
      changeColor: "text-success",
      arrow: <FaArrowUp className="me-1" />,
    },
    {
      title: "Today's Revenue",
      value: "$12,338",
      change: "2.34%",
      text: "vs. last week",
      changeColor: "text-danger",
      arrow: <FaArrowDown className="me-1" />,
    },
    {
      title: "Today's Customer",
      value: "$20,847",
      change: "4.63%",
      text: "vs. last week",
      changeColor: "text-success",
      arrow: <FaArrowUp className="me-1" />,
    },
    {
      title: "Today's Expense",
      value: "$23,485",
      change: "1.34%",
      text: "vs. last week",
      changeColor: "text-success",
      arrow: <FaArrowDown className="me-1" />,
    },
  ];

  return (
    <Row className="g-4">
      {cards.map((card, index) => (
        <Col key={index} md={6} lg={3}>
          <Card className="shadow-sm border-0 rounded-3 h-100">
            <Card.Body>
              <h6 className="text-muted">{card.title}</h6>
              <h3 className="fw-bold">{card.value}</h3>

              <div className="d-flex align-items-center mt-2">
                <span className={`${card.changeColor} fw-semibold`}>
                  {card.arrow} {card.change}
                </span>
                <small className="text-muted ms-2">{card.text}</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;

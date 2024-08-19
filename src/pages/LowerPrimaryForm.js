import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const LowerPrimaryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    otherNames: '',
    classGrade: '',
    phoneNumber: '',
    email: '',
  });

  const classes = [ // Replace with your actual class/grade options
    'Class 1',
    'Class 2',
    'Class 3',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container className="mt-4">
      <h2>Lower Primary Application Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formOtherNames">
              <Form.Label>Other Names</Form.Label>
              <Form.Control
                type="text"
                name="otherNames"
                value={formData.otherNames}
                onChange={handleChange}
                placeholder="Enter other names"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formClassGrade">
              <Form.Label>Class/Grade</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={formData.classGrade || "Select Class/Grade"}
                onSelect={handleChange}
                name="classGrade"
              >
                {classes.map((className) => (
                  <Dropdown.Item key={className} value={className}>
                    {className}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default LowerPrimaryForm;
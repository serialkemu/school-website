import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

import { Form, Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const CollegeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    otherNames: '',
    idNumber: '',
    course: '',
    phoneNumber: '',
    email: '',
  });

  const courses = [
    'Computer Science',
    'Mathematics',
    'Engineering',
  ];

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle dropdown selection
  const handleSelect = (value) => {
    setFormData({ ...formData, course: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Prepare form data object
      const formDataToSend = {
        firstName: formData.firstName,
        otherNames: formData.otherNames,
        idNumber: formData.idNumber,
        course: formData.course,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
      };
  
      // Log the data before sending the request for debugging
      console.log("Form data to send:", formDataToSend);
  
      // Send POST request to backend
      const response = await axios.post('http://localhost:5000/api/college', formDataToSend);
      console.log(response.data); // For debugging
  
      // Handle successful submission
      alert('Form submitted successfully!');
  
    } catch (error) {
      console.error(error);
      alert('Failed to submit form! Please try again.');
    }
  };

  return (
    <Container className="mt-4">
      <h2>College Application Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formotherNames">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="otherNames"
                value={formData.otherNames}
                onChange={handleInputChange}
                placeholder="Enter your last name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formIdNumber">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                placeholder="Enter your ID number"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCourse">
              <Form.Label>Course</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={formData.course || "Select Course"}
                onSelect={handleSelect}
              >
                {courses.map((course) => (
                  <Dropdown.Item key={course} eventKey={course}>
                    {course}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" >
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default CollegeForm;

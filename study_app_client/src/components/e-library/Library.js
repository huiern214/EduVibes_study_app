import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Library.css';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class ELibraryPage extends Component {
  // Your e-book data (replace with your actual data)
  ebooks = [
    {
        id: 1,
        title: 'E-Book 1',
        description: 'Description of E-Book 1',
        imageUrl: 'placeholder1.jpg', // Replace with actual image URL
    },
    {
        id: 2,
        title: 'E-Book 2',
        description: 'Description of E-Book 2',
        imageUrl: 'placeholder2.jpg', // Replace with actual image URL
    },
    {
        id: 3,
        title: 'E-Book 2',
        description: 'Description of E-Book 2',
        imageUrl: 'placeholder2.jpg', // Replace with actual image URL
    },
    {
        id: 4,
        title: 'E-Book 2',
        description: 'Description of E-Book 2',
        imageUrl: 'placeholder2.jpg', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'E-Book 2',
        description: 'Description of E-Book 2',
        imageUrl: 'placeholder2.jpg', // Replace with actual image URL
    },
    {
        id: 6,
        title: 'E-Book 2',
        description: 'Description of E-Book 2',
        imageUrl: 'placeholder2.jpg', // Replace with actual image URL
    },
    // Add more e-book objects as needed
  ];

  render() {
    return (
      <div>
        {/* Search bar */}
        {/* <div className="search-bar"> */}
          {/* Add your search bar component here */}
          {/* <input type="text" placeholder="Search..." />
        </div> */}

        {/* Upload and Share buttons */}
        {/* <div className="buttons">
          <Button variant="primary">Upload</Button>
          <Button variant="secondary">Share</Button>
        </div> */}

        <div className="search-container">
          <input
            type="text"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            placeholder="Search..."
          />
          <Button className="search-button" type="submit">
            Search
          </Button>
          <Button className="search-button" type="submit">
            Upload
          </Button>
        </div>

        <Container style={{ width: '60rem' }}>
            <Row>
                {this.ebooks.map((ebook) => (
                <Col key={ebook.id} xs={12} md={4}>
                    <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={ebook.imageUrl} />
                    <Card.Body>
                        <Card.Title>{ebook.title}</Card.Title>
                        <Card.Text>{ebook.description}</Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
      </div>
    );
  }
}

export default ELibraryPage;

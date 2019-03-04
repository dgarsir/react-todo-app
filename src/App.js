import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1>React Based ToDo List</h1>
          </header> 
          <ListGroup>
            <ListGroup.Item>
              <Card className="bg-light border rounded">
                <Card.Body className="text-left">
                  <h5 >This is a title</h5>
                  <p>This is the description</p>
                </Card.Body>
              </Card>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card className="bg-light border rounded">
                <Card.Body className="text-left">
                  <h5 >This is another title</h5>
                  <p>This is another description</p>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
          <h2>Add A ToDo</h2>
          <Form className="text-left">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter Description" />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;

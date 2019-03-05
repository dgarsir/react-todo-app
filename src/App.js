import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


let ListTodos = (props) => {
  const todos = [...this.state.todos];
  return todos.map(
    item => (
      <ListGroup.Item key={item.key}>
      <Card className="bg-light border rounded">
        <span 
        className="text-right"
        onClick={props.close}>{'\u274e'}</span>
        <Card.Body className="text-left">
          <h5 >{item.title}</h5>
          <p>{item.description}</p>
        </Card.Body>
      </Card>
    </ListGroup.Item>
    )
  )
}

class App extends Component {
  state={
    todos: [
      { key: String(Math.floor(1000*Math.random())),
        title: 'Walk the cat',
       description: 'She is going crazy'},
      { key: String(Math.floor(1000*Math.random())),
        title: 'Pacify Aliens',
       description: 'They don\'t want to hear Halloween jokes anymore'}
    ],
    collapse: false,
    formTitle: '',
    formDescription: ''
  }



  addTodoHandler = (event) => {
    event.preventDefault();
    let newTodo = {
      key: String(Math.floor(1000*Math.random())),
      title: this.state.formTitle,
      description: this.state.formDescription
    };
    this.setState({todos:[...this.state.todos,newTodo]});
    this.setState({formTitle:''});
    this.setState({formDescription:''})
  }
  render = () => {
    console.log(this.listTodos())
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Based ToDo List</h1>
          </header> 
          <ListGroup>
            <ListTodos close={(e)=>{console.log(e.target.key)}}/>
          </ListGroup>
          <h2 className='text-left'>Add A ToDo</h2>
          <Form className="text-left" onSubmit={this.addTodoHandler}>
            <Form.Group controlId="formToDo">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Title" 
                value={this.state.formTitle}
                onChange={(e) => this.setState({formTitle: e.target.value})}/>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
                rows="3" 
                placeholder="Enter Description" 
                value={this.state.formDescription}
                onChange={(e) => this.setState({formDescription:e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
            Add Todo
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;

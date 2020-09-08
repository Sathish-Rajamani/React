import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage';
import HomePage2 from './homePage2';
import { Navbar, Form, Nav, Button, NavDropdown, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TodoApp from './features/to-do/TodoApp';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Templates" id="basic-nav-dropdown">
								<NavDropdown.Item href="">
									<Link to="/HomePage1">HomePage1</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="">
									<Link to="/HomePage2">HomePage2</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="">
									<Link to="/to-do">To-do list using redux</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<Switch>
					<Route path="/HomePage1">
						<HomePage />
					</Route>
					<Route path="/HomePage2">
						<HomePage2 />
					</Route>
					<Route path="/to-do">
						<TodoApp />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

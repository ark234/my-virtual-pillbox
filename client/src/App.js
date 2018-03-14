import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TokenService from './services/TokenService';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {},
			token: {}
		};

		this.checkLogin = this.checkLogin.bind(this);
	}

	// API call for registration
	register(data) {
		axios('http://localhost:3000/users', {
			method: 'POST',
			data
		})
			.then(response => {
				console.log('Registration successful. Response Data:', response.data);
				TokenService.save(response.data.token);
				this.setState({
					user: response.data.user,
					token: response.data.token
				});
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	// API call for login
	login(data) {
		axios('http://localhost:3000/users/login', {
			method: 'POST',
			data
		})
			.then(response => {
				console.log('Login successful. Response Data:', response.data);
				TokenService.save(response.data.token);
				this.setState({
					user: response.data.user,
					token: response.data.token
				});
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	// Example restricted route using Authorization header
	authClick(e) {
		e.preventDefault();
		axios('http://localhost:3000/prescriptions/', {
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		})
			.then(response => console.log(`Response: ${JSON.stringify(response.data)}`))
			.catch(error => console.log(`Error: ${error}`));
	}

	// delete token to logout
	logout(e) {
		e.preventDefault();
		TokenService.destroy();
	}

	// check if user's logged in
	checkLogin() {
		axios('http://localhost:3000/isLoggedIn', {
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		})
			.then(response => {
				console.log(`Response: ${JSON.stringify(response.data)}`);
				this.setState({
					user: response.data
				});
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	componentDidMount() {
		this.checkLogin();
	}

	render() {
		return (
			<div>
				<nav>
					<button onClick={this.authClick.bind(this)}>Weird Button</button>
					<button onClick={this.checkLogin.bind(this)}>Check If Logged In</button>
					{/* <button onClick={this.logout.bind(this)}>Logout</button> */}
				</nav>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={props => <Login {...props} submit={this.login.bind(this)} />} />
						<Route
							exact
							path="/register"
							component={props => <Register {...props} submit={this.register.bind(this)} />}
						/>
						<Route exact path="/home" render={props => (this.state.user ? <Home {...props} /> : <Redirect to="/" />)} />
						{/* <Route exact path="/home" component={props => <Home {...props} />} /> */}
						{/* <Route exact path="/login" component={props => <Login {...props} submit={this.login.bind(this)} />} /> */}
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

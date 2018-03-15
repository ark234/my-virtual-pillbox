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
	resetState() {
		this.setState({
			user: {},
			token: {},
			prescriptions: [],
			isAuthed: false
		});
	}

	constructor(props) {
		super(props);

		this.state = {
			user: {},
			token: {},
			prescriptions: [],
			isAuthed: false
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
					token: response.data.token,
					isAuthed: true
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
				// console.log('Login successful. Response Data:', response.data);
				TokenService.save(response.data.token);
				this.setState(
					{
						user: response.data.user,
						token: response.data.token,
						prescriptions: response.data.prescriptions,
						isAuthed: true
					},
					() => console.log('Login Successful! Updating state:', this.state)
				);
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	// Restricted route to retrieve user's prescriptions
	getPrescriptions() {
		// e.preventDefault();
		axios('http://localhost:3000/prescriptions/', {
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		})
			.then(response => {
				console.log(`RX Data Retrieved: ${JSON.stringify(response.data)}`);
				this.setState({ prescriptions: response.data.prescriptions });
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	// delete token to logout
	logout(e) {
		e.preventDefault();
		TokenService.destroy();
		// this.setState({ isAuthed: false });
		this.resetState();
		console.log('Logout successful...');
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
					user: response.data,
					isAuthed: true
				});
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	componentDidMount() {
		this.checkLogin();
		this.getPrescriptions();
	}

	render() {
		return (
			<div>
				<nav>
					{/* <button onClick={this.getPrescriptions.bind(this)}>Get RX</button> */}
					{/* <button onClick={this.checkLogin.bind(this)}>Check If Logged In</button> */}
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

						<Route
							exact
							path="/home"
							component={props => (
								<Home {...props} prescriptions={this.state.prescriptions} logout={this.logout.bind(this)} />
							)}
						/>
						{/* <Route
							exact
							path="/home"
							// component={props => <Home {...props} logout={this.logout.bind(this)} />}
							render={props =>
								this.state.isAuthed ? (
									<Home {...props} prescriptions={this.state.prescriptions} logout={this.logout.bind(this)} />
								) : (
									<Redirect to="/" />
								)
							}
						/> */}
						{/* <Route exact path="/login" component={props => <Login {...props} submit={this.login.bind(this)}  />} /> */}
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

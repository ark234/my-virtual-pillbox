import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TokenService from './services/TokenService';

class App extends Component {
	// API call for registration
	register(data) {
		axios('http://localhost:3000/users', {
			method: 'POST',
			data
		})
			.then(response => {
				TokenService.save(response.data.token);
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
				TokenService.save(response.data.token);
			})
			.catch(error => console.log(`Error: ${error}`));
	}

	// Example restricted route using Authorization header
	authClick(e) {
		e.preventDefault();
		axios('http://localhost:3000/prescriptions', {
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		})
			.then(response => console.log(`Response: ${response}`))
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
			.then(response => console.log(`Response: ${response}`))
			.catch(error => console.log(`Error: ${error}`));
	}

	render() {
		return (
			<div>
				<div>
					Weird button: <button onClick={this.authClick.bind(this)}>Weird Button</button>
					<p>
						<button onClick={this.checkLogin.bind(this)}>Check If Logged In</button>
					</p>
					<p>
						<button onClick={this.logout.bind(this)}>Logout</button>
					</p>
				</div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={props => <Login {...props} submit={this.login.bind(this)} />
						<Route
							exact
							path="/register"
							component={props => <Register {...props} submit={this.register.bind(this)} />}
						/>
						// <Route exact path="/login" component={props => <Login {...props} submit={this.login.bind(this)} />} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

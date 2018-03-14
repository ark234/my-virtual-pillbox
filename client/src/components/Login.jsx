import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(data) {
		console.log(`handling submit: ${JSON.stringify(data)}`);
		this.props.submit(data);
		this.props.history.push('/home');
	}

	render() {
		return (
			<div>
				<h2>Login</h2>
				<UserForm submit={this.onSubmit} />
				<p>
					<Link to="/register">Register</Link>
				</p>
			</div>
		);
	}
}

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
			<div className="form-container">
				<div className="form-item">
					<h2>Login</h2>
				</div>
				<div className="form-item">
					<UserForm submit={this.onSubmit} />
				</div>
				<div className="form-item">
					<Link className="form-link" to="/register">
						Register
					</Link>
				</div>
				<div className="footer" />
			</div>
		);
	}
}

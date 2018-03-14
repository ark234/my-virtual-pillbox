import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(data) {
		this.props.submit(data);
		this.props.history.push('/home');
	}

	render() {
		return (
			<div>
				<h2>Register</h2>
				<UserForm submit={this.onSubmit} />
				<p>
					<Link to="/">Login</Link>
				</p>
			</div>
		);
	}
}

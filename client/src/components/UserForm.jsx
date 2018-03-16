import React, { Component } from 'react';

export default class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// send state back to parent
	handleSubmit(e) {
		e.preventDefault();
		this.props.submit(this.state);
	}

	// dynamically update state as you type
	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<label className="form-label">
					<p className="form-item">Username</p>
					<input
						className="form-input"
						type="text"
						name="username"
						onChange={this.handleChange}
						value={this.state.username}
					/>
				</label>
				<br />
				<label className="form-label">
					<p className="form-item">Password</p>
					<input
						className="form-input"
						type="password"
						name="password"
						onChange={this.handleChange}
						value={this.state.password}
					/>
				</label>
				<br />
				<button className="form-submit-btn" type="submit" value="Submit">
					Submit
				</button>
			</form>
		);
	}
}

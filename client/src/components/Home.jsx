import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.logout;
		console.log('Logging out...');
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<div>Home</div>
				<button onClick={this.handleClick}>Logout</button>
			</div>
		);
	}
}

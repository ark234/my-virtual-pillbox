import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Prescriptions from './Prescriptions';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.logout;
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<div>Home</div>
				<button onClick={this.props.logout}>Logout</button>
				<Prescriptions prescriptions={this.props.prescriptions} />
			</div>
		);
	}
}

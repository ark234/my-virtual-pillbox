import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Prescriptions from './Prescriptions';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		this.props.logout;
		this.props.history.push('/');
		console.log('clicked!');
	}

	render() {
		return (
			<div>
				<div>Home</div>
				<button onClick={this.clickHandler}>Logout</button>
				<Prescriptions prescriptions={this.props.prescriptions} />
			</div>
		);
	}
}

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>Home</div>
				<button onClick={this.props.logout}>Logout</button>
			</div>
		);
	}
}

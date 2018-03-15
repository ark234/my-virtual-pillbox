import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Prescription extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const route = `/prescriptions/${this.props.rx.id}`;

		return (
			<ul>
				<li>
					<button>Take</button>
				</li>
				<li>
					<Link to={route}>{this.props.rx.name}</Link>
				</li>
				<li>{this.props.rx.count_goal - this.props.rx.taken}</li>
			</ul>
		);
	}
}

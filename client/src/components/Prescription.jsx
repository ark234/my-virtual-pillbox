import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Prescription extends Component {
	render() {
		const route = `/prescriptions/${this.props.rx.id}`;

		return (
			<li className="rx-list-item">
				<button>Take</button>
				<Link to={route}>{this.props.rx.name}</Link>
				<span>
					{this.props.rx.count_goal - this.props.rx.taken} ({this.props.rx.recurring_period})
				</span>
			</li>
		);
	}
}

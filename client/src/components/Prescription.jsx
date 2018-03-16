import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Prescription extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		this.props.takePill(this.props.rx.id);
	}

	render() {
		const route = `/prescriptions/${this.props.rx.id}`;

		return (
			<li className="rx-list-item">
				<div className="rx-item">
					<button className="take-pill-btn" onClick={this.clickHandler}>
						Take
					</button>
				</div>
				<Link to={route} className="rx-item">
					{this.props.rx.name}
				</Link>
				<span className="rx-item">
					{this.props.rx.count_goal - this.props.rx.taken} ({this.props.rx.recurring_period})
				</span>
			</li>
		);
	}
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Prescription extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const prescriptions = this.props.prescriptions.map((el, i) => {
			const route = `/prescriptions/${el.id}`;
			return (
				<div key={i}>
					<button>Take</button>
					<span>
						<Link to={route}>{el.name}</Link>
					</span>
					<span>{el.taken}</span>
					<span>{el.count_goal}</span>
				</div>
			);
		});
		return <div>{prescriptions}</div>;
	}
}

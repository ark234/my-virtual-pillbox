import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Prescription from './Prescription';

export default class Prescriptions extends Component {
	render() {
		console.log('PrEsCrIpTiOns:', this.props.prescriptions);
		const prescriptions = this.props.prescriptions.map((el, i) => {
			return <Prescription rx={el} key={el.id} />;
		});
		return (
			<div>
				<ul className="rx-list-labels">
					<h5>Take</h5>
					<h5>Name</h5>
					<h5>Remaining</h5>
				</ul>
				<ul className="rx-list">{prescriptions}</ul>
				<Link to="/prescriptions/new">Add Prescription</Link>
			</div>
		);
	}
}

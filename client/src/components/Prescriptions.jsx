import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Prescription from './Prescription';

export default class Prescriptions extends Component {
	render() {
		console.log('PrEsCrIpTiOns:', this.props.prescriptions);
		const prescriptions = this.props.prescriptions.map((el, i) => {
			return <Prescription takePill={this.props.takePill} rx={el} key={el.id} />;
		});
		return (
			<div className="rx-list-container">
				<ul className="rx-list-labels">
					<li className="rx-label">
						<h5>Take</h5>
					</li>
					<li className="rx-label">
						<h5>Name</h5>
					</li>
					<li className="rx-label">
						<h5>Remaining</h5>
					</li>
				</ul>
				<ul className="rx-list">{prescriptions}</ul>
				<div className="link-container">
					<Link to="/prescriptions/new">Add Prescription</Link>
				</div>
				<div className="footer" />
			</div>
		);
	}
}

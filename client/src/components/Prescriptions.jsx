import React, { Component } from 'react';
export default class Prescription extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const prescriptions = this.props.prescriptions.map((el, i) => {
			return (
				<div key={i}>
					<h1>{el.name}</h1>
				</div>
			);
		});
		return <div>{prescriptions}</div>;
	}
}

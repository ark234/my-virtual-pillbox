import React, { Component } from 'react';

export default class PrescriptionDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rxid = this.props.match.params.id;
		console.log('rxid', rxid);
		const rx = this.props.prescriptions.filter(el => el.id == rxid);
		console.log('rx:', rx);
		// WTF IS GOING ON
		return (
			<ul>
				<li>
					<h1>hi</h1>
				</li>
			</ul>
		);
	}
}

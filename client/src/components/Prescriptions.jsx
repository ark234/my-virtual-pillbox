import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Prescription from './Prescription';

export default class Prescriptions extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const prescriptions = this.props.prescriptions.map((el, i) => {
			return <Prescription rx={el} key={el.id} />;
		});
		return <div>{prescriptions}</div>;
	}
}

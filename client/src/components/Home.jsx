import React, { Component } from 'react';
import Prescriptions from './Prescriptions';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		this.props.logout();
		this.props.history.push('/');
		console.log('clicked!');
	}

	render() {
		return (
			<div className="container">
				<button className="logout-btn" onClick={this.clickHandler} />
				<Prescriptions takePill={this.props.takePill} prescriptions={this.props.prescriptions} />
			</div>
		);
	}
}

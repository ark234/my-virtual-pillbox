import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class PrescriptionDetail extends Component {
	constructor(props) {
		super(props);

		this.deleteHandler = this.deleteHandler.bind(this);
	}

	deleteHandler() {
		this.props.deleteRx(this.props.match.params.id);
		this.props.history.push('/home');
	}

	render() {
		const rxid = this.props.match.params.id;
		console.log('rxid', rxid);
		const rx = this.props.rx.find(el => el.id == rxid);
		console.log('rx:', rx);

		if (rx) {
			return (
				<div>
					<Link to="/home">Go Back</Link>
					<ul>
						<li>
							<h1>{rx.name}</h1>
						</li>
						<li>
							<p>
								Dose: {rx.dose} {rx.recurring_period}
							</p>
						</li>
						<li>
							<p>
								Goal: {rx.taken}/{rx.count_goal} taken
							</p>
						</li>
						<li>
							<p>
								Last Taken:&nbsp;
								{rx.last_taken ? moment(rx.last_taken).format('MM/DD/YY hh:mm a') : 'n/a'}
							</p>
						</li>
						<li>
							<p>
								Course Start Date:&nbsp;
								<Moment format="MM/DD/YYYY">{rx.start_date}</Moment>
							</p>
						</li>
						<li>
							<p>
								Course End Date:&nbsp;
								<Moment format="MM/DD/YYYY">{rx.end_date}</Moment>
							</p>
						</li>
						<li>
							<p>Notes: {rx.notes}</p>
						</li>
					</ul>
					<Link to={`/prescriptions/${rxid}/edit`}>Edit</Link>
					<button onClick={this.deleteHandler}>Delete</button>
				</div>
			);
		} else {
			return <p>loading</p>;
		}
	}
}

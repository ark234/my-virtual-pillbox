import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class EditPrescription extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			dose: '',
			count_goal: 0,
			recurring_period: 'daily',
			start_date: '',
			end_date: '',
			notes: '',
			taken: 0,
			goal_is_met: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// send state back to parent
	handleSubmit(e) {
		e.preventDefault();
		// since setState is async we want to wait for it to finish
		// before submitting and redirecting
		this.setState(prevState => {
			return {
				start_date: moment(prevState.start_date),
				end_date: moment(prevState.end_date)
			};
		}, this.submitAndRedirect);
	}

	submitAndRedirect() {
		this.props.submit(this.state, this.props.match.params.id);
		this.props.history.push('/home');
	}

	// dynamically update state as you type
	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	componentDidMount() {
		const rxid = this.props.match.params.id; // grabs rx id from params
		const rx = this.props.prescriptions.find(el => el.id == rxid); // returns single prescription
		console.log('rx ---->', rx);
		this.setState({
			name: rx.name,
			dose: rx.dose,
			count_goal: rx.count_goal,
			recurring_period: rx.recurring_period,
			start_date: rx.start_date,
			end_date: rx.end_date,
			notes: rx.notes,
			taken: rx.taken,
			goal_is_met: rx.goal_is_met
		});
	}

	render() {
		return (
			<div>
				<Link to="/home">Go Back</Link>
				<h1>Edit Prescription</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
					</label>
					<br />
					<label>
						Dose:
						<input type="text" name="dose" onChange={this.handleChange} value={this.state.dose} />
					</label>
					<br />
					<label>
						Recurring Period:
						<select name="recurring_period" onChange={this.handleChange} value={this.state.recurring_period}>
							<option defaultValue="daily">Daily</option>
							<option value="weekly">Weekly</option>
							<option value="monthly">Monthly</option>
							<option value="yearly">Yearly</option>
							<option value="every_other_day">Every Other Day</option>
							<option value="every_other_week">Every Other Week</option>
						</select>
					</label>
					<br />
					<label>
						Intake Goal:
						<input type="number" name="count_goal" onChange={this.handleChange} value={this.state.count_goal} />
					</label>
					<br />
					<label>
						Pills Taken:
						<input type="number" name="taken" onChange={this.handleChange} value={this.state.taken} />
					</label>
					<br />
					<label>
						Start Date:
						<input type="text" name="start_date" onChange={this.handleChange} value={this.state.start_date} />
					</label>
					<br />
					<label>
						End Date:
						<input type="text" name="end_date" onChange={this.handleChange} value={this.state.end_date} />
					</label>
					<br />
					<label>
						Notes:
						<input type="textarea" name="notes" onChange={this.handleChange} value={this.state.notes} />
					</label>
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

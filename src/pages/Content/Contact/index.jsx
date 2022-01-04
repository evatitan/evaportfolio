import React, { Component } from 'react';
import './index.css';

export default class Contact extends Component {
	state = {
		name: '',
		subject: '',
		message: ''
	};

	handleName = (event) => {
		const name = event.target.value;
		this.setState({ name });
	};

	handleSubject = (event) => {
		const subject = event.target.value;
		this.setState({ subject });
	};

	handleMessage = (event) => {
		const message = event.target.value;
		this.setState({ message });
	};

	render() {
		const { name, subject, message } = this.state;
		return (
			<div className="contact-page">
				<div className="contact-form">
					<h2 className="contactTitle">Contact with me</h2>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input className="input" type="text" placeholder="Your name" onChange={this.handleName} />
						</div>
					</div>

					<div className="field">
						<label className="label">Subject</label>
						<div className="control">
							<input className="input" type="text" placeholder="Subject" onChange={this.handleSubject} />
						</div>
					</div>
					<div className="field">
						<label className="label">Message</label>
						<div className="control">
							<textarea className="textarea" placeholder="Your message" onChange={this.handleMessage} />
						</div>
					</div>

					<div className="field is-grouped">
						<div className="control ">
							<a
								id="mail"
								target="_top"
								href={`mailto:yinguihua2014@gmail.com?subject=${subject}&body=${message}%0A---${name}`}
							>
								<span className="button is-link c">Send Email</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

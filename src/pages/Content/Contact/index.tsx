import React, { Component, ChangeEvent } from 'react';
import './index.css';
import github from '../../../assets/icons/github.svg';
import linkedin from '../../../assets/icons/linkedin.svg';

interface ContactState {
  name: string;
  subject: string;
  message: string;
}

export default class Contact extends Component<{}, ContactState> {
  state: ContactState = {
    name: '',
    subject: '',
    message: '',
  };

  handleName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleSubject = (event: ChangeEvent<HTMLInputElement>) => {
    const subject = event.target.value;
    this.setState({ subject });
  };

  handleMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const message = event.target.value;
    this.setState({ message });
  };

  render() {
    const { name, subject, message } = this.state;
    return (
      <div className="contact-page">
        <div className="contact-form">
          <h1 className="contactTitle">Contact with me</h1>
          <div className="field">
            <label>Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Your name"
                onChange={this.handleName}
              />
            </div>
          </div>

          <div className="field">
            <label>Subject</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Subject"
                onChange={this.handleSubject}
              />
            </div>
          </div>
          <div className="field">
            <label>Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your message"
                onChange={this.handleMessage}
              />
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

        <div className="contact-icons">
          <a href="https://github.com/evatitan">
            <img className="contact-icon" src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/guihua-yin-a04191b7/">
            <img className="contact-icon" src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

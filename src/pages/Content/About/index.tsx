import React, { Component } from 'react';

import './index.css';
import eva from '../../../assets/eva.jpeg';

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <section id="about">
          <div className="about-container">
            <div className="about-text">
              That's me!
              <br />A passionate web developer and educator. I enjoy creating innovative web
              applications and sharing my knowledge with others.
            </div>
            <div className="about-image">
              <img className="selfImage" src={eva} alt="eva" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

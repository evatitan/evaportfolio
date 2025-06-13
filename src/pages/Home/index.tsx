import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import DigitalClock from '../../components/DigitalClock';
import './index.css';
library.add(fab, faArrowCircleDown);

interface HomeState {
  isLoading: boolean;
}

export default class Home extends Component<{}, HomeState> {
  state = {
    isLoading: false,
  };

  componentDidMount(): void {
    const myName = document.querySelector('.my-name') as HTMLDivElement;
    if (!myName) return;

    const myNameLetters = myName.textContent?.split('') || [];
    myName.textContent = '';

    myNameLetters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.className = 'homeSpan';
      span.textContent = letter;
      span.style.animationDelay = `${index / 6}s`;
      myName.appendChild(span);
    });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="home-page">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="home-presentation">
            <div className="my-name">Guihua Yin</div>
            <div className="my-position">
              Full Stack Web Developer
              <br />
              Base in Spain
            </div>
            <div id="clock">{/* <DigitalClock /> */}</div>

            <div className="home-contact">
              <a href="https://github.com/evatitan">
                <FontAwesomeIcon className="home-icon" icon={['fab', 'github']} />{' '}
              </a>
              &nbsp; &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/guihua-yin-a04191b7/">
                <FontAwesomeIcon className="home-icon" icon={['fab', 'linkedin']} />
              </a>
              &nbsp; &nbsp;&nbsp;
              <a href="https://www.instagram.com/yin.guihua/">
                <FontAwesomeIcon className="home-icon" icon={['fab', 'instagram-square']} />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

import { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import eva from '../../../src/assets/eva.jpeg';
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
          <>
            <div className="home-presentation">
              <img className="self-image" src={eva} alt="eva" />
              <div className="my-name">Guihua Yin</div>
              <div className="my-position">
                Full Stack Web Developer
                <br />
                &
                <br />
                language educator
                <br />
                Base in Spain
                <br />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

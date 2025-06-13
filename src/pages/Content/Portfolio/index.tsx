import React, { PureComponent, Fragment } from 'react';

import Item from './Item';
import urTurn from '../../../assets/urturn.png';
import evaResume from '../../../assets/evaResume.png';
import todoList from '../../../assets/todoList.png';
import './index.css';

interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  webSrc: string;
  internal: boolean;
  githubSrc: string;
}

interface PortfolioState {
  projects: Project[];
  hasError: Error | string;
}

export default class Portfolio extends PureComponent<{}, PortfolioState> {
  state: PortfolioState = {
    projects: [
      {
        id: '001',
        name: 'Resume',
        description: 'React',
        img: evaResume,
        webSrc: '/home',
        internal: true,
        githubSrc: 'https://github.com/evatitan/perfil',
      },
      {
        id: '002',
        name: 'TodoList',
        description: 'react-redux',
        img: todoList,
        webSrc: '/portfolio/todoList',
        internal: true,
        githubSrc: 'https://github.com/evatitan/ReactApps',
      },
      {
        id: '003',
        name: 'UrTurn',
        description: 'Angular',
        img: urTurn,
        internal: false,
        webSrc: 'https://urturn.herokuapp.com/',
        githubSrc: 'https://github.com/evatitan/UrTurn',
      },
    ],
    hasError: '',
  };

  static getDerivedStateFromError(error: Error): Partial<PortfolioState> {
    return { hasError: error };
  }

  componentDidCatch(error: Error): void {
    console.log(error);
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="portfolio-page">
        <div className="columns is-mobile is-multiline is-centered myColumns">
          {this.state.hasError ? (
            <h2>The internet is bad, please try it later.</h2>
          ) : (
            projects.map(projectObj => {
              return <Item key={projectObj.id} {...projectObj} />;
            })
          )}
        </div>
      </div>
    );
  }
}

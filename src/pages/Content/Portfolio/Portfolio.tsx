import { PureComponent } from 'react';

import ProjectItem from './Item/Item';
import chinolesSayingsImg from '../../../assets/projects/chinolessayings.png';
import evablog from '../../../assets/projects/evablog.png';
import nottodo from '../../../assets/projects/nottodo.png';
import portfolio from '../../../assets/projects/portfolio.png';
import goFastIMSystem from '../../../assets/projects/goFastIMSystem.png';
import './Portfolio.css';

const projects = [
  {
    title: 'Chinoles-sayings',
    description:
      'A React application that helps users learn and explore common Spanish sayings (dichos).',
    image: chinolesSayingsImg,
    techStack: ['CSS', 'HTML', 'REACT', 'VITE', 'TYPESCRIPT', 'JAVASCRIPT'],
    links: {
      live: 'https://chinoles-sayings.vercel.app/',
      github: 'https://github.com/evatitan/chinoles_sayings',
    },
  },
  {
    title: 'Evablog',
    description: 'A personal blog built with Next.js, showcasing my thoughts and experiences.',
    image: evablog,
    techStack: ['REACT', 'NEXT', 'JAVASCRIPT'],
    links: {
      live: 'https://evablog-two.vercel.app/',
      github: 'https://github.com/evatitan/evablog',
    },
  },
  {
    title: 'NotTodo',
    description:
      'A fullstack application that allows users to create, read, update, and delete "not-todo".',
    image: nottodo,
    techStack: ['HTML', 'CSS', 'EXPRESS', 'MYSQL', 'JAVASCRIPT', 'NODEJS'],
    links: {
      live: 'https://github.com/evatitan/Not-Todo',
      github: 'https://github.com/evatitan/Not-Todo',
    },
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio website showcasing my projects and skills.',
    image: portfolio,
    techStack: ['REACT', 'JAVASCRIPT', 'TYPESCRIPT'],
    links: {
      live: 'https://chinoles-sayings.vercel.app/',
      github: 'https://github.com/evatitan/CV_evatitan',
    },
  },
  {
    title: 'goFastIMSystem',
    description:
      'A fast and efficient instant messaging system built with Go, designed for real-time communication.',
    image: goFastIMSystem,
    techStack: ['GOLANG'],
    links: {
      live: 'https://github.com/evatitan/goFastIMSystem',
      github: 'https://github.com/evatitan/goFastIMSystem',
    },
  },
];

interface PortfolioState {
  hasError: Error | string;
}

export default class Portfolio extends PureComponent<{}, PortfolioState> {
  state: PortfolioState = {
    hasError: '',
  };

  static getDerivedStateFromError(error: Error): Partial<PortfolioState> {
    return { hasError: error };
  }

  componentDidCatch(error: Error): void {
    console.log(error);
  }

  render() {
    return (
      <div className="portfolio-page">
        <div className="projects-scroll">
          {this.state.hasError ? (
            <h2>The internet is bad, please try it later.</h2>
          ) : (
            projects.map((project, index) => (
              <ProjectItem
                key={index}
                name={project.title}
                description={project.description}
                img={project.image}
                techStack={project.techStack}
                webSrc={project.links.live}
                internal={false}
                githubSrc={project.links.github}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css';
library.add(faLaptop, faGithub);

interface ItemProps {
  name: string;
  description: string;
  techStack: Array<string>;
  img: string;
  webSrc: string;
  internal: boolean;
  githubSrc: string;
}

export default class ProjectItem extends PureComponent<ItemProps> {
  render() {
    const { name, description, img, techStack, webSrc, internal, githubSrc } = this.props;
    return (
      <>
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img className="projectImg" src={img} alt="img" />
              </figure>
            </div>

            <div className="card-content">
              <strong>{name}</strong>
              <br />
              <span>{techStack && techStack.join(', ')}</span>
              <br /> <i>{description}</i>
            </div>

            <footer className="card-footer">
              {internal && (
                <Link to={webSrc} className="card-footer-item">
                  <FontAwesomeIcon icon={faLaptop} />
                </Link>
              )}

              {!internal && (
                <a href={webSrc} rel="noopener" className="card-footer-item">
                  <FontAwesomeIcon icon={faLaptop} />
                </a>
              )}

              <a href={githubSrc} rel="noopener" className="card-footer-item">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

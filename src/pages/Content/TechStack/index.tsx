import './index.css';

const techIcons = {
  frontend: [
    { name: 'html', alt: 'HTML' },
    { name: 'css', alt: 'CSS' },
    { name: 'js', alt: 'JavaScript' },
    { name: 'typescript', alt: 'TypeScript' },
    { name: 'react', alt: 'React' },
    { name: 'next', alt: 'Next.js' },
    { name: 'reactBootstrap', alt: 'Bootstrap' },
    { name: 'material', alt: 'Material UI' },
    { name: 'tailwind', alt: 'Tailwind UI' },
  ],
  backend: [
    { name: 'node', alt: 'Node.js' },
    { name: 'golang', alt: 'Golang' },
    { name: 'express', alt: 'Express.js' },
    { name: 'knex', alt: 'Knex.js' },
    { name: 'jest', alt: 'Jest' },
  ],
  database: [
    { name: 'mysql', alt: 'MySQL' },
    { name: 'redis', alt: 'Redis' },
    { name: 'postgresql', alt: 'PostgreSQL' },
    { name: 'mongodb', alt: 'MongoDB' },
  ],
  devops: [
    { name: 'github', alt: 'GitHub' },
    { name: 'gitlab', alt: 'GitLab' },
    { name: 'tortoiseGit', alt: 'TortoiseGit' },
    { name: 'docker', alt: 'Docker' },
    { name: 'linux', alt: 'Linux' },
    { name: 'windows', alt: 'Windows' },
  ],
  communication: [
    { name: 'teams', alt: 'Teams' },
    { name: 'slack', alt: 'Slack' },
    { name: 'discord', alt: 'Discord' },
    { name: 'zoom', alt: 'Zoom' },
  ],
};

const TechStack = () => {
  return (
    <div className="tech-stack">
      <div className="tech-content">
        <div className="tech-description">
          <h2>Tech Journey</h2>
          <h3>
            Passionate about modern web technologies and continuous learning. Experienced in both
            frontend and backend development, with a focus on:
          </h3>
          <br />
          <ul>
            <li>Modern JavaScript/TypeScript ecosystem</li>
            <li>Full-stack web development</li>
            <li>Database management & optimization</li>
            <li>DevOps & deployment automation</li>
          </ul>
        </div>

        <div className="tech-list">
          {Object.entries(techIcons).map(([category, icons], index) => (
            <div key={category} className={`tech-row row${index + 1}`}>
              <div className="tech-icons">
                {icons.map(icon => (
                  <img
                    key={icon.name}
                    src={require(`../../../assets/icons/${icon.name}.svg`)}
                    className="tech-svg"
                    alt={icon.alt}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

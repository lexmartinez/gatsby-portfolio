import React from 'react'
import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
    const { config = {} } = { ...props }
    const { projects = {} } = { ...config }
    const { featured = {}, others = {} } = { ...projects }
    return (
      <React.Fragment>
        <section className={'projects'}>
          <div className={'title'}>
            <h1>{featured.title}</h1>
            <h3>{featured.subtitle}</h3>
          </div>
          <div className={'project-grid'}>
            { (featured.items || []).map((project, index) => <ProjectCard project={project} key={index}/>) }
          </div>
          {!!others.items && <h1 className={'other-title'}>{others.title}</h1>}
          {!!others.items && <div className={'project-grid open-source'}>
            { (others.items || []).map((project, index) => <ProjectCard project={project} key={index}/>) }
          </div>}
        </section>
      </React.Fragment>
    );
};

Projects.propTypes = { config: PropTypes.object.isRequired };

export default Projects;
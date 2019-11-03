import React from 'react'
import PropTypes from 'prop-types'

const Projects = (props) => {
    return (
      <React.Fragment>
        <section className={'projects'}>
          <div className={'title'}>
            <h1>Recent Work</h1>
            <h3>Some Things I've Built</h3>
          </div>
          <h1 className={'other-title'}>Other Projects</h1>
        </section>
      </React.Fragment>
    );
};

export default Projects;
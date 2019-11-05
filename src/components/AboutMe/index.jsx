import React from 'react'
import PropTypes from 'prop-types'

const AboutMe = (props) => {
    const { config = {} } = { ...props }
    const { about = {} } = { ...config }
    const { title = '', contents = [] } = { ...about }
    return (
      <React.Fragment>
        <section className={'about'}>
          <div className={'content'}>
            <div className={'info'} data-sal={'fade'} data-sal-delay={200} data-sal-easing={'ease'}>
              <h1 className={'title'}>{title}</h1>
              {(contents || []).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
};

AboutMe.propTypes = { config: PropTypes.object.isRequired };

export default AboutMe;
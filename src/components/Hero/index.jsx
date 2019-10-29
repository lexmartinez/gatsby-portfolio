import React from 'react'
import PropTypes from 'prop-types'
import { FaArrowDown } from 'react-icons/fa/'

const Hero = (props) => {

    const { scrollToContent } = props;
    return (
      <React.Fragment>
        <section className={'hero'}>
          <h1>FullStack</h1>
          <h1><strong>Node JS</strong> | <strong>React JS</strong></h1>
          <h1>Developer</h1>
          <button onClick={scrollToContent} aria-label={'scroll'}>
            <FaArrowDown />
          </button>
        </section>
      </React.Fragment>
    );
};

Hero.propTypes = { scrollToContent: PropTypes.func.isRequired };

export default Hero;
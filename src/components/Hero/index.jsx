import React from 'react'
import PropTypes from 'prop-types'
import { FiGithub, FiMail, FiTwitter, FiLinkedin } from 'react-icons/fi/'
import { FaArrowDown } from 'react-icons/fa/'

const Hero = (props) => {

    const { scrollToContent } = props;
    return (
      <React.Fragment>
        <section className={'hero'}>
          <h1>Hi, I'm Lex!</h1>
          <h1><strong>Node JS</strong> | <strong>React JS</strong></h1>
          <h1>Developer</h1>
          <ul className={'socials'}>
            <li><a href={'mailto:me@lexmartinez.com'} target={'_blank'}><FiMail size={32}/></a></li>
            <li><a href={'https://github.com/lexmartinez'} target={'_blank'}><FiGithub size={32}/></a></li>
            <li><a href={'#'} target={'_blank'}><FiLinkedin size={32} /></a></li>
            <li><a href={'https://twitter.com/lex0316'} target={'_blank'}><FiTwitter size={32}/></a></li>
          </ul>
          <button onClick={scrollToContent} aria-label={'scroll'}>
            <FaArrowDown />
          </button>
        </section>
      </React.Fragment>
    );
};

Hero.propTypes = { scrollToContent: PropTypes.func.isRequired };

export default Hero;
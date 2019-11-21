import React from 'react'
import PropTypes from 'prop-types'
import Socials from '../Socials'
import { FaArrowDown } from 'react-icons/fa/'

const Hero = (props) => {
    const { scrollToContent, config = {} } = props;
    const { socials = {}, hero = {} } = { ...config }
    const { title = '', subtitle = '', tags = [] } = { ...hero }
    return (
      <React.Fragment>
        <section className={'hero'}>
          <div className={'overlay'}/>
          <h1 data-sal={'fade'} data-sal-delay={200} data-sal-easing={'ease'}>{title}</h1>
          <h1 data-sal={'fade'} data-sal-delay={200} data-sal-easing={'ease'}>{tags.map((tag, index) => 
            {return <React.Fragment key={index}>
                <strong>{tag}</strong>
                { index < tags.length - 1 && <span> | </span>}
              </React.Fragment>})}
          </h1>
          <h1 data-sal={'fade'} data-sal-delay={200} data-sal-easing={'ease'}>{subtitle}</h1>
          <Socials data={socials} size={32}/>
          <button onClick={scrollToContent} aria-label={'scroll'}>
            <FaArrowDown />
          </button>
        </section>
      </React.Fragment>
    );
};

Hero.propTypes = { scrollToContent: PropTypes.func.isRequired, config: PropTypes.object.isRequired };

export default Hero;
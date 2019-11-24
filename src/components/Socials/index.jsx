import React from 'react'
import PropTypes from 'prop-types'
import { FiGithub, FiMail, FiTwitter, FiLinkedin } from 'react-icons/fi/'

const Socials = (props) => {
    const { data = {}, size = 0 } = { ...props }
    const { github = '', email = '', linkedin = '', twitter = '' } = { ...data }
    return (
      <React.Fragment>
        <ul className={'socials'}>
            {!!email && <li>
                <a href={`mailto:${email}`} target={'_blank'} aria-label={'Email'}><FiMail size={size}/></a></li>}
            {!!github && <li>
                <a href={`https://github.com/${github}`} target={'_blank'} aria-label={'Github'}><FiGithub size={size}/></a></li>}
            {!!linkedin && <li>
                <a href={`https://co.linkedin.com/in/${linkedin}`} target={'_blank'} aria-label={'LinkedIn'}><FiLinkedin size={size} /></a></li>}
            {!!twitter && <li>
                <a href={`https://twitter.com/${twitter}`} target={'_blank'} aria-label={'Twitter'}><FiTwitter size={size}/></a></li>}
        </ul>
      </React.Fragment>
    );
};

Socials.propTypes = { data: PropTypes.object.isRequired, size: PropTypes.number.isRequired };

export default Socials;
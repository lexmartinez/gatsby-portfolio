import React from 'react'
// import Socials from '../Socials'
// import PropTypes from 'prop-types'
import { FiGithub, FiMail, FiTwitter, FiLinkedin, FiMap } from 'react-icons/fi/'
import './styles.css'

const Footer = (props) => {
  const {
    github = 'a',
    email = 'a',
    linkedin = 'a',
    twitter = 'a',
    size = 22,
  } = {
    ...props,
  }
  const renderSocials = () => {
    return (
      <ul className={'socials'}>
        {!!email && (
          <li>
            <a
              href={`mailto:${email}`}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'Email'}
            >
              <FiMail size={size} />
            </a>
          </li>
        )}
        {!!github && (
          <li>
            <a
              href={`https://github.com/${github}`}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'Github'}
            >
              <FiGithub size={size} />
            </a>
          </li>
        )}
        {!!linkedin && (
          <li>
            <a
              href={`https://co.linkedin.com/in/${linkedin}`}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'LinkedIn'}
            >
              <FiLinkedin size={size} />
            </a>
          </li>
        )}
        {!!twitter && (
          <li>
            <a
              href={`https://twitter.com/${twitter}`}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'Twitter'}
            >
              <FiTwitter size={size} />
            </a>
          </li>
        )}
      </ul>
    )
  }
  return (
    <>
      <section className={'footer'}>
        <div className={'container'}>
          <div className={'left'}>
            <h2>So, do we build awesome stuff together?</h2>
            <h3>Let's get in touch</h3>
            <p>
              If you have a web or mobile app idea in mind, feel free to contact
              me. Currently I'm available for new exciting projects, I'll be
              glad to work with you!
            </p>
            {renderSocials()}
          </div>
          <div className={'right'}>
            <h3>Links</h3>
            <a href={'/work'}>Meet my Work</a>
            <a href={'/open-source'}>Open Source</a>
            <a href={'/blog'}>Blog Posts</a>
          </div>
          <div className={'last'}>
            {renderSocials()}
            <p>
              <FiMap size={16} /> <span>Medellín, Colombia</span>
            </p>
            <p>&copy; 2020 Lex Martinez</p>
          </div>
        </div>
      </section>
    </>
  )
}

// Footer.propTypes = { config: PropTypes.object.isRequired }

export default Footer

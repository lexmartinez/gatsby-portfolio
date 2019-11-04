import React from 'react'
import PropTypes from 'prop-types'

const Contact = (props) => {
    const { config = {} } = { ...props }
    const { socials = {}, contact = {} } = { ...config }
    const { email = '' } = { ...socials }
    const { title = '', subtitle = '', text = '' } = { ...contact }
    return (
      <React.Fragment>
        <section className={'contact'}>
         <div data-sal={'fade'} data-sal-delay={300} data-sal-easing={'ease'}></div>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <p>{text}</p>
          {!!email && <a className={'mail-button'} href={`mailto:${email}`}>{email}</a>}
        </section>
      </React.Fragment>
    );
};

Contact.propTypes = { config: PropTypes.object.isRequired };

export default Contact;
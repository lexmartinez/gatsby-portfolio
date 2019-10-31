import React from 'react'
import Socials from '../Socials'
import PropTypes from 'prop-types'

const Footer = (props) => {
    const { config = {} } = { ...props }
    const { footer = '', socials = {} } = { ...config }
    return (
      <React.Fragment>
        <section className={'footer'}>
            <span className={'text'}>&copy; {footer} ⚡ Powered With <b>Gatsby</b></span>
            <Socials data={socials} size={22}/>
        </section>
      </React.Fragment>
    );
};

Footer.propTypes = { config: PropTypes.object.isRequired };

export default Footer;
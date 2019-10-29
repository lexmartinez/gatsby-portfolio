import React from 'react'
import PropTypes from 'prop-types'

const NavBar = (props) => {
    const { refs, scrollToContent } = { ...props }
    const { services, about, portfolio, blog, contact } = { ...refs }
    return (
      <React.Fragment>
        <nav className={'navbar'}>
            <div className={'header'}>
                <h1 className={'title'}>Lex Martinez<span className={'subtitle'}>.com</span></h1>
                <ul className={'menu'}>
                    <li><a onClick={scrollToContent.bind(this, services)}>what i do</a></li>
                    <li><a onClick={scrollToContent.bind(this, portfolio)}>portfolio</a></li>
                    <li><a onClick={scrollToContent.bind(this, about)}>about</a></li>
                    <li><a onClick={scrollToContent.bind(this, blog)}>blog</a></li>
                    <li><a onClick={scrollToContent.bind(this, contact)}>contact</a></li>
                </ul>
            </div>
        </nav>
      </React.Fragment>
    );
};

NavBar.propTypes = { scrollToContent: PropTypes.func.isRequired, refs: PropTypes.object.isRequired };

export default NavBar;
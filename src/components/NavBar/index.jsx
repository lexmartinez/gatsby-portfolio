import React from 'react'
import PropTypes from 'prop-types'
import { FiMenu } from 'react-icons/fi/'

const NavBar = (props) => {
    const { refs, scrollToContent, config } = { ...props }
    const { hero, about, portfolio, contact } = { ...refs }
    const { blog = '' } = { ...config }

    if (typeof window !== 'undefined') {
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos <  window.innerHeight) {
          document.getElementById('navbar').className = 'navbar'
          document.getElementById('appbar').className = 'appbar'
        } else {
          document.getElementById('navbar').className = 'navbar navbar-scroll';
          document.getElementById('appbar').className = 'appbar appbar-scroll';
        }
      }
    }

    const toogleMenu = () => {
      document.getElementById('appbar').classList.toggle('appbar-active')
    }

    const renderMenu = () =>{
      return (<ul className={'menu'}>
                <li><a onClick={scrollToContent.bind(this, about)}>about me</a></li>
                <li><a onClick={scrollToContent.bind(this, portfolio)}>projects</a></li>
                {!!blog && <li><a href={blog} target={'_blank'}>blog</a></li>}
                <li><a onClick={scrollToContent.bind(this, contact)}>contact</a></li>
        </ul>)
    }

    return (
      <React.Fragment>
        <nav className={'navbar'} id={'navbar'}>
            <div className={'header'}>
                <h1 className={'title'}
                  onClick={scrollToContent.bind(this, hero)}>Lex Martinez<span className={'subtitle'}>.com</span></h1>
                  {renderMenu()}
                <button className={'menu-button'} onClick={toogleMenu}>
                  <FiMenu size={30} />
                </button>
            </div>
        </nav>
        <nav className={'appbar'} id={'appbar'}>
          {renderMenu()}
        </nav>
      </React.Fragment>
    );
};

NavBar.propTypes = { scrollToContent: PropTypes.func.isRequired, refs: PropTypes.object.isRequired, config: PropTypes.object.isRequired };

export default NavBar;
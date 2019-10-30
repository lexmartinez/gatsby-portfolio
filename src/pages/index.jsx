import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Hero, NavBar, AboutMe, Projects, Blog, Contact } from '../components'
import '../themes/style.sass'

class Index extends React.Component {

    hero = React.createRef();
    about = React.createRef();
    portfolio = React.createRef();
    blog = React.createRef();
    contact = React.createRef();

    constructor(props) {
        super(props);
        this.scrollToContent = this.scrollToContent.bind(this);
    }

    scrollToContent(item) {
        const { current } = { ...item }
        !!current && current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    render() {
        const { data } = this.props
        const { site = {} } = { ...data }
        const { siteMetadata: metadata = {} } = { ...site }
        const { title = '' } = { ...metadata }
        const refs = {
            hero: this.hero, portfolio: this.portfolio, about: this.about, blog: this.blog, contact: this.contact
        }
        return (
        <div>
            <Helmet>
                <meta charSet={'utf-8'}/>
                <title>{title}</title>
            </Helmet>
            <NavBar refs={refs} scrollToContent={this.scrollToContent}/>
            <span className={'separator'} ref={this.hero} />
            <Hero scrollToContent={this.scrollToContent.bind(this, this.about)} />
            <span className={'separator'} ref={this.about} />
            <AboutMe/>
            <span className={'separator'} ref={this.portfolio} />
            <Projects/>
            <span className={'separator'} ref={this.blog} />
            <Blog/>
            <span className={'separator'} ref={this.contact} />
            <Contact/>
        </div>
        )
    }

}

Index.propTypes = { data: PropTypes.object.isRequired };

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Index;
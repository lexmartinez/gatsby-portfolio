import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import '../themes/style.sass'

class Index extends React.Component {

    services = React.createRef();
    portfolio = React.createRef();
    about = React.createRef();
    blog = React.createRef();
    contact = React.createRef();

    constructor(props) {
        super(props);
        this.scrollToContent = this.scrollToContent.bind(this);
    }

    scrollToContent(item) {
        !!item && item.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    render() {
        const { data } = this.props
        const { site = {} } = { ...data }
        const { siteMetadata: metadata = {} } = { ...site }
        const { title = '' } = { ...metadata }
        const refs = {
            services: this.services, portfolio: this.portfolio,
            about: this.about, blog: this.blog, contact: this.contact
        }
        return (
        <div>
            <Helmet>
                <meta charSet={'utf-8'}/>
                <title>{title}</title>
            </Helmet>
            <NavBar refs={refs} scrollToContent={this.scrollToContent}/>
            <Hero scrollToContent={this.scrollToContent.bind(this, this.services)} />
            <span className={'separator'} ref={this.services} />
            <span className={'separator'} ref={this.portfolio} />
            <span className={'separator'} ref={this.about} />
            <span className={'separator'} ref={this.blog} />
            <span className={'separator'} ref={this.contact} />
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
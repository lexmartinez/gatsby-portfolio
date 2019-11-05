import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = (props) => {
    const { project = {} } = { ...props }
    const { title = '', description = '', image = '', type = '', tags = [], link = null } = { ...project }
    return (
      <React.Fragment>
        <a href={link} target={!!link && '_blank'}>
            <div className={'project-card'} data-sal={'slide-up'} data-sal-delay={200} data-sal-easing={'ease'}>
                {!!image && <div className={'card-image'} style={{ background: `url(${image}) 100%`}}/>}
                <div className={'card-info'}>
                    <p className={'card-type'}>{type}</p>
                    <h1 className={'card-title'}>{title}</h1>
                    <p className={'card-text'}>{description}</p>
                    <div className={'tags'}>
                        {(tags || []).map((tag, index) => <span className={'tag'} key={index}>{tag}</span>)}
                    </div>
                </div>
            </div>
        </a>
      </React.Fragment>
    );
};

ProjectCard.propTypes = { project: PropTypes.object.isRequired };

export default ProjectCard;
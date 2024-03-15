import React from 'react'
import "./Projects.css"
import data from "../../data.json"

const Projects = () => {

    const projectElements = data.map(project => (
        <div key={project.id} className='projects'>
            <div className='project-image'>
                <img src={project.image} alt="" width={345}/>
            </div>
            <h3 className='project-title'>{project.name}</h3>
            <div className='technology'>
                <h4>{project.technology[0].toUpperCase()}</h4> 
                <h4>{project.technology[1].toUpperCase()}</h4>
            </div>
            <div className='project-links overlay'>
                <div className="overlay-text">
                    <a href={project.deployment_url} target='_blank' rel="noopener noreferrer">VIEW PROJECT</a>
                    <a href={project.github_url} target='_blank' rel='noopener noreferrer'>VIEW CODE</a>
                </div>
            </div>
        </div>
    ))

    return (
        <div className='container'>
            <div className="container-top">
                <h3>Projects</h3>
                <h3>CONTACT ME</h3>
            </div>
            <hr id='project-line'/>
            <div className="project-container">
                {projectElements}
            </div>
        </div>
    )
}

export default Projects

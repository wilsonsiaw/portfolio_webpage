import React from 'react'
import data from "../../data.json"

const Projects = () => {

    const projectElements = data.map(project => (
        <div key={project.id} className='project-container'>
            <div className='project-image'>
                <img src={project.image} alt="" width={345}/>
            </div>
            <h3 className='project-title'>{project.name}</h3>
            <h4 className='technology'>{project.technology[0]} {project.technology[1]}</h4>
            <div className='project-links'>
                <a href="">VIEW PROJECT</a>
                <a href="">VIEW CODE</a>
            </div>
        </div>
    ))

    return (
        <div>
            <h3>Projects</h3>
            <h3>CONTACT ME</h3>
            {projectElements}
        </div>
    )
}

export default Projects

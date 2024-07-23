import React from 'react'
import './Works.css';
import { Projects } from '../../Data/Data';
import { FaCode, FaLink, FaGithub } from 'react-icons/fa';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Projects</h2>
            <span className='workDesc'>A showcase of some of the projects I've worked on.</span>
            <div className='worksGrid'>
                {Projects.map((project, index) => (
                    <div className='workCard' key={index}>
                        <FaCode className='projectIcon' />
                        <h3 className='projectTitle'>{project.title}</h3>
                        <p className='projectDesc'>{project.description}</p>
                        <div className='techStack'>
                            {project.technologies.map((tech, idx) => (
                                <span className='tech' key={idx}>{tech}</span>
                            ))}
                        </div>
                        <div className='projectLinks'>
                            <a href={project.link} className='projectLink'><FaLink /> Live Demo</a>
                            <a href={project.github} className='projectLink'><FaGithub /> GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className='workBtn'>See more</button> */}
        </section>

    )
}

export default Works

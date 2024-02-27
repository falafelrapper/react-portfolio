import { Link } from 'react-router-dom';

export default function Project({ projectTitle, projectLink, projectImg, projectGit, imgAlt }) {
    return (
        <div className='project-card' >
            <img id='project-pic' src={projectImg} alt={imgAlt} />
            <div className="project-links">
                <Link to={projectLink}><h2>{projectTitle}</h2></Link>
                <Link to={projectGit} target="_blank" rel="noopener noreferrer"><img id='github-repo' src="../images/github.png" alt="Github Repository" /></Link>
            </div>
        </div>
    )
}
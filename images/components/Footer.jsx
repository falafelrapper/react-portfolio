import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
            <Link to='https://www.github.com/falafelrapper/' target="_blank" rel="noopener noreferrer"><img id='github' src="../images/github.png" alt="Github" /></Link>
            <Link to='https://www.linkedin.com/in/zachary-maxwell-roy/' target="_blank" rel="noopener noreferrer"><img id='github' src="../images/linkedin.png" alt="linkedIn" /></Link>
            <Link to='https://stackoverflow.com/users/23482408/zachary-roy' target="_blank" rel="noopener noreferrer"><img id='stackoverflow' src="../images/stack-overflow.png" alt="StackOverflow" /></Link>
        </footer>
    );
}
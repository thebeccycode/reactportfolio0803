import React from 'react';
import { Link } from 'react-router-dom';

function Projects(){
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li><Link to="https://github.com/thebeccycode">Personal Website </Link></li>
                <li><Link to="https://github.com/thebeccycode">Repositories </Link></li>
                <li><Link to="https://github.com/thebeccycode">Client Website </Link></li>

            </ul>
            <p>Placeholder links above.</p>
        </div>
    )
};

export default Projects;
import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="col-12 col-md-8">

            <Link to={'/'}>All posts</Link>
            <Link to={'/new'}>New post</Link>

        </nav>
    );
};

export default Navigation;
import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <div className="col-12 col-md-8">
            <Link to={'/'}>
                <h1 className="text-center">React Blog</h1>
            </Link>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className=" btn-sm btn-primary" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn-sm btn-primary" to="/login">Login</Link>;
    }
};

export default AuthButton;